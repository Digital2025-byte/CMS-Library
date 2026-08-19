"use client";

import {
  InspectorField,
  InspectorRepeater,
  InspectorSection,
  applyInspectorReset,
} from "@/components/inspector";

const TITLE_KEYS = ["title", "stepLabel"];
const ITEM_KEYS = ["items"];

export default function ConnectionStepsListContentForm({
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
          id="connection-steps-title"
          label="Title"
          value={content.title || ""}
          onChange={(value) => updateField("title", value)}
        />
        <InspectorField
          id="connection-steps-label"
          label="Step label"
          value={content.stepLabel || ""}
          onChange={(value) => updateField("stepLabel", value)}
        />
      </InspectorSection>

      <InspectorSection title="Steps" onReset={() => reset(ITEM_KEYS)}>
        <InspectorRepeater
          items={content.items || []}
          createItem={() => ({
            description: "",
            imageUrl: "",
            imageAlt: "",
          })}
          itemLabel={(item, index) =>
            item.description || `Step ${index + 1}`
          }
          addLabel="Add Step"
          onChange={(items) => onChange({ ...content, items })}
        >
          {(item, { index, update }) => (
            <>
              <InspectorField
                id={`connection-steps-${index}-description`}
                label="Description"
                value={item.description || ""}
                onChange={(value) => update("description", value)}
                multiline
              />
              <InspectorField
                id={`connection-steps-${index}-image`}
                label="Image URL"
                value={item.imageUrl || ""}
                onChange={(value) => update("imageUrl", value)}
              />
              <InspectorField
                id={`connection-steps-${index}-alt`}
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
