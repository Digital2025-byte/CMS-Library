"use client";

import {
  InspectorField,
  InspectorRepeater,
  InspectorSection,
  InspectorSwitch,
  applyInspectorReset,
} from "@/components/inspector";

const TITLE_KEYS = ["title"];
const LABEL_KEYS = ["oneWayLabel", "newLabel", "fromTemplate"];
const ITEM_KEYS = ["items"];

const emptyItem = () => ({
  cityName: "",
  IATACode: "",
  countryName: "",
  price: "",
  currency: "",
  isNew: false,
  imageUrl: "",
  imageAlt: "",
});

export default function FlightFaresSectionContentForm({
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
          id="flight-fares-title"
          label="Title"
          value={content.title || ""}
          onChange={(value) => updateField("title", value)}
        />
      </InspectorSection>

      <InspectorSection title="Labels" onReset={() => reset(LABEL_KEYS)}>
        <InspectorField
          id="flight-fares-one-way"
          label="One-way"
          value={content.oneWayLabel || ""}
          onChange={(value) => updateField("oneWayLabel", value)}
        />
        <InspectorField
          id="flight-fares-new"
          label="New"
          value={content.newLabel || ""}
          onChange={(value) => updateField("newLabel", value)}
        />
        <InspectorField
          id="flight-fares-from"
          label="Price line"
          value={content.fromTemplate || ""}
          onChange={(value) => updateField("fromTemplate", value)}
        />
      </InspectorSection>

      <InspectorSection title="Cities" onReset={() => reset(ITEM_KEYS)}>
        <InspectorRepeater
          items={content.items || []}
          createItem={emptyItem}
          itemLabel={(item, index) =>
            item.cityName || item.IATACode || `City ${index + 1}`
          }
          addLabel="Add City"
          onChange={(items) => onChange({ ...content, items })}
        >
          {(item, { index, update }) => (
            <>
              <InspectorField
                id={`flight-fares-${index}-city`}
                label="City"
                value={item.cityName || ""}
                onChange={(value) => update("cityName", value)}
              />
              <InspectorField
                id={`flight-fares-${index}-iata`}
                label="IATA"
                value={item.IATACode || ""}
                onChange={(value) => update("IATACode", value)}
              />
              <InspectorField
                id={`flight-fares-${index}-country`}
                label="Country"
                value={item.countryName || ""}
                onChange={(value) => update("countryName", value)}
              />
              <InspectorField
                id={`flight-fares-${index}-price`}
                label="Price"
                value={item.price || ""}
                onChange={(value) => update("price", value)}
              />
              <InspectorField
                id={`flight-fares-${index}-currency`}
                label="Currency"
                value={item.currency || ""}
                onChange={(value) => update("currency", value)}
              />
              <InspectorSwitch
                checked={Boolean(item.isNew)}
                onChange={() => update("isNew", !item.isNew)}
                label="New"
                hint="Show the New badge on this card"
              />
              <InspectorField
                id={`flight-fares-${index}-image`}
                label="Image URL"
                value={item.imageUrl || ""}
                onChange={(value) => update("imageUrl", value)}
              />
              <InspectorField
                id={`flight-fares-${index}-alt`}
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
