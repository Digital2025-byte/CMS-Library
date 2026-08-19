import {
  InspectorChoose,
  InspectorColor,
  InspectorSection,
  InspectorSwitch,
  InspectorTabs,
  applyInspectorReset,
} from "@/components/inspector";
import CoolSlideGalleryContentForm from "./CoolSlideGalleryContentForm";
import {
  CARD_RADIUS_OPTIONS,
  COOL_SLIDE_GALLERY_STYLE_RESET_KEYS,
  DEFAULT_COOL_SLIDE_GALLERY_STYLE,
} from "../utils/style";

function CoolSlideGalleryStyleForm({ style, onChange }) {
  const update = (key, value) => onChange({ ...style, [key]: value });
  const toggle = (key) => onChange({ ...style, [key]: !style[key] });
  const reset = (keys) =>
    onChange(
      applyInspectorReset(style, DEFAULT_COOL_SLIDE_GALLERY_STYLE, keys)
    );

  return (
    <div>
      <InspectorSection
        title="Layout"
        onReset={() => reset(COOL_SLIDE_GALLERY_STYLE_RESET_KEYS.layout)}
      >
        <InspectorSwitch
          checked={style.showArrows}
          onChange={() => toggle("showArrows")}
          label="Arrows"
          hint="Previous and next controls"
        />
        <InspectorSwitch
          checked={style.showDots}
          onChange={() => toggle("showDots")}
          label="Dots"
          hint="Slide indicators under the gallery"
        />
        <InspectorSwitch
          checked={style.showStageDots}
          onChange={() => toggle("showStageDots")}
          label="Dotted stage"
          hint="Dot pattern on the background"
        />
        <InspectorSwitch
          checked={style.showSectionBg}
          onChange={() => toggle("showSectionBg")}
          label="Background"
          hint="Fill color behind the gallery"
        />
        {style.showSectionBg ? (
          <InspectorColor
            label="Section background"
            value={style.sectionBg}
            onChange={(value) => update("sectionBg", value)}
          />
        ) : null}
        {style.showStageDots ? (
          <InspectorColor
            label="Dot color"
            value={style.dotsColor}
            onChange={(value) => update("dotsColor", value)}
          />
        ) : null}
      </InspectorSection>

      <InspectorSection
        title="Items"
        onReset={() => reset(COOL_SLIDE_GALLERY_STYLE_RESET_KEYS.cards)}
      >
        <InspectorSwitch
          checked={style.showCardImage}
          onChange={() => toggle("showCardImage")}
          label="Image"
          hint="Photo filling each slide"
        />
        <InspectorSwitch
          checked={style.showTitle}
          onChange={() => toggle("showTitle")}
          label="Titles"
          hint="Title and subtitle on each slide"
        />
        <InspectorSwitch
          checked={style.showBadge}
          onChange={() => toggle("showBadge")}
          label="Badges"
          hint="Small label above the title"
        />
        <InspectorChoose
          label="Corners"
          name="cardRadius"
          value={style.cardRadius}
          options={CARD_RADIUS_OPTIONS}
          onChange={(value) => update("cardRadius", value)}
        />
        {style.showTitle ? (
          <>
            <InspectorColor
              label="Title color"
              value={style.titleColor}
              onChange={(value) => update("titleColor", value)}
            />
            <InspectorColor
              label="Subtitle color"
              value={style.subtitleColor}
              onChange={(value) => update("subtitleColor", value)}
            />
          </>
        ) : null}
      </InspectorSection>
    </div>
  );
}

export default function CoolSlideGalleryPropsForm({
  content,
  onContentChange,
  contentDefaults,
  style,
  onStyleChange,
}) {
  return (
    <InspectorTabs
      content={
        <CoolSlideGalleryContentForm
          content={content}
          onChange={onContentChange}
          defaults={contentDefaults}
        />
      }
      style={
        <CoolSlideGalleryStyleForm style={style} onChange={onStyleChange} />
      }
    />
  );
}
