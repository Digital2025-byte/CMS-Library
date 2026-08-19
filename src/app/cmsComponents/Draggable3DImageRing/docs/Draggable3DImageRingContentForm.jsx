"use client";

import {
  InspectorField,
  InspectorRepeater,
  InspectorSection,
  applyInspectorReset,
} from "@/components/inspector";

const ITEM_KEYS = ["items"];

const emptyItem = () => ({
  imageUrl: "",
  imageAlt: "",
});

export default function Draggable3DImageRingContentForm({
  content,
  onChange,
  defaults,
}) {
  const reset = (keys) => onChange(applyInspectorReset(content, defaults, keys));

  return (
    <div>
      <InspectorSection title="Images" onReset={() => reset(ITEM_KEYS)}>
        <InspectorRepeater
          items={content.items || []}
          createItem={emptyItem}
          itemLabel={(_item, index) => `Item ${index + 1}`}
          onChange={(items) => onChange({ ...content, items })}
        >
          {(item, { index, update }) => (
            <>
              <InspectorField
                id={`draggable-3d-ring-${index}-image`}
                label="Image URL"
                value={item.imageUrl || ""}
                onChange={(value) => update("imageUrl", value)}
              />
              <InspectorField
                id={`draggable-3d-ring-${index}-alt`}
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
