"use client";

import {
  InspectorField,
  InspectorRepeater,
  InspectorSection,
  applyInspectorReset,
} from "@/components/inspector";

const TITLE_KEYS = ["title"];
const ITEM_KEYS = ["items"];

export default function TitleWithListContentForm({
  content,
  onChange,
  defaults,
}) {
  const updateField = (key, value) => {
    onChange({ ...content, [key]: value });
  };
  const reset = (keys) => onChange(applyInspectorReset(content, defaults, keys));

  return (
    <div>
      <InspectorSection title="Title" onReset={() => reset(TITLE_KEYS)}>
        <InspectorField
          id="title-with-list-title"
          label="Title"
          value={content.title || ""}
          onChange={(value) => updateField("title", value)}
        />
      </InspectorSection>

      <InspectorSection title="Items" onReset={() => reset(ITEM_KEYS)}>
        <InspectorRepeater
          items={content.items || []}
          createItem={() => ({ text: "" })}
          itemLabel={(item, index) => item.text || `Item ${index + 1}`}
          addLabel="Add Item"
          onChange={(items) => onChange({ ...content, items })}
        >
          {(item, { index, update }) => (
            <InspectorField
              id={`title-with-list-item-${index}`}
              label="Text"
              value={item.text || ""}
              onChange={(value) => update("text", value)}
              multiline
            />
          )}
        </InspectorRepeater>
      </InspectorSection>
    </div>
  );
}
