import {
  InspectorChoose,
  InspectorSection,
  InspectorSelect,
  InspectorSwitch,
  InspectorTabs,
} from "@/components/inspector";
import AccordionWithContentContentForm from "./AccordionWithContentContentForm";
import {
  BUTTON_POSITION_OPTIONS,
  BUTTON_VARIANT_OPTIONS,
  BUTTON_WIDTH_OPTIONS,
  ITEM_LOOK_OPTIONS,
  ITEM_RADIUS_OPTIONS,
  SPACING_OPTIONS,
  SURFACE_OPTIONS,
  TEXT_COLOR_OPTIONS,
  TITLE_ALIGN_OPTIONS,
} from "../utils/style";

function AccordionWithContentStyleForm({ style, onChange }) {
  const update = (key, value) => onChange({ ...style, [key]: value });
  const toggle = (key) => onChange({ ...style, [key]: !style[key] });

  return (
    <div>
      <InspectorSection title="Layout">
        <InspectorSwitch
          checked={style.showTitleDescription}
          onChange={() => toggle("showTitleDescription")}
          label="Title"
          hint="Show the section heading"
        />
        <InspectorSwitch
          checked={style.showDescription}
          onChange={() => toggle("showDescription")}
          label="Description"
          hint="Show text under the title"
        />
        <InspectorSwitch
          checked={style.showButton}
          onChange={() => toggle("showButton")}
          label="Button"
          hint="Show the CTA under the items"
        />
        <InspectorSelect
          id="section-bg"
          label="Section background"
          value={style.sectionBg}
          options={SURFACE_OPTIONS}
          onChange={(value) => update("sectionBg", value)}
        />
      </InspectorSection>

      {style.showTitleDescription || style.showDescription ? (
        <InspectorSection title="Title">
          {style.showTitleDescription ? (
            <>
              <InspectorChoose
                label="Alignment"
                name="titleAlign"
                value={style.titleAlign}
                options={TITLE_ALIGN_OPTIONS}
                onChange={(value) => update("titleAlign", value)}
              />
              <InspectorSelect
                id="title-color"
                label="Title color"
                value={style.titleColor}
                options={TEXT_COLOR_OPTIONS}
                onChange={(value) => update("titleColor", value)}
              />
            </>
          ) : null}
          {style.showDescription ? (
            <InspectorSelect
              id="description-color"
              label="Description color"
              value={style.descriptionColor}
              options={TEXT_COLOR_OPTIONS}
              onChange={(value) => update("descriptionColor", value)}
            />
          ) : null}
        </InspectorSection>
      ) : null}

      <InspectorSection title="Items">
        <InspectorChoose
          label="Look"
          name="itemLook"
          value={style.itemLook}
          options={ITEM_LOOK_OPTIONS}
          onChange={(value) => update("itemLook", value)}
        />
        {style.itemLook === "filled" ? (
          <InspectorSelect
            id="item-bg"
            label="Background"
            value={style.itemBg}
            options={SURFACE_OPTIONS}
            onChange={(value) => update("itemBg", value)}
          />
        ) : null}
        <InspectorChoose
          label="Corners"
          name="itemRadius"
          value={style.itemRadius}
          options={ITEM_RADIUS_OPTIONS}
          onChange={(value) => update("itemRadius", value)}
        />
        <InspectorChoose
          label="Gap"
          name="itemGap"
          value={style.itemGap}
          options={SPACING_OPTIONS}
          onChange={(value) => update("itemGap", value)}
        />
        <InspectorChoose
          label="Padding"
          name="itemPadding"
          value={style.itemPadding}
          options={SPACING_OPTIONS}
          onChange={(value) => update("itemPadding", value)}
        />
        <InspectorSelect
          id="item-title-color"
          label="Title color"
          value={style.itemTitleColor}
          options={TEXT_COLOR_OPTIONS}
          onChange={(value) => update("itemTitleColor", value)}
        />
        <InspectorSelect
          id="item-open-color"
          label="Open title color"
          value={style.itemOpenColor}
          options={TEXT_COLOR_OPTIONS}
          onChange={(value) => update("itemOpenColor", value)}
        />
        <InspectorSelect
          id="item-body-color"
          label="Body color"
          value={style.itemBodyColor}
          options={TEXT_COLOR_OPTIONS}
          onChange={(value) => update("itemBodyColor", value)}
        />
      </InspectorSection>

      {style.showButton ? (
        <InspectorSection title="Button">
          <InspectorChoose
            label="Alignment"
            name="buttonPosition"
            value={style.buttonPosition}
            options={BUTTON_POSITION_OPTIONS}
            onChange={(value) => update("buttonPosition", value)}
          />
          <InspectorChoose
            label="Look"
            name="buttonVariant"
            value={style.buttonVariant}
            options={BUTTON_VARIANT_OPTIONS}
            onChange={(value) => update("buttonVariant", value)}
          />
          <InspectorChoose
            label="Width"
            name="buttonWidth"
            value={style.buttonWidth}
            options={BUTTON_WIDTH_OPTIONS}
            onChange={(value) => update("buttonWidth", value)}
          />
        </InspectorSection>
      ) : null}
    </div>
  );
}

export default function AccordionWithContentPropsForm({
  content,
  onContentChange,
  style,
  onStyleChange,
}) {
  return (
    <InspectorTabs
      content={
        <AccordionWithContentContentForm
          content={content}
          onChange={onContentChange}
        />
      }
      style={
        <AccordionWithContentStyleForm style={style} onChange={onStyleChange} />
      }
    />
  );
}
