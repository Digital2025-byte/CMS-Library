import {
  InspectorChoose,
  InspectorColor,
  InspectorSection,
  InspectorSwitch,
  InspectorTabs,
  applyInspectorReset,
} from "@/components/inspector";
import HeaderWithCityInfoContentForm from "./HeaderWithCityInfoContentForm";
import {
  CARD_RADIUS_OPTIONS,
  DEFAULT_HEADER_WITH_CITY_INFO_STYLE,
  HEADER_WITH_CITY_INFO_STYLE_RESET_KEYS,
  TITLE_ALIGN_OPTIONS,
} from "../utils/style";

function HeaderWithCityInfoStyleForm({ style, onChange }) {
  const update = (key, value) => onChange({ ...style, [key]: value });
  const toggle = (key) => onChange({ ...style, [key]: !style[key] });
  const reset = (keys) =>
    onChange(
      applyInspectorReset(style, DEFAULT_HEADER_WITH_CITY_INFO_STYLE, keys)
    );

  return (
    <div>
      <InspectorSection
        title="Layout"
        onReset={() => reset(HEADER_WITH_CITY_INFO_STYLE_RESET_KEYS.layout)}
      >
        <InspectorSwitch
          checked={style.showTitle}
          onChange={() => toggle("showTitle")}
          label="Title"
          hint="Show the city heading"
        />
        <InspectorSwitch
          checked={style.showDescription}
          onChange={() => toggle("showDescription")}
          label="Country"
          hint="Show the country name"
        />
        <InspectorSwitch
          checked={style.showCityCard}
          onChange={() => toggle("showCityCard")}
          label="City card"
          hint="Show the info card on the right"
        />
      </InspectorSection>

      {style.showTitle || style.showDescription ? (
        <InspectorSection
          title="Title"
          onReset={() => reset(HEADER_WITH_CITY_INFO_STYLE_RESET_KEYS.title)}
        >
          {style.showTitle ? (
            <>
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
            </>
          ) : null}
          {style.showDescription ? (
            <InspectorColor
              label="Country color"
              value={style.descriptionColor}
              onChange={(value) => update("descriptionColor", value)}
            />
          ) : null}
        </InspectorSection>
      ) : null}

      <InspectorSection
        title="Banner"
        onReset={() => reset(HEADER_WITH_CITY_INFO_STYLE_RESET_KEYS.banner)}
      >
        <InspectorSwitch
          checked={style.showHeroImage}
          onChange={() => toggle("showHeroImage")}
          label="Image"
          hint="Background photo"
        />
        <InspectorSwitch
          checked={style.showOverlay}
          onChange={() => toggle("showOverlay")}
          label="Wash"
          hint="Colored fade over the photo"
        />
        {style.showOverlay ? (
          <InspectorColor
            label="Wash color"
            value={style.overlayColor}
            onChange={(value) => update("overlayColor", value)}
          />
        ) : null}
      </InspectorSection>

      {style.showCityCard ? (
        <InspectorSection
          title="Card"
          onReset={() => reset(HEADER_WITH_CITY_INFO_STYLE_RESET_KEYS.card)}
        >
          <InspectorSwitch
            checked={style.showCardHeading}
            onChange={() => toggle("showCardHeading")}
            label="Heading"
            hint="Card title"
          />
          <InspectorSwitch
            checked={style.showCardDescription}
            onChange={() => toggle("showCardDescription")}
            label="Copy"
            hint="Text under the card title"
          />
          <InspectorSwitch
            checked={style.showTiles}
            onChange={() => toggle("showTiles")}
            label="Tiles"
            hint="Weather, time, duration, flights"
          />
          <InspectorSwitch
            checked={style.showNextFlight}
            onChange={() => toggle("showNextFlight")}
            label="Next flight"
            hint="Footer row on the card"
          />
          <InspectorChoose
            label="Corners"
            name="cardRadius"
            value={style.cardRadius}
            options={CARD_RADIUS_OPTIONS}
            onChange={(value) => update("cardRadius", value)}
          />
          {style.showCardHeading ? (
            <InspectorColor
              label="Heading color"
              value={style.cardHeadingColor}
              onChange={(value) => update("cardHeadingColor", value)}
            />
          ) : null}
          {style.showCardDescription || style.showNextFlight ? (
            <InspectorColor
              label="Copy color"
              value={style.cardBodyColor}
              onChange={(value) => update("cardBodyColor", value)}
            />
          ) : null}
          {style.showTiles ? (
            <>
              <InspectorColor
                label="Tile label"
                value={style.tileLabelColor}
                onChange={(value) => update("tileLabelColor", value)}
              />
              <InspectorColor
                label="Tile value"
                value={style.tileValueColor}
                onChange={(value) => update("tileValueColor", value)}
              />
            </>
          ) : null}
          {style.showNextFlight ? (
            <InspectorColor
              label="Next flight color"
              value={style.nextFlightColor}
              onChange={(value) => update("nextFlightColor", value)}
            />
          ) : null}
        </InspectorSection>
      ) : null}
    </div>
  );
}

export default function HeaderWithCityInfoPropsForm({
  content,
  onContentChange,
  contentDefaults,
  style,
  onStyleChange,
}) {
  return (
    <InspectorTabs
      content={
        <HeaderWithCityInfoContentForm
          content={content}
          onChange={onContentChange}
          defaults={contentDefaults}
        />
      }
      style={
        <HeaderWithCityInfoStyleForm style={style} onChange={onStyleChange} />
      }
    />
  );
}
