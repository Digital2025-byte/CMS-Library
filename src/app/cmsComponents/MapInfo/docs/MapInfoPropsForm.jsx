import {
  InspectorChoose,
  InspectorColor,
  InspectorSection,
  InspectorSwitch,
  InspectorTabs,
  applyInspectorReset,
} from "@/components/inspector";
import MapInfoContentForm from "./MapInfoContentForm";
import {
  CARD_RADIUS_OPTIONS,
  DEFAULT_MAP_INFO_STYLE,
  MAP_INFO_STYLE_RESET_KEYS,
  SPACING_OPTIONS,
  TITLE_ALIGN_OPTIONS,
} from "../utils/style";

function MapInfoStyleForm({ style, onChange }) {
  const update = (key, value) => onChange({ ...style, [key]: value });
  const toggle = (key) => onChange({ ...style, [key]: !style[key] });
  const reset = (keys) =>
    onChange(applyInspectorReset(style, DEFAULT_MAP_INFO_STYLE, keys));

  return (
    <div>
      <InspectorSection
        title="Layout"
        onReset={() => reset(MAP_INFO_STYLE_RESET_KEYS.layout)}
      >
        <InspectorSwitch
          checked={style.showTitle}
          onChange={() => toggle("showTitle")}
          label="Title"
          hint="Show the section heading"
        />
        <InspectorSwitch
          checked={style.showDescription}
          onChange={() => toggle("showDescription")}
          label="Description"
          hint="Show text under the title"
        />
        <InspectorSwitch
          checked={style.showCountries}
          onChange={() => toggle("showCountries")}
          label="Countries"
          hint="Country chips"
        />
        <InspectorSwitch
          checked={style.showCities}
          onChange={() => toggle("showCities")}
          label="Cities"
          hint="City tabs or dropdown"
        />
        <InspectorSwitch
          checked={style.showOffices}
          onChange={() => toggle("showOffices")}
          label="Offices"
          hint="Office tabs when a city has more than one"
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

      {style.showTitle || style.showDescription ? (
        <InspectorSection
          title="Title"
          onReset={() => reset(MAP_INFO_STYLE_RESET_KEYS.title)}
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
              label="Description color"
              value={style.descriptionColor}
              onChange={(value) => update("descriptionColor", value)}
            />
          ) : null}
        </InspectorSection>
      ) : null}

      {style.showCountries || style.showCities || style.showOffices ? (
        <InspectorSection
          title="Tabs"
          onReset={() => reset(MAP_INFO_STYLE_RESET_KEYS.tabs)}
        >
          {style.showCountries ? (
            <>
              <InspectorColor
                label="Chip color"
                value={style.chipColor}
                onChange={(value) => update("chipColor", value)}
              />
              <InspectorColor
                label="Active text"
                value={style.chipActiveText}
                onChange={(value) => update("chipActiveText", value)}
              />
              <InspectorColor
                label="Idle background"
                value={style.chipIdleBg}
                onChange={(value) => update("chipIdleBg", value)}
              />
            </>
          ) : null}
          {style.showCities || style.showOffices ? (
            <InspectorColor
              label="Tab color"
              value={style.tabColor}
              onChange={(value) => update("tabColor", value)}
            />
          ) : null}
        </InspectorSection>
      ) : null}

      <InspectorSection
        title="Details"
        onReset={() => reset(MAP_INFO_STYLE_RESET_KEYS.details)}
      >
        <InspectorSwitch
          checked={style.showName}
          onChange={() => toggle("showName")}
          label="Name"
          hint="Office name on the card"
        />
        <InspectorSwitch
          checked={style.showAddress}
          onChange={() => toggle("showAddress")}
          label="Address"
          hint="Address row"
        />
        <InspectorSwitch
          checked={style.showPhone}
          onChange={() => toggle("showPhone")}
          label="Phone"
          hint="Phone row"
        />
        <InspectorSwitch
          checked={style.showEmail}
          onChange={() => toggle("showEmail")}
          label="Email"
          hint="Email row"
        />
        <InspectorSwitch
          checked={style.showHours}
          onChange={() => toggle("showHours")}
          label="Hours"
          hint="Working hours row"
        />
        <InspectorSwitch
          checked={style.showMap}
          onChange={() => toggle("showMap")}
          label="Map"
          hint="Embedded location map"
        />
        <InspectorSwitch
          checked={style.showCardBg}
          onChange={() => toggle("showCardBg")}
          label="Card fill"
          hint="Background color on the details card"
        />
        <InspectorChoose
          label="Corners"
          name="cardRadius"
          value={style.cardRadius}
          options={CARD_RADIUS_OPTIONS}
          onChange={(value) => update("cardRadius", value)}
        />
        {style.showCardBg ? (
          <InspectorColor
            label="Card background"
            value={style.cardBg}
            onChange={(value) => update("cardBg", value)}
          />
        ) : null}
        {style.showName ? (
          <InspectorColor
            label="Name color"
            value={style.nameColor}
            onChange={(value) => update("nameColor", value)}
          />
        ) : null}
        {style.showAddress ||
        style.showPhone ||
        style.showEmail ||
        style.showHours ? (
          <>
            <InspectorColor
              label="Copy color"
              value={style.bodyColor}
              onChange={(value) => update("bodyColor", value)}
            />
            <InspectorColor
              label="Icon color"
              value={style.iconColor}
              onChange={(value) => update("iconColor", value)}
            />
          </>
        ) : null}
      </InspectorSection>
    </div>
  );
}

export default function MapInfoPropsForm({
  content,
  onContentChange,
  contentDefaults,
  style,
  onStyleChange,
}) {
  return (
    <InspectorTabs
      content={
        <MapInfoContentForm
          content={content}
          onChange={onContentChange}
          defaults={contentDefaults}
        />
      }
      style={<MapInfoStyleForm style={style} onChange={onStyleChange} />}
    />
  );
}
