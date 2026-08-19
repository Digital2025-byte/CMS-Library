import {
  InspectorChoose,
  InspectorColor,
  InspectorSection,
  InspectorSwitch,
  InspectorTabs,
  applyInspectorReset,
} from "@/components/inspector";
import MixedRightThreeImagesContentForm from "./MixedRightThreeImagesContentForm";
import {
  CARD_RADIUS_OPTIONS,
  DEFAULT_MIXED_THREE_IMAGES_STYLE,
  IMAGE_SIDE_OPTIONS,
  MIXED_THREE_IMAGES_STYLE_RESET_KEYS,
  SPACING_OPTIONS,
  TITLE_ALIGN_OPTIONS,
} from "../utils/style";

function MixedRightThreeImagesStyleForm({ style, onChange }) {
  const update = (key, value) => onChange({ ...style, [key]: value });
  const toggle = (key) => onChange({ ...style, [key]: !style[key] });
  const reset = (keys) =>
    onChange(
      applyInspectorReset(style, DEFAULT_MIXED_THREE_IMAGES_STYLE, keys)
    );

  return (
    <div>
      <InspectorSection
        title="Layout"
        onReset={() => reset(MIXED_THREE_IMAGES_STYLE_RESET_KEYS.layout)}
      >
        <InspectorSwitch
          checked={style.showTitle}
          onChange={() => toggle("showTitle")}
          label="Title"
          hint="Show the heading"
        />
        <InspectorSwitch
          checked={style.showDescription}
          onChange={() => toggle("showDescription")}
          label="Description"
          hint="Show text under the title"
        />
        <InspectorChoose
          label="Large image"
          name="imageSide"
          value={style.imageSide}
          options={IMAGE_SIDE_OPTIONS}
          onChange={(value) => update("imageSide", value)}
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
          onReset={() => reset(MIXED_THREE_IMAGES_STYLE_RESET_KEYS.title)}
        >
          <InspectorChoose
            label="Alignment"
            name="titleAlign"
            value={style.titleAlign}
            options={TITLE_ALIGN_OPTIONS}
            onChange={(value) => update("titleAlign", value)}
          />
          {style.showTitle ? (
            <InspectorColor
              label="Title color"
              value={style.titleColor}
              onChange={(value) => update("titleColor", value)}
            />
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

      <InspectorSection
        title="Images"
        onReset={() => reset(MIXED_THREE_IMAGES_STYLE_RESET_KEYS.images)}
      >
        <InspectorSwitch
          checked={style.showLargeImage}
          onChange={() => toggle("showLargeImage")}
          label="Large photo"
          hint="Tall feature image"
        />
        <InspectorSwitch
          checked={style.showSmallImages}
          onChange={() => toggle("showSmallImages")}
          label="Small photos"
          hint="The pair of square images"
        />
        <InspectorChoose
          label="Corners"
          name="imageRadius"
          value={style.imageRadius}
          options={CARD_RADIUS_OPTIONS}
          onChange={(value) => update("imageRadius", value)}
        />
      </InspectorSection>

      <InspectorSection
        title="Button"
        onReset={() => reset(MIXED_THREE_IMAGES_STYLE_RESET_KEYS.button)}
      >
        <InspectorSwitch
          checked={style.showPrimary}
          onChange={() => toggle("showPrimary")}
          label="Primary"
          hint="Main CTA with arrow"
        />
        <InspectorSwitch
          checked={style.showSecondary}
          onChange={() => toggle("showSecondary")}
          label="Secondary"
          hint="Outline CTA"
        />
        {style.showPrimary ? (
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
        {style.showSecondary ? (
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

export default function MixedRightThreeImagesPropsForm({
  content,
  onContentChange,
  contentDefaults,
  style,
  onStyleChange,
}) {
  return (
    <InspectorTabs
      content={
        <MixedRightThreeImagesContentForm
          content={content}
          onChange={onContentChange}
          defaults={contentDefaults}
        />
      }
      style={
        <MixedRightThreeImagesStyleForm
          style={style}
          onChange={onStyleChange}
        />
      }
    />
  );
}
