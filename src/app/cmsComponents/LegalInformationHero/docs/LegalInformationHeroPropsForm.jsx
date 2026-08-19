import {
  InspectorChoose,
  InspectorColor,
  InspectorSection,
  InspectorSwitch,
  InspectorTabs,
  applyInspectorReset,
} from "@/components/inspector";
import LegalInformationHeroContentForm from "./LegalInformationHeroContentForm";
import {
  DEFAULT_LEGAL_INFORMATION_HERO_STYLE,
  LEGAL_INFORMATION_HERO_STYLE_RESET_KEYS,
  TITLE_ALIGN_OPTIONS,
} from "../utils/style";

function LegalInformationHeroStyleForm({ style, onChange }) {
  const update = (key, value) => onChange({ ...style, [key]: value });
  const toggle = (key) => onChange({ ...style, [key]: !style[key] });
  const reset = (keys) =>
    onChange(
      applyInspectorReset(style, DEFAULT_LEGAL_INFORMATION_HERO_STYLE, keys)
    );

  return (
    <div>
      <InspectorSection
        title="Layout"
        onReset={() => reset(LEGAL_INFORMATION_HERO_STYLE_RESET_KEYS.layout)}
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
        <InspectorSwitch
          checked={style.showPattern}
          onChange={() => toggle("showPattern")}
          label="Pattern"
          hint="Side pattern overlay"
        />
        <InspectorSwitch
          checked={style.showSectionBg}
          onChange={() => toggle("showSectionBg")}
          label="Background"
          hint="Fill color behind the hero"
        />
        {style.showSectionBg ? (
          <InspectorColor
            label="Section background"
            value={style.sectionBg}
            onChange={(value) => update("sectionBg", value)}
          />
        ) : null}
      </InspectorSection>

      {style.showTitle || style.showDescription ? (
        <InspectorSection
          title="Title"
          onReset={() => reset(LEGAL_INFORMATION_HERO_STYLE_RESET_KEYS.title)}
        >
          <InspectorChoose
            label="Alignment"
            name="titleAlign"
            value={style.titleAlign}
            options={TITLE_ALIGN_OPTIONS}
            onChange={(value) => update("titleAlign", value)}
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
      ) : null}
    </div>
  );
}

export default function LegalInformationHeroPropsForm({
  content,
  onContentChange,
  contentDefaults,
  style,
  onStyleChange,
}) {
  return (
    <InspectorTabs
      content={
        <LegalInformationHeroContentForm
          content={content}
          onChange={onContentChange}
          defaults={contentDefaults}
        />
      }
      style={
        <LegalInformationHeroStyleForm
          style={style}
          onChange={onStyleChange}
        />
      }
    />
  );
}
