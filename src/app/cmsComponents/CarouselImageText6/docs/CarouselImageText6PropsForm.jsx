import {
  InspectorChoose,
  InspectorColor,
  InspectorSection,
  InspectorSwitch,
  InspectorTabs,
  applyInspectorReset,
} from "@/components/inspector";
import CarouselImageText6ContentForm from "./CarouselImageText6ContentForm";
import {
  CARD_RADIUS_OPTIONS,
  CAROUSEL_IMAGE_TEXT_STYLE_RESET_KEYS,
  DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE,
  TITLE_ALIGN_OPTIONS,
} from "../utils/style";

function CarouselImageText6StyleForm({ style, onChange }) {
  const update = (key, value) => onChange({ ...style, [key]: value });
  const toggle = (key) => onChange({ ...style, [key]: !style[key] });
  const reset = (keys) =>
    onChange(
      applyInspectorReset(style, DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE, keys)
    );

  return (
    <div>
      <InspectorSection
        title="Layout"
        onReset={() => reset(CAROUSEL_IMAGE_TEXT_STYLE_RESET_KEYS.layout)}
      >
        <InspectorSwitch
          checked={style.showTitle}
          onChange={() => toggle("showTitle")}
          label="Title"
          hint="Section heading above the carousel"
        />
        <InspectorColor
          label="Section background"
          value={style.sectionBg}
          onChange={(value) => update("sectionBg", value)}
        />
      </InspectorSection>

      {style.showTitle ? (
        <InspectorSection
          title="Title"
          onReset={() => reset(CAROUSEL_IMAGE_TEXT_STYLE_RESET_KEYS.title)}
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
        </InspectorSection>
      ) : null}

      <InspectorSection
        title="Cards"
        onReset={() => reset(CAROUSEL_IMAGE_TEXT_STYLE_RESET_KEYS.cards)}
      >
        <InspectorSwitch
          checked={style.showItemTitle}
          onChange={() => toggle("showItemTitle")}
          label="Names"
          hint="Title on each value card"
        />
        <InspectorSwitch
          checked={style.showItemDescription}
          onChange={() => toggle("showItemDescription")}
          label="Description"
          hint="Body text on each value card"
        />
        <InspectorSwitch
          checked={style.grayscaleInactive}
          onChange={() => toggle("grayscaleInactive")}
          label="Grayscale"
          hint="Fade inactive desktop panels to gray"
        />
        <InspectorChoose
          label="Corners"
          name="cardRadius"
          value={style.cardRadius}
          options={CARD_RADIUS_OPTIONS}
          onChange={(value) => update("cardRadius", value)}
        />
        <InspectorColor
          label="Card background"
          value={style.cardBg}
          onChange={(value) => update("cardBg", value)}
        />
        <InspectorColor
          label="Overlay"
          value={style.overlayColor}
          onChange={(value) => update("overlayColor", value)}
        />
        <InspectorColor
          label="Frosted panel"
          value={style.panelColor}
          onChange={(value) => update("panelColor", value)}
        />
        {style.showItemTitle ? (
          <InspectorColor
            label="Title color"
            value={style.itemTitleColor}
            onChange={(value) => update("itemTitleColor", value)}
          />
        ) : null}
        {style.showItemDescription ? (
          <InspectorColor
            label="Body color"
            value={style.itemBodyColor}
            onChange={(value) => update("itemBodyColor", value)}
          />
        ) : null}
      </InspectorSection>
    </div>
  );
}

export default function CarouselImageText6PropsForm({
  content,
  onContentChange,
  contentDefaults,
  style,
  onStyleChange,
}) {
  return (
    <InspectorTabs
      content={
        <CarouselImageText6ContentForm
          content={content}
          onChange={onContentChange}
          defaults={contentDefaults}
        />
      }
      style={
        <CarouselImageText6StyleForm style={style} onChange={onStyleChange} />
      }
    />
  );
}
