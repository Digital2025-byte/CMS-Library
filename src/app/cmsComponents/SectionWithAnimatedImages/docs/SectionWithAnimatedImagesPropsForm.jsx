import {
  InspectorChoose,
  InspectorColor,
  InspectorSection,
  InspectorSwitch,
  InspectorTabs,
  applyInspectorReset,
} from "@/components/inspector";
import SectionWithAnimatedImagesContentForm from "./SectionWithAnimatedImagesContentForm";
import {
  ANIMATED_IMAGES_STYLE_RESET_KEYS,
  DEFAULT_ANIMATED_IMAGES_STYLE,
  SPACING_OPTIONS,
  TITLE_ALIGN_OPTIONS,
} from "../utils/style";

function SectionWithAnimatedImagesStyleForm({ style, onChange }) {
  const update = (key, value) => onChange({ ...style, [key]: value });
  const toggle = (key) => onChange({ ...style, [key]: !style[key] });
  const reset = (keys) =>
    onChange(
      applyInspectorReset(style, DEFAULT_ANIMATED_IMAGES_STYLE, keys)
    );

  return (
    <div>
      <InspectorSection
        title="Layout"
        onReset={() => reset(ANIMATED_IMAGES_STYLE_RESET_KEYS.layout)}
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
          hint="Show the line above the title"
        />
        <InspectorSwitch
          checked={style.showSectionBg}
          onChange={() => toggle("showSectionBg")}
          label="Background"
          hint="Gradient wash behind the section"
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
          onReset={() => reset(ANIMATED_IMAGES_STYLE_RESET_KEYS.title)}
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
        onReset={() => reset(ANIMATED_IMAGES_STYLE_RESET_KEYS.images)}
      >
        <InspectorSwitch
          checked={style.showImages}
          onChange={() => toggle("showImages")}
          label="Falling photos"
          hint="Animated cards in the background"
        />
      </InspectorSection>

      <InspectorSection
        title="Button"
        onReset={() => reset(ANIMATED_IMAGES_STYLE_RESET_KEYS.button)}
      >
        <InspectorSwitch
          checked={style.showCta}
          onChange={() => toggle("showCta")}
          label="Button"
          hint="Follow CTA"
        />
        {style.showCta ? (
          <>
            <InspectorColor
              label="Button background"
              value={style.buttonBg}
              onChange={(value) => update("buttonBg", value)}
            />
            <InspectorColor
              label="Button text"
              value={style.buttonText}
              onChange={(value) => update("buttonText", value)}
            />
          </>
        ) : null}
      </InspectorSection>
    </div>
  );
}

export default function SectionWithAnimatedImagesPropsForm({
  content,
  onContentChange,
  contentDefaults,
  style,
  onStyleChange,
}) {
  return (
    <InspectorTabs
      content={
        <SectionWithAnimatedImagesContentForm
          content={content}
          onChange={onContentChange}
          defaults={contentDefaults}
        />
      }
      style={
        <SectionWithAnimatedImagesStyleForm
          style={style}
          onChange={onStyleChange}
        />
      }
    />
  );
}
