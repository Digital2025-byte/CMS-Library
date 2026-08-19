"use client";

import {
  InspectorField,
  InspectorRepeater,
  InspectorSection,
  InspectorSwitch,
  applyInspectorReset,
} from "@/components/inspector";

const LABEL_KEYS = [
  "fromLabel",
  "toLabel",
  "resetLabel",
  "bookNowLabel",
  "newRoutesLabel",
  "ourNetworkLabel",
];

const emptyCity = () => ({
  cityId: "",
  cityName: "",
  countryName: "",
  IATACode: "",
  latitude: "",
  longitude: "",
  isNewCity: false,
  price: "",
  currency: "",
  numberOfFlightsPerWeek: "",
  duration: "",
  flightType: "",
  imageUrl: "",
});

const emptyRoute = () => ({
  fromCityId: "",
  toCityId: "",
});

export default function DestinationsMapContentForm({
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
      <InspectorSection title="Labels" onReset={() => reset(LABEL_KEYS)}>
        <InspectorField
          id="destinations-map-from"
          label="From"
          value={content.fromLabel || ""}
          onChange={(value) => updateField("fromLabel", value)}
        />
        <InspectorField
          id="destinations-map-to"
          label="To"
          value={content.toLabel || ""}
          onChange={(value) => updateField("toLabel", value)}
        />
        <InspectorField
          id="destinations-map-reset"
          label="Reset"
          value={content.resetLabel || ""}
          onChange={(value) => updateField("resetLabel", value)}
        />
        <InspectorField
          id="destinations-map-book"
          label="Book now"
          value={content.bookNowLabel || ""}
          onChange={(value) => updateField("bookNowLabel", value)}
        />
        <InspectorField
          id="destinations-map-new-routes"
          label="New routes"
          value={content.newRoutesLabel || ""}
          onChange={(value) => updateField("newRoutesLabel", value)}
        />
        <InspectorField
          id="destinations-map-network"
          label="Our network"
          value={content.ourNetworkLabel || ""}
          onChange={(value) => updateField("ourNetworkLabel", value)}
        />
      </InspectorSection>

      <InspectorSection
        title="Items"
        onReset={() => reset(["cities"])}
      >
        <InspectorRepeater
          items={content.cities || []}
          createItem={emptyCity}
          itemLabel={(_item, index) => `Item ${index + 1}`}
          addLabel="Add Item"
          onChange={(cities) => onChange({ ...content, cities })}
        >
          {(item, { index, update }) => (
            <>
              <InspectorField
                id={`destinations-map-city-${index}-id`}
                label="City ID"
                value={item.cityId || ""}
                onChange={(value) => update("cityId", value)}
              />
              <InspectorField
                id={`destinations-map-city-${index}-name`}
                label="Name"
                value={item.cityName || ""}
                onChange={(value) => update("cityName", value)}
              />
              <InspectorField
                id={`destinations-map-city-${index}-country`}
                label="Country"
                value={item.countryName || ""}
                onChange={(value) => update("countryName", value)}
              />
              <InspectorField
                id={`destinations-map-city-${index}-iata`}
                label="IATA"
                value={item.IATACode || ""}
                onChange={(value) => update("IATACode", value)}
              />
              <InspectorField
                id={`destinations-map-city-${index}-lat`}
                label="Latitude"
                value={String(item.latitude ?? "")}
                onChange={(value) => update("latitude", value)}
              />
              <InspectorField
                id={`destinations-map-city-${index}-lng`}
                label="Longitude"
                value={String(item.longitude ?? "")}
                onChange={(value) => update("longitude", value)}
              />
              <InspectorSwitch
                checked={Boolean(item.isNewCity)}
                onChange={() => update("isNewCity", !item.isNewCity)}
                label="New route"
                hint="Mark this city as a new route"
              />
              <InspectorField
                id={`destinations-map-city-${index}-price`}
                label="Price"
                value={String(item.price ?? "")}
                onChange={(value) => update("price", value)}
              />
              <InspectorField
                id={`destinations-map-city-${index}-currency`}
                label="Currency"
                value={item.currency || ""}
                onChange={(value) => update("currency", value)}
              />
              <InspectorField
                id={`destinations-map-city-${index}-flights`}
                label="Flights per week"
                value={String(item.numberOfFlightsPerWeek ?? "")}
                onChange={(value) => update("numberOfFlightsPerWeek", value)}
              />
              <InspectorField
                id={`destinations-map-city-${index}-duration`}
                label="Duration"
                value={String(item.duration ?? "")}
                onChange={(value) => update("duration", value)}
              />
              <InspectorField
                id={`destinations-map-city-${index}-type`}
                label="Flight type"
                value={item.flightType || ""}
                onChange={(value) => update("flightType", value)}
              />
              <InspectorField
                id={`destinations-map-city-${index}-image`}
                label="Image URL"
                value={item.imageUrl || ""}
                onChange={(value) => update("imageUrl", value)}
              />
            </>
          )}
        </InspectorRepeater>
      </InspectorSection>

      <InspectorSection title="Routes" onReset={() => reset(["routes"])}>
        <InspectorRepeater
          items={content.routes || []}
          createItem={emptyRoute}
          itemLabel={(_item, index) => `Item ${index + 1}`}
          addLabel="Add Item"
          onChange={(routes) => onChange({ ...content, routes })}
        >
          {(item, { index, update }) => (
            <>
              <InspectorField
                id={`destinations-map-route-${index}-from`}
                label="From city ID"
                value={item.fromCityId || ""}
                onChange={(value) => update("fromCityId", value)}
              />
              <InspectorField
                id={`destinations-map-route-${index}-to`}
                label="To city ID"
                value={item.toCityId || ""}
                onChange={(value) => update("toCityId", value)}
              />
            </>
          )}
        </InspectorRepeater>
      </InspectorSection>
    </div>
  );
}
