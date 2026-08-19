import {
  InspectorChoose,
  InspectorColor,
  InspectorSection,
  InspectorSwitch,
  InspectorTabs,
  applyInspectorReset,
} from "@/components/inspector";
import ThreeDImageRingContentForm from "./ThreeDImageRingContentForm";
import {
  CARD_RADIUS_OPTIONS,
  DEFAULT_THREE_D_IMAGE_RING_STYLE,
  SPACING_OPTIONS,
  THREE_D_IMAGE_RING_STYLE_RESET_KEYS,
  TITLE_ALIGN_OPTIONS,
} from "../utils/style";

function ThreeDImageRingStyleForm({ style, onChange }) {
  const update = (key, value) => onChange({ ...style, [key]: value });
  const toggle = (key) => onChange({ ...style, [key]: !style[key] });
  const reset = (keys) =>
    onChange(
      applyInspectorReset(style, DEFAULT_THREE_D_IMAGE_RING_STYLE, keys)
    );

  return (
    <div>
      <InspectorSection
        title="Layout"
        onReset={() => reset(THREE_D_IMAGE_RING_STYLE_RESET_KEYS.layout)}
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
          hint="Show text beside the title"
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
          onReset={() => reset(THREE_D_IMAGE_RING_STYLE_RESET_KEYS.title)}
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

      <InspectorSection
        title="Cards"
        onReset={() => reset(THREE_D_IMAGE_RING_STYLE_RESET_KEYS.cards)}
      >
        <InspectorSwitch
          checked={style.showCardImage}
          onChange={() => toggle("showCardImage")}
          label="Image"
          hint="Photo on each ring panel"
        />
        <InspectorSwitch
          checked={style.showCaptions}
          onChange={() => toggle("showCaptions")}
          label="Captions"
          hint="Label at the bottom of each panel"
        />
        <InspectorSwitch
          checked={style.showOverlay}
          onChange={() => toggle("showOverlay")}
          label="Gradient"
          hint="Fade behind the caption"
        />
        <InspectorChoose
          label="Corners"
          name="cardRadius"
          value={style.cardRadius}
          options={CARD_RADIUS_OPTIONS}
          onChange={(value) => update("cardRadius", value)}
        />
        {style.showCaptions ? (
          <InspectorColor
            label="Caption color"
            value={style.captionColor}
            onChange={(value) => update("captionColor", value)}
          />
        ) : null}
      </InspectorSection>
    </div>
  );
}

export default function ThreeDImageRingPropsForm({
  content,
  onContentChange,
  contentDefaults,
  style,
  onStyleChange,
}) {
  return (
    <InspectorTabs
      content={
        <ThreeDImageRingContentForm
          content={content}
          onChange={onContentChange}
          defaults={contentDefaults}
        />
      }
      style={
        <ThreeDImageRingStyleForm style={style} onChange={onStyleChange} />
      }
    />
  );
}
