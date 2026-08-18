import {
  InspectorChoose,
  InspectorColor,
  InspectorSection,
  InspectorSwitch,
  InspectorTabs,
  applyInspectorReset,
} from "@/components/inspector";
import HeaderWithThreeImageContentForm from "./HeaderWithThreeImageContentForm";
import {
  DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE,
  HEADER_WITH_THREE_IMAGE_STYLE_RESET_KEYS,
  TITLE_ALIGN_OPTIONS,
} from "../utils/style";

function HeaderWithThreeImageStyleForm({ style, onChange }) {
  const update = (key, value) => onChange({ ...style, [key]: value });
  const toggle = (key) => onChange({ ...style, [key]: !style[key] });
  const reset = (keys) =>
    onChange(
      applyInspectorReset(style, DEFAULT_HEADER_WITH_THREE_IMAGE_STYLE, keys)
    );

  return (
    <div>
      <InspectorSection
        title="Layout"
        onReset={() => reset(HEADER_WITH_THREE_IMAGE_STYLE_RESET_KEYS.layout)}
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
          hint="Show text under the title"
        />
      </InspectorSection>

      {style.showTitle || style.showDescription ? (
        <InspectorSection
          title="Title"
          onReset={() => reset(HEADER_WITH_THREE_IMAGE_STYLE_RESET_KEYS.title)}
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
        title="Banner"
        onReset={() => reset(HEADER_WITH_THREE_IMAGE_STYLE_RESET_KEYS.banner)}
      >
        <InspectorSwitch
          checked={style.showHeroImage}
          onChange={() => toggle("showHeroImage")}
          label="Images"
          hint="Three background photo slices"
        />
        <InspectorSwitch
          checked={style.showOverlay}
          onChange={() => toggle("showOverlay")}
          label="Wash"
          hint="Colored fade over the photos"
        />
        {style.showOverlay ? (
          <InspectorColor
            label="Wash color"
            value={style.overlayColor}
            onChange={(value) => update("overlayColor", value)}
          />
        ) : null}
      </InspectorSection>
    </div>
  );
}

export default function HeaderWithThreeImagePropsForm({
  content,
  onContentChange,
  contentDefaults,
  style,
  onStyleChange,
}) {
  return (
    <InspectorTabs
      content={
        <HeaderWithThreeImageContentForm
          content={content}
          onChange={onContentChange}
          defaults={contentDefaults}
        />
      }
      style={
        <HeaderWithThreeImageStyleForm
          style={style}
          onChange={onStyleChange}
        />
      }
    />
  );
}
