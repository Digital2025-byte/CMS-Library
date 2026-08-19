"use client";

import {
  InspectorField,
  InspectorSection,
  InspectorTitleSection,
  applyInspectorReset,
} from "@/components/inspector";

const TITLE_KEYS = ["title", "description"];

export default function LegalInformationHeroContentForm({
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
        idPrefix="legal-information-hero"
        title={content.title}
        description={content.description}
        onTitleChange={(value) => updateField("title", value)}
        onDescriptionChange={(value) => updateField("description", value)}
        onReset={() => reset(TITLE_KEYS)}
      />

      <InspectorSection
        title="Pattern"
        onReset={() => reset(["patternUrl"])}
      >
        <InspectorField
          id="legal-information-hero-pattern"
          label="Pattern URL"
          value={content.patternUrl || ""}
          onChange={(value) => updateField("patternUrl", value)}
        />
      </InspectorSection>
    </div>
  );
}
