"use client";

import {
  InspectorField,
  InspectorRepeater,
  InspectorSection,
  InspectorTitleSection,
  applyInspectorReset,
} from "@/components/inspector";

const TITLE_KEYS = ["title", "description"];
const BRANCH_KEYS = ["branches"];

const emptyBranch = () => ({
  id: "",
  name: "",
  country: "",
  city: "",
  address: "",
  phone: "",
  email: "",
  workingHours: "",
  latitude: "",
  longitude: "",
});

export default function MapInfoContentForm({ content, onChange, defaults }) {
  const updateField = (key, value) => {
    onChange({ ...content, [key]: value });
  };
  const reset = (keys) => onChange(applyInspectorReset(content, defaults, keys));

  return (
    <div>
      <InspectorTitleSection
        idPrefix="map-info"
        title={content.title}
        description={content.description}
        onTitleChange={(value) => updateField("title", value)}
        onDescriptionChange={(value) => updateField("description", value)}
        onReset={() => reset(TITLE_KEYS)}
      />

      <InspectorSection title="Branches" onReset={() => reset(BRANCH_KEYS)}>
        <InspectorRepeater
          items={content.branches || []}
          createItem={emptyBranch}
          itemLabel={(item, index) =>
            item.name || item.city || `Branch ${index + 1}`
          }
          addLabel="Add Branch"
          onChange={(branches) => onChange({ ...content, branches })}
        >
          {(item, { index, update }) => (
            <>
              <InspectorField
                id={`map-info-${index}-name`}
                label="Name"
                value={item.name || ""}
                onChange={(value) => update("name", value)}
              />
              <InspectorField
                id={`map-info-${index}-country`}
                label="Country"
                value={item.country || ""}
                onChange={(value) => update("country", value)}
              />
              <InspectorField
                id={`map-info-${index}-city`}
                label="City"
                value={item.city || ""}
                onChange={(value) => update("city", value)}
              />
              <InspectorField
                id={`map-info-${index}-address`}
                label="Address"
                value={item.address || ""}
                onChange={(value) => update("address", value)}
                multiline
              />
              <InspectorField
                id={`map-info-${index}-phone`}
                label="Phone"
                value={item.phone || ""}
                onChange={(value) => update("phone", value)}
              />
              <InspectorField
                id={`map-info-${index}-email`}
                label="Email"
                value={item.email || ""}
                onChange={(value) => update("email", value)}
              />
              <InspectorField
                id={`map-info-${index}-hours`}
                label="Hours"
                value={item.workingHours || ""}
                onChange={(value) => update("workingHours", value)}
                multiline
              />
              <InspectorField
                id={`map-info-${index}-lat`}
                label="Latitude"
                value={item.latitude || ""}
                onChange={(value) => update("latitude", value)}
              />
              <InspectorField
                id={`map-info-${index}-lng`}
                label="Longitude"
                value={item.longitude || ""}
                onChange={(value) => update("longitude", value)}
              />
            </>
          )}
        </InspectorRepeater>
      </InspectorSection>
    </div>
  );
}
