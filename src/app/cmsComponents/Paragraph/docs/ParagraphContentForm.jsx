"use client";

import { useMemo } from "react";
import {
  InspectorAutocompleteField,
  InspectorLink,
  InspectorRepeater,
  InspectorSection,
  InspectorTitleSection,
  applyInspectorReset,
} from "@/components/inspector";
import { getWordSuggestionsFromText } from "../utils/helpers";

const TITLE_KEYS = ["title", "description"];
const LINK_KEYS = ["links"];

const emptyLink = () => ({
  text: "",
  type: "internal",
  href: "/gb/en",
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
          {(item, { index, update }) => (
            <>
              <InspectorAutocompleteField
                id={`paragraph-link-${index}-text`}
                label="Word or phrase"
                value={item.text || ""}
                onChange={(value) => update("text", value)}
                suggestions={wordSuggestions}
                placeholder="Type a word, then press Tab"
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
          )}
        </InspectorRepeater>
      </InspectorSection>
    </div>
  );
}
