"use client";

import {
  InspectorField,
  InspectorRepeater,
  InspectorSection,
  InspectorSelect,
  InspectorTitleSection,
  applyInspectorReset,
} from "@/components/inspector";
import { ICON_OPTIONS } from "../utils/icons";

const TITLE_KEYS = ["title", "description"];
const PREFIX_KEYS = ["prefix", "chip"];
const ITEM_KEYS = ["items"];

const emptyItem = () => ({
  title: "",
  userName: "",
  link: "",
  icon: "",
  chip: "",
});

const iconOptions = [{ value: "", label: "None" }, ...ICON_OPTIONS];

export default function SimpleGridWithPrefixContentForm({
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
        idPrefix="simple-grid"
        title={content.title}
        description={content.description}
        onTitleChange={(value) => updateField("title", value)}
        onDescriptionChange={(value) => updateField("description", value)}
        onReset={() => reset(TITLE_KEYS)}
      />

      <InspectorSection title="Prefix" onReset={() => reset(PREFIX_KEYS)}>
        <InspectorField
          id="simple-grid-prefix"
          label="Prefix"
          value={content.prefix || ""}
          onChange={(value) => updateField("prefix", value)}
        />
        <InspectorField
          id="simple-grid-chip"
          label="Chip"
          value={content.chip || ""}
          onChange={(value) => updateField("chip", value)}
        />
      </InspectorSection>

      <InspectorSection title="Channels" onReset={() => reset(ITEM_KEYS)}>
        <InspectorRepeater
          items={content.items || []}
          createItem={emptyItem}
          itemLabel={(item, index) =>
            item.title || item.userName || `Channel ${index + 1}`
          }
          addLabel="Add Channel"
          onChange={(items) => onChange({ ...content, items })}
        >
          {(item, { index, update }) => (
            <>
              <InspectorField
                id={`simple-grid-${index}-title`}
                label="Title"
                value={item.title || ""}
                onChange={(value) => update("title", value)}
              />
              <InspectorField
                id={`simple-grid-${index}-user`}
                label="Handle"
                value={item.userName || ""}
                onChange={(value) => update("userName", value)}
              />
              <InspectorField
                id={`simple-grid-${index}-link`}
                label="Link"
                value={item.link || ""}
                onChange={(value) => update("link", value)}
              />
              <InspectorSelect
                id={`simple-grid-${index}-icon`}
                label="Icon"
                value={item.icon || ""}
                options={iconOptions}
                onChange={(value) => update("icon", value)}
              />
              <InspectorField
                id={`simple-grid-${index}-chip`}
                label="Chip override"
                value={item.chip || ""}
                onChange={(value) => update("chip", value)}
              />
            </>
          )}
        </InspectorRepeater>
      </InspectorSection>
    </div>
  );
}
