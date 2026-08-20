import {
  InspectorChoose,
  InspectorColor,
  InspectorSection,
  InspectorSwitch,
  InspectorTabs,
  applyInspectorReset,
} from "@/components/inspector";
import BannerWithCTAsAndItemsContentForm from "./BannerWithCTAsAndItemsContentForm";
import {
  BANNER_WITH_CTAS_STYLE_RESET_KEYS,
  DEFAULT_BANNER_WITH_CTAS_STYLE,
  HEIGHT_OPTIONS,
  TITLE_ALIGN_OPTIONS,
  VERTICAL_ALIGN_OPTIONS,
} from "../utils/style";

function BannerWithCTAsAndItemsStyleForm({ style, onChange }) {
  const update = (key, value) => onChange({ ...style, [key]: value });
  const toggle = (key) => onChange({ ...style, [key]: !style[key] });
  const reset = (keys) =>
    onChange(applyInspectorReset(style, DEFAULT_BANNER_WITH_CTAS_STYLE, keys));

  return (
    <div>
      <InspectorSection
        title="Layout"
        onReset={() => reset(BANNER_WITH_CTAS_STYLE_RESET_KEYS.layout)}
      >
        <InspectorSwitch
          checked={style.showTitle}
          onChange={() => toggle("showTitle")}
          label="Title"
          hint="Show the heading"
        />
        {style.showTitle ? (
          <InspectorColor
            label="Title color"
            value={style.titleColor}
            onChange={(value) => update("titleColor", value)}
          />
        ) : null}
        <InspectorSwitch
          checked={style.showDescription}
          onChange={() => toggle("showDescription")}
          label="Description"
          hint="Show text under the title"
        />
        {style.showDescription ? (
          <InspectorColor
            label="Description color"
            value={style.descriptionColor}
            onChange={(value) => update("descriptionColor", value)}
          />
        ) : null}
        <InspectorSwitch
          checked={style.showItems}
          onChange={() => toggle("showItems")}
          label="Items"
          hint="Feature list with checkmarks"
        />
        {style.showItems ? (
          <InspectorColor
            label="Item color"
            value={style.itemColor}
            onChange={(value) => update("itemColor", value)}
          />
        ) : null}
        {style.showTitle ||
        style.showDescription ||
        style.showItems ||
        style.showPrimaryButton ||
        style.showSecondaryButton ? (
          <>
            <InspectorChoose
              label="Alignment"
              name="titleAlign"
              value={style.titleAlign}
              options={TITLE_ALIGN_OPTIONS}
              onChange={(value) => update("titleAlign", value)}
            />
            <InspectorChoose
              label="Vertical"
              name="verticalAlign"
              value={style.verticalAlign}
              options={VERTICAL_ALIGN_OPTIONS}
              onChange={(value) => update("verticalAlign", value)}
            />
          </>
        ) : null}
        <InspectorChoose
          label="Height"
          name="bannerHeight"
          value={style.bannerHeight}
          options={HEIGHT_OPTIONS}
          onChange={(value) => update("bannerHeight", value)}
        />
        <InspectorSwitch
          checked={style.showSectionBg}
          onChange={() => toggle("showSectionBg")}
          label="Background"
          hint="Solid fill behind the banner"
        />
        {style.showSectionBg ? (
          <InspectorColor
            label="Section background"
            value={style.sectionBg}
            onChange={(value) => update("sectionBg", value)}
          />
        ) : null}
      </InspectorSection>

      <InspectorSection
        title="Banner"
        onReset={() => reset(BANNER_WITH_CTAS_STYLE_RESET_KEYS.banner)}
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

      <InspectorSection
        title="Button"
        onReset={() => reset(BANNER_WITH_CTAS_STYLE_RESET_KEYS.button)}
      >
        <InspectorSwitch
          checked={style.showPrimaryButton}
          onChange={() => toggle("showPrimaryButton")}
          label="Primary"
          hint="Solid call-to-action"
        />
        {style.showPrimaryButton ? (
          <>
            <InspectorColor
              label="Primary background"
              value={style.primaryBg}
              onChange={(value) => update("primaryBg", value)}
            />
            <InspectorColor
              label="Primary text"
              value={style.primaryText}
              onChange={(value) => update("primaryText", value)}
            />
          </>
        ) : null}
        <InspectorSwitch
          checked={style.showSecondaryButton}
          onChange={() => toggle("showSecondaryButton")}
          label="Secondary"
          hint="Outline call-to-action"
        />
        {style.showSecondaryButton ? (
          <InspectorColor
            label="Secondary color"
            value={style.secondaryText}
            onChange={(value) => update("secondaryText", value)}
          />
        ) : null}
      </InspectorSection>
    </div>
  );
}

export default function BannerWithCTAsAndItemsPropsForm({
  content,
  onContentChange,
  contentDefaults,
  style,
  onStyleChange,
}) {
  return (
    <InspectorTabs
      content={
        <BannerWithCTAsAndItemsContentForm
          content={content}
          onChange={onContentChange}
          defaults={contentDefaults}
        />
      }
      style={
        <BannerWithCTAsAndItemsStyleForm
          style={style}
          onChange={onStyleChange}
        />
      }
    />
  );
}
