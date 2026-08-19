import {
  InspectorChoose,
  InspectorColor,
  InspectorSection,
  InspectorSwitch,
  InspectorTabs,
  applyInspectorReset,
} from "@/components/inspector";
import ScrollCarouselContentForm from "./ScrollCarouselContentForm";
import {
  CARD_RADIUS_OPTIONS,
  DEFAULT_SCROLL_CAROUSEL_STYLE,
  SCROLL_CAROUSEL_STYLE_RESET_KEYS,
} from "../utils/style";

function ScrollCarouselStyleForm({ style, onChange }) {
  const update = (key, value) => onChange({ ...style, [key]: value });
  const toggle = (key) => onChange({ ...style, [key]: !style[key] });
  const reset = (keys) =>
    onChange(applyInspectorReset(style, DEFAULT_SCROLL_CAROUSEL_STYLE, keys));

  return (
    <div>
      <InspectorSection
        title="Layout"
        onReset={() => reset(SCROLL_CAROUSEL_STYLE_RESET_KEYS.layout)}
      >
        <InspectorSwitch
          checked={style.showProgress}
          onChange={() => toggle("showProgress")}
          label="Progress"
          hint="Bar at the bottom while scrolling"
        />
        <InspectorSwitch
          checked={style.showDots}
          onChange={() => toggle("showDots")}
          label="Dotted stage"
          hint="Dot pattern on the background"
        />
        <InspectorSwitch
          checked={style.showSectionBg}
          onChange={() => toggle("showSectionBg")}
          label="Background"
          hint="Fill color behind the carousel"
        />
        {style.showSectionBg ? (
          <InspectorColor
            label="Section background"
            value={style.sectionBg}
            onChange={(value) => update("sectionBg", value)}
          />
        ) : null}
        {style.showDots ? (
          <InspectorColor
            label="Dot color"
            value={style.dotsColor}
            onChange={(value) => update("dotsColor", value)}
          />
        ) : null}
      </InspectorSection>

      <InspectorSection
        title="Items"
        onReset={() => reset(SCROLL_CAROUSEL_STYLE_RESET_KEYS.cards)}
      >
        <InspectorSwitch
          checked={style.showCardImage}
          onChange={() => toggle("showCardImage")}
          label="Image"
          hint="Photo filling each card"
        />
        <InspectorSwitch
          checked={style.showTitle}
          onChange={() => toggle("showTitle")}
          label="Titles"
          hint="Heading on each card"
        />
        <InspectorSwitch
          checked={style.showDescription}
          onChange={() => toggle("showDescription")}
          label="Descriptions"
          hint="Text under the title"
        />
        <InspectorSwitch
          checked={style.showOverlay}
          onChange={() => toggle("showOverlay")}
          label="Gradient"
          hint="Fade behind the title"
        />
        <InspectorChoose
          label="Corners"
          name="cardRadius"
          value={style.cardRadius}
          options={CARD_RADIUS_OPTIONS}
          onChange={(value) => update("cardRadius", value)}
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
    </div>
  );
}

export default function ScrollCarouselPropsForm({
  content,
  onContentChange,
  contentDefaults,
  style,
  onStyleChange,
}) {
  return (
    <InspectorTabs
      content={
        <ScrollCarouselContentForm
          content={content}
          onChange={onContentChange}
          defaults={contentDefaults}
        />
      }
      style={
        <ScrollCarouselStyleForm style={style} onChange={onStyleChange} />
      }
    />
  );
}
