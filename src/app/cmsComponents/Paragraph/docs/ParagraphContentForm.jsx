"use client";

import { useMemo } from "react";
import {
  InspectorAutocompleteField,
  InspectorLink,
  InspectorRepeater,
  InspectorSection,
  InspectorSelect,
  InspectorTitleSection,
  applyInspectorReset,
} from "@/components/inspector";
import {
  getOccurrenceOptions,
  getWordSuggestionsFromText,
} from "../utils/helpers";

const TITLE_KEYS = ["title", "description"];
const LINK_KEYS = ["links"];

const emptyLink = () => ({
  text: "",
  type: "internal",
  href: "/gb/en",
  occurrence: "first",
});

export default function ParagraphContentForm({ content, onChange, defaults }) {
  const updateField = (key, value) => {
    onChange({ ...content, [key]: value });
  };
  const reset = (keys) => onChange(applyInspectorReset(content, defaults, keys));

  const wordSuggestions = useMemo(
    () => getWordSuggestionsFromText(content.description || ""),
    [content.description]
  );

  return (
    <div>
      <InspectorTitleSection
        idPrefix="paragraph"
        title={content.title}
        description={content.description}
        onTitleChange={(value) => updateField("title", value)}
        onDescriptionChange={(value) => updateField("description", value)}
        onReset={() => reset(TITLE_KEYS)}
      />

      <InspectorSection title="Backlinks" onReset={() => reset(LINK_KEYS)}>
        <InspectorRepeater
          items={content.links || []}
          createItem={emptyLink}
          itemLabel={(item, index) => item?.text || `Link ${index + 1}`}
          addLabel="Add Backlink"
          onChange={(links) => onChange({ ...content, links })}
        >
          {(item, { index, update }) => {
            const occurrenceOptions = getOccurrenceOptions(
              content.description || "",
              item.text || ""
            );
            const occurrenceValue = occurrenceOptions.some(
              (option) => option.value === String(item.occurrence || "first")
            )
              ? String(item.occurrence || "first")
              : "first";

            return (
              <>
                <InspectorAutocompleteField
                  id={`paragraph-link-${index}-text`}
                  label="Word or phrase"
                  value={item.text || ""}
                  onChange={(value) => update("text", value)}
                  suggestions={wordSuggestions}
                  placeholder="Type a word, then press Tab"
                />
                <InspectorSelect
                  id={`paragraph-link-${index}-occurrence`}
                  label="Which match"
                  value={occurrenceValue}
                  options={occurrenceOptions}
                  onChange={(value) => update("occurrence", value)}
                />
                <InspectorLink
                  id={`paragraph-link-${index}`}
                  type={item.type || "internal"}
                  href={item.href || ""}
                  onChange={({ type, href }) => {
                    const links = (content.links || []).map((link, linkIndex) =>
                      linkIndex === index ? { ...link, type, href } : link
                    );
                    onChange({ ...content, links });
                  }}
                />
              </>
            );
          }}
        </InspectorRepeater>
      </InspectorSection>
    </div>
  );
}
