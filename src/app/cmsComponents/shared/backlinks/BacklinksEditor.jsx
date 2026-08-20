"use client";

import { useMemo } from "react";
import {
  InspectorAutocompleteField,
  InspectorLink,
  InspectorRepeater,
  InspectorSection,
  InspectorSelect,
  applyInspectorReset,
} from "@/components/inspector";
import {
  countPhraseOccurrences,
  emptyBacklink,
  getOccurrenceOptions,
  getWordSuggestionsFromText,
} from "./helpers";

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
        const occurrenceOptions = hasMultipleMatches
          ? getOccurrenceOptions(sourceText || "", phrase)
          : [];
        const occurrenceValue = occurrenceOptions.some(
          (option) => option.value === String(item.occurrence || "first")
        )
          ? String(item.occurrence || "first")
          : "first";

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
              <InspectorSelect
                id={`${idPrefix}-${index}-occurrence`}
                label="Which match"
                value={occurrenceValue}
                options={occurrenceOptions}
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
