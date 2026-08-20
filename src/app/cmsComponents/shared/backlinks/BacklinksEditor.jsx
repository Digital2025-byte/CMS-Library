"use client";

import { useMemo } from "react";
import { typography } from "@/styles/typography";
import {
  InspectorAutocompleteField,
  InspectorLink,
  InspectorRepeater,
  InspectorSection,
  applyInspectorReset,
} from "@/components/inspector";
import {
  countPhraseOccurrences,
  emptyBacklink,
  getMatchCheckboxOptionsByCount,
  getSelectedMatchIndexes,
  getWordSuggestionsFromText,
  serializeOccurrence,
} from "./helpers";

function MatchPicker({ idPrefix, matchCount, occurrence, onChange }) {
  const options = useMemo(
    () => getMatchCheckboxOptionsByCount(matchCount),
    [matchCount]
  );
  const selected = getSelectedMatchIndexes(occurrence, matchCount);
  const allSelected = matchCount > 0 && selected.length === matchCount;

  const setSelected = (nextIndexes) => {
    onChange(serializeOccurrence(nextIndexes, matchCount));
  };

  const toggleAll = () => {
    if (allSelected) {
      setSelected([1]);
      return;
    }
    setSelected(options.map((option) => option.value));
  };

  const toggleOne = (value) => {
    if (selected.includes(value)) {
      const next = selected.filter((index) => index !== value);
      setSelected(next.length ? next : [value]);
      return;
    }
    setSelected([...selected, value]);
  };

  return (
    <fieldset className="flex flex-col gap-1.5">
      <legend className={`${typography.caption} text-700`}>Which matches</legend>
      <div className="flex flex-col gap-2">
        <label
          className={`${typography.caption} flex cursor-pointer items-center gap-2 text-foreground`}
        >
          <input
            id={`${idPrefix}-all`}
            type="checkbox"
            checked={allSelected}
            onChange={toggleAll}
            className="h-4 w-4 shrink-0 cursor-pointer accent-foreground"
          />
          All matches ({matchCount})
        </label>
        <div className="flex flex-col gap-1.5 border-s border-200 ps-3">
          {options.map((option) => (
            <label
              key={option.value}
              className={`${typography.caption} flex cursor-pointer items-center gap-2 text-foreground`}
            >
              <input
                id={`${idPrefix}-${option.value}`}
                type="checkbox"
                checked={selected.includes(option.value)}
                onChange={() => toggleOne(option.value)}
                className="h-4 w-4 shrink-0 cursor-pointer accent-foreground"
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>
    </fieldset>
  );
}

/**
 * Backlinks repeater bound to a source text field (for phrase matching).
 */
export default function BacklinksEditor({
  idPrefix = "backlinks",
  title = "Backlinks",
  links = [],
  sourceText = "",
  onChange,
  defaults = [],
  showReset = true,
  compact = false,
}) {
  const wordSuggestions = useMemo(
    () => getWordSuggestionsFromText(sourceText || ""),
    [sourceText]
  );

  const reset = () => {
    if (!onChange) return;
    onChange(
      applyInspectorReset({ links }, { links: defaults }, ["links"]).links || []
    );
  };

  const repeater = (
    <InspectorRepeater
      items={links || []}
      createItem={emptyBacklink}
      itemLabel={(item, index) => item?.text || `Link ${index + 1}`}
      addLabel="Add Backlink"
      onChange={onChange}
    >
      {(item, { index, update }) => {
        const phrase = item.text || "";
        const matchCount = countPhraseOccurrences(sourceText || "", phrase);
        const hasMultipleMatches = matchCount > 1;

        return (
          <>
            <InspectorAutocompleteField
              id={`${idPrefix}-${index}-text`}
              label="Word or phrase"
              value={phrase}
              onChange={(value) => update("text", value)}
              suggestions={wordSuggestions}
              placeholder="Type a word, then press Tab"
            />
            {hasMultipleMatches ? (
              <MatchPicker
                idPrefix={`${idPrefix}-${index}-occurrence`}
                matchCount={matchCount}
                occurrence={item.occurrence}
                onChange={(value) => update("occurrence", value)}
              />
            ) : null}
            <InspectorLink
              id={`${idPrefix}-${index}`}
              type={item.type || "internal"}
              href={item.href || ""}
              onChange={({ type, href }) => {
                const next = (links || []).map((link, linkIndex) =>
                  linkIndex === index ? { ...link, type, href } : link
                );
                onChange(next);
              }}
            />
          </>
        );
      }}
    </InspectorRepeater>
  );

  if (compact) {
    return repeater;
  }

  return (
    <InspectorSection
      title={title}
      onReset={showReset ? reset : undefined}
    >
      {repeater}
    </InspectorSection>
  );
}
