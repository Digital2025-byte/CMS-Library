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

export default function AccordionWithImagesContentForm({
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
        idPrefix="accordion-images"
        title={content.title}
        description={content.description}
        onTitleChange={(value) => updateField("title", value)}
        onDescriptionChange={(value) => updateField("description", value)}
        onReset={() => reset(TITLE_KEYS)}
      />

      <InspectorSection title="Items" onReset={() => reset(ITEM_KEYS)}>
        <InspectorRepeater
          items={content.items}
          createItem={() => ({
            title: "",
            description: "",
            imageUrl: "",
            imageAlt: "",
          })}
          onChange={(items) => onChange({ ...content, items })}
        >
          {(item, { index, update }) => (
            <>
              <InspectorField
                id={`accordion-images-item-${index}-title`}
                label="Title"
                value={item.title}
                onChange={(value) => update("title", value)}
              />
              <InspectorField
                id={`accordion-images-item-${index}-description`}
                label="Description"
                value={item.description}
                onChange={(value) => update("description", value)}
                multiline
              />
              <InspectorField
                id={`accordion-images-item-${index}-image`}
                label="Image URL"
                value={item.imageUrl}
                onChange={(value) => update("imageUrl", value)}
              />
              <InspectorField
                id={`accordion-images-item-${index}-alt`}
                label="Image alt"
                value={item.imageAlt}
                onChange={(value) => update("imageAlt", value)}
              />
            </>
          )}
        </InspectorRepeater>
      </InspectorSection>
    </div>
  );
}
