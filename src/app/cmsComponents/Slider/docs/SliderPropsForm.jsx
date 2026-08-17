import {
  InspectorChoose,
  InspectorColor,
  InspectorSection,
  InspectorSelect,
  InspectorSwitch,
  InspectorTabs,
  applyInspectorReset,
} from "@/components/inspector";
import SliderContentForm from "./SliderContentForm";
import {
  AUTOPLAY_SPEED_OPTIONS,
  DEFAULT_SLIDER_STYLE,
  OPACITY_OPTIONS,
  OVERLAY_DIRECTION_OPTIONS,
  SLIDER_STYLE_RESET_KEYS,
  THEME_OPTIONS,
  TITLE_ALIGN_OPTIONS,
  TRANSITION_SPEED_OPTIONS,
} from "../utils/style";

function SliderStyleForm({ style, onChange }) {
  const update = (key, value) => onChange({ ...style, [key]: value });
  const toggle = (key) => onChange({ ...style, [key]: !style[key] });
  const reset = (keys) =>
    onChange(applyInspectorReset(style, DEFAULT_SLIDER_STYLE, keys));

  return (
    <div>
      <InspectorSection
        title="Layout"
        onReset={() => reset(SLIDER_STYLE_RESET_KEYS.layout)}
      >
        <InspectorSwitch
          checked={style.showSlideText}
          onChange={() => toggle("showSlideText")}
          label="Text"
          hint="Title, subtitle, and description on slides"
        />
        <InspectorSwitch
          checked={style.showButton}
          onChange={() => toggle("showButton")}
          label="Button"
          hint="CTA button on slides"
        />
        <InspectorSwitch
          checked={style.showArrows}
          onChange={() => toggle("showArrows")}
          label="Arrows"
          hint="Previous / next arrow controls"
        />
        <InspectorSwitch
          checked={style.showProgress}
          onChange={() => toggle("showProgress")}
          label="Progress"
          hint="Pause control and progress dots"
        />
      </InspectorSection>

      <InspectorSection
        title="Theme"
        onReset={() => reset(SLIDER_STYLE_RESET_KEYS.theme)}
      >
        <InspectorChoose
          label="Controls"
          name="sliderTheme"
          value={style.theme}
          options={THEME_OPTIONS}
          onChange={(value) => update("theme", value)}
        />
      </InspectorSection>

      {style.showSlideText ? (
        <InspectorSection
          title="Text"
          onReset={() => reset(SLIDER_STYLE_RESET_KEYS.text)}
        >
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
          <InspectorColor
            label="Subtitle color"
            value={style.subtitleColor}
            onChange={(value) => update("subtitleColor", value)}
          />
          <InspectorColor
            label="Description color"
            value={style.descriptionColor}
            onChange={(value) => update("descriptionColor", value)}
          />
        </InspectorSection>
      ) : null}

      <InspectorSection
        title="Overlay"
        onReset={() => reset(SLIDER_STYLE_RESET_KEYS.overlay)}
      >
        <InspectorSwitch
          checked={style.overlayEnabled}
          onChange={() => toggle("overlayEnabled")}
          label="Overlay"
          hint="Gradient over the slide image"
        />
        {style.overlayEnabled ? (
          <>
            <InspectorColor
              label="Color"
              value={style.overlayColor}
              onChange={(value) => update("overlayColor", value)}
            />
            <InspectorChoose
              label="Direction"
              name="overlayDirection"
              value={style.overlayDirection}
              options={OVERLAY_DIRECTION_OPTIONS}
              onChange={(value) => update("overlayDirection", value)}
            />
            <InspectorSelect
              id="overlay-from"
              label="Start opacity"
              value={style.overlayFromOpacity}
              options={OPACITY_OPTIONS}
              onChange={(value) => update("overlayFromOpacity", value)}
            />
            <InspectorSelect
              id="overlay-via"
              label="Mid opacity"
              value={style.overlayViaOpacity}
              options={OPACITY_OPTIONS}
              onChange={(value) => update("overlayViaOpacity", value)}
            />
          </>
        ) : null}
      </InspectorSection>

      <InspectorSection
        title="Motion"
        onReset={() => reset(SLIDER_STYLE_RESET_KEYS.motion)}
      >
        <InspectorSwitch
          checked={style.autoplay}
          onChange={() => toggle("autoplay")}
          label="Autoplay"
          hint="Advance slides automatically"
        />
        {style.autoplay ? (
          <InspectorSelect
            id="autoplay-speed"
            label="Autoplay speed"
            value={style.autoplaySpeed}
            options={AUTOPLAY_SPEED_OPTIONS}
            onChange={(value) => update("autoplaySpeed", value)}
          />
        ) : null}
        <InspectorSwitch
          checked={style.pauseOnHover}
          onChange={() => toggle("pauseOnHover")}
          label="Pause on hover"
          hint="Pause autoplay when the pointer is over the slider"
        />
        <InspectorSwitch
          checked={style.fade}
          onChange={() => toggle("fade")}
          label="Fade"
          hint="Cross-fade instead of sliding"
        />
        <InspectorSwitch
          checked={style.infinite}
          onChange={() => toggle("infinite")}
          label="Loop"
          hint="Loop back to the first slide"
        />
        <InspectorSelect
          id="transition-speed"
          label="Transition"
          value={style.speed}
          options={TRANSITION_SPEED_OPTIONS}
          onChange={(value) => update("speed", value)}
        />
      </InspectorSection>
    </div>
  );
}

export default function SliderPropsForm({
  content,
  onContentChange,
  contentDefaults,
  style,
  onStyleChange,
}) {
  return (
    <InspectorTabs
      content={
        <SliderContentForm
          content={content}
          onChange={onContentChange}
          defaults={contentDefaults}
        />
      }
      style={<SliderStyleForm style={style} onChange={onStyleChange} />}
    />
  );
}
