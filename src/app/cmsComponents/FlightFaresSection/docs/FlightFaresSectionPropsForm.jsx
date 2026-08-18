import {
  InspectorChoose,
  InspectorColor,
  InspectorSection,
  InspectorSwitch,
  InspectorTabs,
  applyInspectorReset,
} from "@/components/inspector";
import FlightFaresSectionContentForm from "./FlightFaresSectionContentForm";
import {
  CARD_RADIUS_OPTIONS,
  DEFAULT_FLIGHT_FARES_STYLE,
  FLIGHT_FARES_STYLE_RESET_KEYS,
  SPACING_OPTIONS,
  TITLE_ALIGN_OPTIONS,
} from "../utils/style";

function FlightFaresSectionStyleForm({ style, onChange }) {
  const update = (key, value) => onChange({ ...style, [key]: value });
  const toggle = (key) => onChange({ ...style, [key]: !style[key] });
  const reset = (keys) =>
    onChange(applyInspectorReset(style, DEFAULT_FLIGHT_FARES_STYLE, keys));

  return (
    <div>
      <InspectorSection
        title="Layout"
        onReset={() => reset(FLIGHT_FARES_STYLE_RESET_KEYS.layout)}
      >
        <InspectorSwitch
          checked={style.showTitle}
          onChange={() => toggle("showTitle")}
          label="Title"
          hint="Show the section heading"
        />
        <InspectorSwitch
          checked={style.showSectionBg}
          onChange={() => toggle("showSectionBg")}
          label="Background"
          hint="Fill color behind the whole section"
        />
        {style.showSectionBg ? (
          <InspectorColor
            label="Section background"
            value={style.sectionBg}
            onChange={(value) => update("sectionBg", value)}
          />
        ) : null}
        <InspectorChoose
          label="Padding"
          name="sectionPadding"
          value={style.sectionPadding}
          options={SPACING_OPTIONS}
          onChange={(value) => update("sectionPadding", value)}
        />
      </InspectorSection>

      {style.showTitle ? (
        <InspectorSection
          title="Title"
          onReset={() => reset(FLIGHT_FARES_STYLE_RESET_KEYS.title)}
        >
          <InspectorChoose
            label="Alignment"
            name="titleAlign"
            value={style.titleAlign}
            options={TITLE_ALIGN_OPTIONS}
            onChange={(value) => update("titleAlign", value)}
          />
          <InspectorColor
            label="Title color"
            value={style.titleColor}
            onChange={(value) => update("titleColor", value)}
          />
        </InspectorSection>
      ) : null}

      <InspectorSection
        title="Cards"
        onReset={() => reset(FLIGHT_FARES_STYLE_RESET_KEYS.cards)}
      >
        <InspectorSwitch
          checked={style.showImage}
          onChange={() => toggle("showImage")}
          label="Image"
          hint="Photo on each fare card"
        />
        <InspectorSwitch
          checked={style.showOverlay}
          onChange={() => toggle("showOverlay")}
          label="Wash"
          hint="Fade over the bottom of the photo"
        />
        <InspectorSwitch
          checked={style.showOneWay}
          onChange={() => toggle("showOneWay")}
          label="One-way"
          hint="One-way badge in the corner"
        />
        <InspectorSwitch
          checked={style.showNew}
          onChange={() => toggle("showNew")}
          label="New"
          hint="New badge when a city is marked new"
        />
        <InspectorSwitch
          checked={style.showCity}
          onChange={() => toggle("showCity")}
          label="City"
          hint="City name and IATA"
        />
        <InspectorSwitch
          checked={style.showPrice}
          onChange={() => toggle("showPrice")}
          label="Price"
          hint="Economy from price line"
        />
        <InspectorChoose
          label="Corners"
          name="cardRadius"
          value={style.cardRadius}
          options={CARD_RADIUS_OPTIONS}
          onChange={(value) => update("cardRadius", value)}
        />
        {style.showOverlay ? (
          <InspectorColor
            label="Wash color"
            value={style.overlayColor}
            onChange={(value) => update("overlayColor", value)}
          />
        ) : null}
        {style.showCity ? (
          <InspectorColor
            label="City color"
            value={style.cityColor}
            onChange={(value) => update("cityColor", value)}
          />
        ) : null}
        {style.showPrice ? (
          <InspectorColor
            label="Price color"
            value={style.priceColor}
            onChange={(value) => update("priceColor", value)}
          />
        ) : null}
        {style.showOneWay || style.showNew ? (
          <>
            <InspectorColor
              label="Badge color"
              value={style.badgeColor}
              onChange={(value) => update("badgeColor", value)}
            />
            <InspectorColor
              label="Badge text"
              value={style.badgeText}
              onChange={(value) => update("badgeText", value)}
            />
          </>
        ) : null}
      </InspectorSection>
    </div>
  );
}

export default function FlightFaresSectionPropsForm({
  content,
  onContentChange,
  contentDefaults,
  style,
  onStyleChange,
}) {
  return (
    <InspectorTabs
      content={
        <FlightFaresSectionContentForm
          content={content}
          onChange={onContentChange}
          defaults={contentDefaults}
        />
      }
      style={
        <FlightFaresSectionStyleForm style={style} onChange={onStyleChange} />
      }
    />
  );
}
