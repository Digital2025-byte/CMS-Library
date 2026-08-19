"use client";

import {
  InspectorField,
  InspectorRepeater,
  InspectorSection,
  InspectorTitleSection,
  applyInspectorReset,
} from "@/components/inspector";

const TITLE_KEYS = ["title", "description"];
const ITEM_KEYS = ["items"];

const emptyItem = () => ({
  caption: "",
  imageUrl: "",
  imageAlt: "",
});

export default function OnBoardImageRingContentForm({
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
      <InspectorTitleSection
        idPrefix="on-board-image-ring"
        title={content.title}
        description={content.description}
        onTitleChange={(value) => updateField("title", value)}
        onDescriptionChange={(value) => updateField("description", value)}
        onReset={() => reset(TITLE_KEYS)}
      />

      <InspectorSection title="Items" onReset={() => reset(ITEM_KEYS)}>
        <InspectorRepeater
          items={content.items || []}
          createItem={emptyItem}
          itemLabel={(_item, index) => `Item ${index + 1}`}
          onChange={(items) => onChange({ ...content, items })}
        >
          {(item, { index, update }) => (
            <>
              <InspectorField
                id={`on-board-image-ring-${index}-caption`}
                label="Caption"
                value={item.caption || ""}
                onChange={(value) => update("caption", value)}
              />
              <InspectorField
                id={`on-board-image-ring-${index}-image`}
                label="Image URL"
                value={item.imageUrl || ""}
                onChange={(value) => update("imageUrl", value)}
              />
              <InspectorField
                id={`on-board-image-ring-${index}-alt`}
                label="Image alt"
                value={item.imageAlt || ""}
                onChange={(value) => update("imageAlt", value)}
              />
            </>
          )}
        </InspectorRepeater>
      </InspectorSection>
    </div>
  );
}
