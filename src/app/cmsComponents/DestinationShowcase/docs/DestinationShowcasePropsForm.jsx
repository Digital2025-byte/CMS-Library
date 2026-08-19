import {
  InspectorChoose,
  InspectorColor,
  InspectorSection,
  InspectorSwitch,
  InspectorTabs,
  applyInspectorReset,
} from "@/components/inspector";
import DestinationShowcaseContentForm from "./DestinationShowcaseContentForm";
import {
  CARD_RADIUS_OPTIONS,
  DEFAULT_DESTINATION_SHOWCASE_STYLE,
  DESTINATION_SHOWCASE_STYLE_RESET_KEYS,
  SPACING_OPTIONS,
  TITLE_ALIGN_OPTIONS,
} from "../utils/style";

function DestinationShowcaseStyleForm({ style, onChange }) {
  const update = (key, value) => onChange({ ...style, [key]: value });
  const toggle = (key) => onChange({ ...style, [key]: !style[key] });
  const reset = (keys) =>
    onChange(
      applyInspectorReset(style, DEFAULT_DESTINATION_SHOWCASE_STYLE, keys)
    );

  return (
    <div>
      <InspectorSection
        title="Layout"
        onReset={() => reset(DESTINATION_SHOWCASE_STYLE_RESET_KEYS.layout)}
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
          checked={style.showViewAll}
          onChange={() => toggle("showViewAll")}
          label="View all"
          hint="Link to all destinations"
        />
        <InspectorSwitch
          checked={style.showSectionBg}
          onChange={() => toggle("showSectionBg")}
          label="Background"
          hint="Show the section background color"
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

      {style.showTitle || style.showDescription || style.showViewAll ? (
        <InspectorSection
          title="Title"
          onReset={() => reset(DESTINATION_SHOWCASE_STYLE_RESET_KEYS.title)}
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
          {style.showViewAll ? (
            <InspectorColor
              label="View all color"
              value={style.viewAllColor}
              onChange={(value) => update("viewAllColor", value)}
            />
          ) : null}
        </InspectorSection>
      ) : null}

      <InspectorSection
        title="Banner"
        onReset={() => reset(DESTINATION_SHOWCASE_STYLE_RESET_KEYS.banner)}
      >
        <InspectorSwitch
          checked={style.showHeroImage}
          onChange={() => toggle("showHeroImage")}
          label="Image"
          hint="Hero photo behind the banner"
        />
        <InspectorSwitch
          checked={style.showOverlay}
          onChange={() => toggle("showOverlay")}
          label="Wash"
          hint="Colored blur over the hero photo"
        />
        <InspectorSwitch
          checked={style.showDestinationName}
          onChange={() => toggle("showDestinationName")}
          label="City"
          hint="Active destination name"
        />
        <InspectorSwitch
          checked={style.showDestinationDescription}
          onChange={() => toggle("showDestinationDescription")}
          label="Copy"
          hint="Active destination description"
        />
        <InspectorChoose
          label="Corners"
          name="bannerRadius"
          value={style.bannerRadius}
          options={CARD_RADIUS_OPTIONS}
          onChange={(value) => update("bannerRadius", value)}
        />
        {style.showOverlay ? (
          <InspectorColor
            label="Wash color"
            value={style.overlayColor}
            onChange={(value) => update("overlayColor", value)}
          />
        ) : null}
        {style.showDestinationName ? (
          <InspectorColor
            label="City color"
            value={style.destNameColor}
            onChange={(value) => update("destNameColor", value)}
          />
        ) : null}
        {style.showDestinationDescription ? (
          <InspectorColor
            label="Copy color"
            value={style.destBodyColor}
            onChange={(value) => update("destBodyColor", value)}
          />
        ) : null}
      </InspectorSection>

      <InspectorSection
        title="Items"
        onReset={() => reset(DESTINATION_SHOWCASE_STYLE_RESET_KEYS.cards)}
      >
        <InspectorSwitch
          checked={style.showCards}
          onChange={() => toggle("showCards")}
          label="Strip"
          hint="Destination card carousel"
        />
        {style.showCards ? (
          <>
            <InspectorSwitch
              checked={style.showCardOverlay}
              onChange={() => toggle("showCardOverlay")}
              label="Gradient"
              hint="Fade at the bottom of each card"
            />
            <InspectorChoose
              label="Corners"
              name="cardRadius"
              value={style.cardRadius}
              options={CARD_RADIUS_OPTIONS}
              onChange={(value) => update("cardRadius", value)}
            />
            {style.showCardOverlay ? (
              <InspectorColor
                label="Gradient color"
                value={style.cardOverlayColor}
                onChange={(value) => update("cardOverlayColor", value)}
              />
            ) : null}
          </>
        ) : null}
      </InspectorSection>

      <InspectorSection
        title="Button"
        onReset={() => reset(DESTINATION_SHOWCASE_STYLE_RESET_KEYS.button)}
      >
        <InspectorSwitch
          checked={style.showButton}
          onChange={() => toggle("showButton")}
          label="CTA"
          hint="Explore button on the banner"
        />
        {style.showButton ? (
          <>
            <InspectorColor
              label="Background"
              value={style.buttonBg}
              onChange={(value) => update("buttonBg", value)}
            />
            <InspectorColor
              label="Text"
              value={style.buttonText}
              onChange={(value) => update("buttonText", value)}
            />
          </>
        ) : null}
      </InspectorSection>

      <InspectorSection
        title="Nav"
        onReset={() => reset(DESTINATION_SHOWCASE_STYLE_RESET_KEYS.nav)}
      >
        <InspectorSwitch
          checked={style.showArrows}
          onChange={() => toggle("showArrows")}
          label="Arrows"
          hint="Previous / next controls"
        />
        <InspectorSwitch
          checked={style.showDots}
          onChange={() => toggle("showDots")}
          label="Dots"
          hint="Pagination dots"
        />
        {style.showArrows || style.showDots ? (
          <InspectorColor
            label="Nav color"
            value={style.navColor}
            onChange={(value) => update("navColor", value)}
          />
        ) : null}
      </InspectorSection>
    </div>
  );
}

export default function DestinationShowcasePropsForm({
  content,
  onContentChange,
  contentDefaults,
  style,
  onStyleChange,
}) {
  return (
    <InspectorTabs
      content={
        <DestinationShowcaseContentForm
          content={content}
          onChange={onContentChange}
          defaults={contentDefaults}
        />
      }
      style={
        <DestinationShowcaseStyleForm style={style} onChange={onStyleChange} />
      }
    />
  );
}
