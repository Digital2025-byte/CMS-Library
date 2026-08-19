import {
  InspectorChoose,
  InspectorColor,
  InspectorSection,
  InspectorSwitch,
  InspectorTabs,
  applyInspectorReset,
} from "@/components/inspector";
import ServiceCardsSliderContentForm from "./ServiceCardsSliderContentForm";
import {
  CARD_RADIUS_OPTIONS,
  DEFAULT_SERVICE_CARDS_STYLE,
  SERVICE_CARDS_STYLE_RESET_KEYS,
  SPACING_OPTIONS,
  TITLE_ALIGN_OPTIONS,
} from "../utils/style";

function ServiceCardsSliderStyleForm({ style, onChange }) {
  const update = (key, value) => onChange({ ...style, [key]: value });
  const toggle = (key) => onChange({ ...style, [key]: !style[key] });
  const reset = (keys) =>
    onChange(applyInspectorReset(style, DEFAULT_SERVICE_CARDS_STYLE, keys));

  return (
    <div>
      <InspectorSection
        title="Layout"
        onReset={() => reset(SERVICE_CARDS_STYLE_RESET_KEYS.layout)}
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
        <InspectorColor
          label="Section background"
          value={style.sectionBg}
          onChange={(value) => update("sectionBg", value)}
        />
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
          onReset={() => reset(SERVICE_CARDS_STYLE_RESET_KEYS.title)}
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
        title="Items"
        onReset={() => reset(SERVICE_CARDS_STYLE_RESET_KEYS.cards)}
      >
        <InspectorSwitch
          checked={style.showItemTitle}
          onChange={() => toggle("showItemTitle")}
          label="Names"
          hint="Title on each service card"
        />
        <InspectorSwitch
          checked={style.showItemDescription}
          onChange={() => toggle("showItemDescription")}
          label="Description"
          hint="Body text on each service card"
        />
        <InspectorSwitch
          checked={style.showIcon}
          onChange={() => toggle("showIcon")}
          label="Icon"
          hint="Image on the left of each card"
        />
        <InspectorSwitch
          checked={style.showArrow}
          onChange={() => toggle("showArrow")}
          label="Arrow"
          hint="Caret on the right of each card"
        />
        <InspectorChoose
          label="Corners"
          name="cardRadius"
          value={style.cardRadius}
          options={CARD_RADIUS_OPTIONS}
          onChange={(value) => update("cardRadius", value)}
        />
        <InspectorChoose
          label="Padding"
          name="cardPadding"
          value={style.cardPadding}
          options={SPACING_OPTIONS}
          onChange={(value) => update("cardPadding", value)}
        />
        <InspectorChoose
          label="Gap"
          name="cardGap"
          value={style.cardGap}
          options={SPACING_OPTIONS}
          onChange={(value) => update("cardGap", value)}
        />
        <InspectorColor
          label="Background"
          value={style.cardBg}
          onChange={(value) => update("cardBg", value)}
        />
        {style.showIcon ? (
          <InspectorColor
            label="Icon background"
            value={style.iconBg}
            onChange={(value) => update("iconBg", value)}
          />
        ) : null}
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
        {style.showArrow ? (
          <InspectorColor
            label="Arrow color"
            value={style.arrowColor}
            onChange={(value) => update("arrowColor", value)}
          />
        ) : null}
      </InspectorSection>
    </div>
  );
}

export default function ServiceCardsSliderPropsForm({
  content,
  onContentChange,
  contentDefaults,
  style,
  onStyleChange,
}) {
  return (
    <InspectorTabs
      content={
        <ServiceCardsSliderContentForm
          content={content}
          onChange={onContentChange}
          defaults={contentDefaults}
        />
      }
      style={
        <ServiceCardsSliderStyleForm style={style} onChange={onStyleChange} />
      }
    />
  );
}
