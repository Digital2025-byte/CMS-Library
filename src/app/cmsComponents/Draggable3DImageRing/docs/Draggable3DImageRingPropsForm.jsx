import {
  InspectorChoose,
  InspectorColor,
  InspectorSection,
  InspectorSwitch,
  InspectorTabs,
  applyInspectorReset,
} from "@/components/inspector";
import Draggable3DImageRingContentForm from "./Draggable3DImageRingContentForm";
import {
  CARD_RADIUS_OPTIONS,
  DEFAULT_DRAGGABLE_3D_IMAGE_RING_STYLE,
  DRAGGABLE_3D_IMAGE_RING_STYLE_RESET_KEYS,
  SPACING_OPTIONS,
} from "../utils/style";

function Draggable3DImageRingStyleForm({ style, onChange }) {
  const update = (key, value) => onChange({ ...style, [key]: value });
  const toggle = (key) => onChange({ ...style, [key]: !style[key] });
  const reset = (keys) =>
    onChange(
      applyInspectorReset(style, DEFAULT_DRAGGABLE_3D_IMAGE_RING_STYLE, keys)
    );

  return (
    <div>
      <InspectorSection
        title="Layout"
        onReset={() => reset(DRAGGABLE_3D_IMAGE_RING_STYLE_RESET_KEYS.layout)}
      >
        <InspectorSwitch
          checked={style.showSectionBg}
          onChange={() => toggle("showSectionBg")}
          label="Background"
          hint="Fill color behind the section"
        />
        <InspectorSwitch
          checked={style.showFrame}
          onChange={() => toggle("showFrame")}
          label="Frame"
          hint="Bordered stage around the ring"
        />
        <InspectorSwitch
          checked={style.showStageDots}
          onChange={() => toggle("showStageDots")}
          label="Dotted stage"
          hint="Dot pattern inside the frame"
        />
        {style.showSectionBg ? (
          <InspectorColor
            label="Section background"
            value={style.sectionBg}
            onChange={(value) => update("sectionBg", value)}
          />
        ) : null}
        {style.showFrame ? (
          <InspectorColor
            label="Stage background"
            value={style.stageBg}
            onChange={(value) => update("stageBg", value)}
          />
        ) : null}
        {style.showFrame && style.showStageDots ? (
          <InspectorColor
            label="Dot color"
            value={style.dotsColor}
            onChange={(value) => update("dotsColor", value)}
          />
        ) : null}
        <InspectorChoose
          label="Padding"
          name="sectionPadding"
          value={style.sectionPadding}
          options={SPACING_OPTIONS}
          onChange={(value) => update("sectionPadding", value)}
        />
        {style.showFrame ? (
          <InspectorChoose
            label="Frame corners"
            name="frameRadius"
            value={style.frameRadius}
            options={CARD_RADIUS_OPTIONS}
            onChange={(value) => update("frameRadius", value)}
          />
        ) : null}
      </InspectorSection>

      <InspectorSection
        title="Cards"
        onReset={() => reset(DRAGGABLE_3D_IMAGE_RING_STYLE_RESET_KEYS.cards)}
      >
        <InspectorSwitch
          checked={style.showCardImage}
          onChange={() => toggle("showCardImage")}
          label="Image"
          hint="Photo on each ring panel"
        />
        <InspectorChoose
          label="Corners"
          name="cardRadius"
          value={style.cardRadius}
          options={CARD_RADIUS_OPTIONS}
          onChange={(value) => update("cardRadius", value)}
        />
      </InspectorSection>
    </div>
  );
}

export default function Draggable3DImageRingPropsForm({
  content,
  onContentChange,
  contentDefaults,
  style,
  onStyleChange,
}) {
  return (
    <InspectorTabs
      content={
        <Draggable3DImageRingContentForm
          content={content}
          onChange={onContentChange}
          defaults={contentDefaults}
        />
      }
      style={
        <Draggable3DImageRingStyleForm
          style={style}
          onChange={onStyleChange}
        />
      }
    />
  );
}
