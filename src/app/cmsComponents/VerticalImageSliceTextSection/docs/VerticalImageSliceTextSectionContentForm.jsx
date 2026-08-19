"use client";

import {
  InspectorField,
  InspectorSection,
  InspectorTitleSection,
  applyInspectorReset,
} from "@/components/inspector";

const TITLE_KEYS = ["title", "description"];
const IMAGE_KEYS = ["imageUrl", "imageAlt"];

export default function VerticalImageSliceTextSectionContentForm({
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
        idPrefix="vertical-image-slice"
        title={content.title}
        description={content.description}
        onTitleChange={(value) => updateField("title", value)}
        onDescriptionChange={(value) => updateField("description", value)}
        onReset={() => reset(TITLE_KEYS)}
      />

      <InspectorSection title="Highlight" onReset={() => reset(["highlightPhrase"])}>
        <InspectorField
          id="vertical-image-slice-highlight"
          label="Highlight phrase"
          value={content.highlightPhrase || ""}
          onChange={(value) => updateField("highlightPhrase", value)}
        />
      </InspectorSection>

      <InspectorSection title="Images" onReset={() => reset(IMAGE_KEYS)}>
        <InspectorField
          id="vertical-image-slice-image"
          label="Image URL"
          value={content.imageUrl || ""}
          onChange={(value) => updateField("imageUrl", value)}
        />
        <InspectorField
          id="vertical-image-slice-image-alt"
          label="Image alt"
          value={content.imageAlt || ""}
          onChange={(value) => updateField("imageAlt", value)}
        />
      </InspectorSection>
    </div>
  );
}
