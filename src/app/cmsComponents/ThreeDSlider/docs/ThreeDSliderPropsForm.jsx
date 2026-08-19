import {
  InspectorChoose,
  InspectorColor,
  InspectorSection,
  InspectorSelect,
  InspectorSwitch,
  InspectorTabs,
  applyInspectorReset,
} from "@/components/inspector";
import ThreeDSliderContentForm from "./ThreeDSliderContentForm";
import {
  CARD_RADIUS_OPTIONS,
  DEFAULT_THREE_D_SLIDER_STYLE,
  DRAG_SPEED_OPTIONS,
  HEIGHT_OPTIONS,
  THREE_D_SLIDER_STYLE_RESET_KEYS,
  WHEEL_SPEED_OPTIONS,
} from "../utils/style";

function ThreeDSliderStyleForm({ style, onChange }) {
  const update = (key, value) => onChange({ ...style, [key]: value });
  const toggle = (key) => onChange({ ...style, [key]: !style[key] });
  const reset = (keys) =>
    onChange(applyInspectorReset(style, DEFAULT_THREE_D_SLIDER_STYLE, keys));

  return (
    <div>
      <InspectorSection
        title="Layout"
        onReset={() => reset(THREE_D_SLIDER_STYLE_RESET_KEYS.layout)}
      >
        <InspectorSwitch
          checked={style.showDots}
          onChange={() => toggle("showDots")}
          label="Dots"
          hint="Dotted pattern on the stage"
        />
        <InspectorChoose
          label="Height"
          name="sectionHeight"
          value={style.sectionHeight}
          options={HEIGHT_OPTIONS}
          onChange={(value) => update("sectionHeight", value)}
        />
        <InspectorColor
          label="Stage background"
          value={style.sectionBg}
          onChange={(value) => update("sectionBg", value)}
        />
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
        onReset={() => reset(THREE_D_SLIDER_STYLE_RESET_KEYS.cards)}
      >
        <InspectorSwitch
          checked={style.showCardImage}
          onChange={() => toggle("showCardImage")}
          label="Image"
          hint="Photo filling each item"
        />
        <InspectorSwitch
          checked={style.showCardTitle}
          onChange={() => toggle("showCardTitle")}
          label="Title"
          hint="Title at the bottom of each item"
        />
        <InspectorSwitch
          checked={style.showNumber}
          onChange={() => toggle("showNumber")}
          label="Numbers"
          hint="Index overlay in the corner"
        />
        <InspectorSwitch
          checked={style.showOverlay}
          onChange={() => toggle("showOverlay")}
          label="Gradient"
          hint="Fade behind the number and title"
        />
        <InspectorChoose
          label="Corners"
          name="cardRadius"
          value={style.cardRadius}
          options={CARD_RADIUS_OPTIONS}
          onChange={(value) => update("cardRadius", value)}
        />
        {style.showCardTitle ? (
          <InspectorColor
            label="Title color"
            value={style.cardTitleColor}
            onChange={(value) => update("cardTitleColor", value)}
          />
        ) : null}
        {style.showNumber ? (
          <InspectorColor
            label="Number color"
            value={style.numberColor}
            onChange={(value) => update("numberColor", value)}
          />
        ) : null}
        {style.showOverlay ? (
          <InspectorColor
            label="Gradient color"
            value={style.overlayColor}
            onChange={(value) => update("overlayColor", value)}
          />
        ) : null}
      </InspectorSection>

      <InspectorSection
        title="Motion"
        onReset={() => reset(THREE_D_SLIDER_STYLE_RESET_KEYS.motion)}
      >
        <InspectorSelect
          id="three-d-wheel-speed"
          label="Wheel"
          value={style.wheelSpeed}
          options={WHEEL_SPEED_OPTIONS}
          onChange={(value) => update("wheelSpeed", value)}
        />
        <InspectorSelect
          id="three-d-drag-speed"
          label="Drag"
          value={style.dragSpeed}
          options={DRAG_SPEED_OPTIONS}
          onChange={(value) => update("dragSpeed", value)}
        />
      </InspectorSection>
    </div>
  );
}

export default function ThreeDSliderPropsForm({
  content,
  onContentChange,
  contentDefaults,
  style,
  onStyleChange,
}) {
  return (
    <InspectorTabs
      content={
        <ThreeDSliderContentForm
          content={content}
          onChange={onContentChange}
          defaults={contentDefaults}
        />
      }
      style={<ThreeDSliderStyleForm style={style} onChange={onStyleChange} />}
    />
  );
}
