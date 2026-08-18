import {
  InspectorChoose,
  InspectorColor,
  InspectorSection,
  InspectorSwitch,
  InspectorTabs,
  applyInspectorReset,
} from "@/components/inspector";
import SearchWithTabsAndGridContentForm from "./SearchWithTabsAndGridContentForm";
import {
  CARD_RADIUS_OPTIONS,
  DEFAULT_SEARCH_GRID_STYLE,
  SEARCH_GRID_STYLE_RESET_KEYS,
  SPACING_OPTIONS,
  TITLE_ALIGN_OPTIONS,
} from "../utils/style";

function SearchWithTabsAndGridStyleForm({ style, onChange }) {
  const update = (key, value) => onChange({ ...style, [key]: value });
  const toggle = (key) => onChange({ ...style, [key]: !style[key] });
  const reset = (keys) =>
    onChange(applyInspectorReset(style, DEFAULT_SEARCH_GRID_STYLE, keys));

  return (
    <div>
      <InspectorSection
        title="Layout"
        onReset={() => reset(SEARCH_GRID_STYLE_RESET_KEYS.layout)}
      >
        <InspectorSwitch
          checked={style.showTitle}
          onChange={() => toggle("showTitle")}
          label="Title"
          hint="Show the sights heading"
        />
        <InspectorSwitch
          checked={style.showSearch}
          onChange={() => toggle("showSearch")}
          label="Search"
          hint="Show the search field"
        />
        <InspectorSwitch
          checked={style.showTabs}
          onChange={() => toggle("showTabs")}
          label="Tabs"
          hint="Show the filter chips"
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

      {style.showTitle ? (
        <InspectorSection
          title="Title"
          onReset={() => reset(SEARCH_GRID_STYLE_RESET_KEYS.title)}
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

      {style.showSearch ? (
        <InspectorSection
          title="Search"
          onReset={() => reset(SEARCH_GRID_STYLE_RESET_KEYS.search)}
        >
          <InspectorColor
            label="Field color"
            value={style.searchBg}
            onChange={(value) => update("searchBg", value)}
          />
          <InspectorColor
            label="Text color"
            value={style.searchText}
            onChange={(value) => update("searchText", value)}
          />
        </InspectorSection>
      ) : null}

      {style.showTabs ? (
        <InspectorSection
          title="Tabs"
          onReset={() => reset(SEARCH_GRID_STYLE_RESET_KEYS.tabs)}
        >
          <InspectorColor
            label="Chip color"
            value={style.chipColor}
            onChange={(value) => update("chipColor", value)}
          />
          <InspectorColor
            label="Active text"
            value={style.chipActiveText}
            onChange={(value) => update("chipActiveText", value)}
          />
        </InspectorSection>
      ) : null}

      <InspectorSection
        title="Cards"
        onReset={() => reset(SEARCH_GRID_STYLE_RESET_KEYS.cards)}
      >
        <InspectorSwitch
          checked={style.showCardImage}
          onChange={() => toggle("showCardImage")}
          label="Image"
          hint="Photo on each sight card"
        />
        <InspectorSwitch
          checked={style.showCity}
          onChange={() => toggle("showCity")}
          label="City"
          hint="City name at the top"
        />
        <InspectorSwitch
          checked={style.showName}
          onChange={() => toggle("showName")}
          label="Name"
          hint="Sight name at the bottom"
        />
        <InspectorSwitch
          checked={style.showTag}
          onChange={() => toggle("showTag")}
          label="Tag"
          hint="Category next to the name"
        />
        <InspectorSwitch
          checked={style.showOverlay}
          onChange={() => toggle("showOverlay")}
          label="Wash"
          hint="Fade over the bottom of the photo"
        />
        <InspectorChoose
          label="Corners"
          name="cardRadius"
          value={style.cardRadius}
          options={CARD_RADIUS_OPTIONS}
          onChange={(value) => update("cardRadius", value)}
        />
        {style.showOverlay ? (
          <InspectorColor
            label="Wash color"
            value={style.overlayColor}
            onChange={(value) => update("overlayColor", value)}
          />
        ) : null}
        {style.showCity ? (
          <InspectorColor
            label="City color"
            value={style.cityColor}
            onChange={(value) => update("cityColor", value)}
          />
        ) : null}
        {style.showName ? (
          <InspectorColor
            label="Name color"
            value={style.nameColor}
            onChange={(value) => update("nameColor", value)}
          />
        ) : null}
        {style.showTag ? (
          <InspectorColor
            label="Tag color"
            value={style.tagColor}
            onChange={(value) => update("tagColor", value)}
          />
        ) : null}
      </InspectorSection>

      <InspectorSection
        title="Button"
        onReset={() => reset(SEARCH_GRID_STYLE_RESET_KEYS.button)}
      >
        <InspectorSwitch
          checked={style.showButtons}
          onChange={() => toggle("showButtons")}
          label="CTAs"
          hint="Explore buttons on hover"
        />
        {style.showButtons ? (
          <>
            <InspectorColor
              label="Primary background"
              value={style.primaryBg}
              onChange={(value) => update("primaryBg", value)}
            />
            <InspectorColor
              label="Primary text"
              value={style.primaryText}
              onChange={(value) => update("primaryText", value)}
            />
            <InspectorColor
              label="Secondary color"
              value={style.secondaryText}
              onChange={(value) => update("secondaryText", value)}
            />
          </>
        ) : null}
      </InspectorSection>

      <InspectorSection
        title="Nav"
        onReset={() => reset(SEARCH_GRID_STYLE_RESET_KEYS.nav)}
      >
        <InspectorSwitch
          checked={style.showArrows}
          onChange={() => toggle("showArrows")}
          label="Arrows"
          hint="Previous / next controls"
        />
        <InspectorSwitch
          checked={style.showDots}
          onChange={() => toggle("showDots")}
          label="Dots"
          hint="Pagination dots"
        />
        {style.showArrows ? (
          <InspectorColor
            label="Arrow color"
            value={style.navColor}
            onChange={(value) => update("navColor", value)}
          />
        ) : null}
        {style.showDots ? (
          <InspectorColor
            label="Dot color"
            value={style.dotColor}
            onChange={(value) => update("dotColor", value)}
          />
        ) : null}
      </InspectorSection>
    </div>
  );
}

export default function SearchWithTabsAndGridPropsForm({
  content,
  onContentChange,
  contentDefaults,
  style,
  onStyleChange,
}) {
  return (
    <InspectorTabs
      content={
        <SearchWithTabsAndGridContentForm
          content={content}
          onChange={onContentChange}
          defaults={contentDefaults}
        />
      }
      style={
        <SearchWithTabsAndGridStyleForm
          style={style}
          onChange={onStyleChange}
        />
      }
    />
  );
}
