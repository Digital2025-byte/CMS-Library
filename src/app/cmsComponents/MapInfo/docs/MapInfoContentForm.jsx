"use client";

import {
  InspectorField,
  InspectorRepeater,
  InspectorSection,
  InspectorTitleSection,
  applyInspectorReset,
} from "@/components/inspector";

const TITLE_KEYS = ["title", "description"];
const TAB_KEYS = ["tabs"];

const emptyOffice = () => ({
  id: "",
  name: "",
  city: "",
  address: "",
  phone: "",
  email: "",
  workingHours: "",
  latitude: "",
  longitude: "",
});

const emptyTab = () => ({
  country: "",
  items: [emptyOffice()],
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

      <InspectorSection title="Tabs" onReset={() => reset(TAB_KEYS)}>
        <InspectorRepeater
          items={content.tabs || []}
          createItem={emptyTab}
          itemLabel={(tab, index) => tab.country || `Tab ${index + 1}`}
          addLabel="Add Tab"
          titleKey="country"
          titlePlaceholder="Country"
          onChange={(tabs) => onChange({ ...content, tabs })}
        >
          {(tab, { index, update }) => (
            <>
              <InspectorField
                id={`map-info-tab-${index}-country`}
                label="Country"
                value={tab.country || ""}
                onChange={(value) => update("country", value)}
              />

              <InspectorRepeater
                items={tab.items || []}
                createItem={emptyOffice}
                itemLabel={(item, itemIndex) =>
                  item.name || item.city || `Item ${itemIndex + 1}`
                }
                addLabel="Add Item"
                onChange={(items) => update("items", items)}
              >
                {(item, { index: itemIndex, update: updateItem }) => (
                  <>
                    <InspectorField
                      id={`map-info-${index}-${itemIndex}-name`}
                      label="Name"
                      value={item.name || ""}
                      onChange={(value) => updateItem("name", value)}
                    />
                    <InspectorField
                      id={`map-info-${index}-${itemIndex}-city`}
                      label="City"
                      value={item.city || ""}
                      onChange={(value) => updateItem("city", value)}
                    />
                    <InspectorField
                      id={`map-info-${index}-${itemIndex}-address`}
                      label="Address"
                      value={item.address || ""}
                      onChange={(value) => updateItem("address", value)}
                      multiline
                    />
                    <InspectorField
                      id={`map-info-${index}-${itemIndex}-phone`}
                      label="Phone"
                      value={item.phone || ""}
                      onChange={(value) => updateItem("phone", value)}
                    />
                    <InspectorField
                      id={`map-info-${index}-${itemIndex}-email`}
                      label="Email"
                      value={item.email || ""}
                      onChange={(value) => updateItem("email", value)}
                    />
                    <InspectorField
                      id={`map-info-${index}-${itemIndex}-hours`}
                      label="Hours"
                      value={item.workingHours || ""}
                      onChange={(value) => updateItem("workingHours", value)}
                      multiline
                    />
                    <InspectorField
                      id={`map-info-${index}-${itemIndex}-lat`}
                      label="Latitude"
                      value={item.latitude || ""}
                      onChange={(value) => updateItem("latitude", value)}
                    />
                    <InspectorField
                      id={`map-info-${index}-${itemIndex}-lng`}
                      label="Longitude"
                      value={item.longitude || ""}
                      onChange={(value) => updateItem("longitude", value)}
                    />
                  </>
                )}
              </InspectorRepeater>
            </>
          )}
        </InspectorRepeater>
      </InspectorSection>
    </div>
  );
}
