"use client";

import { useId } from "react";
import PageContentContainer from "@/components/layout/PageContentContainer";
import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import MealsDescriptionImage from "./MealsDescriptionImage";
import MealsDescriptionSections from "./MealsDescriptionSections";
import MealsDescriptionTabs from "./MealsDescriptionTabs";
import {
  DEFAULT_MEALS_TABBED_STYLE,
  SECTION_PADDING_CLASS,
  TITLE_ALIGN_CLASS,
} from "../utils/style";

export default function MealsDescriptionTabbedPanel({
  lang = "en",
  title,
  tabs = [],
  notes = [],
  activeTabIndex = 0,
  onTabChange,
  activeSections = [],
  activeImage,
  isSectionOpen,
  onToggleSection,
  showTitle = DEFAULT_MEALS_TABBED_STYLE.showTitle,
  showTabs = DEFAULT_MEALS_TABBED_STYLE.showTabs,
  showImage = DEFAULT_MEALS_TABBED_STYLE.showImage,
  showNotes = DEFAULT_MEALS_TABBED_STYLE.showNotes,
  showSectionBg = DEFAULT_MEALS_TABBED_STYLE.showSectionBg,
  showItemTitle = DEFAULT_MEALS_TABBED_STYLE.showItemTitle,
  showItemDescription = DEFAULT_MEALS_TABBED_STYLE.showItemDescription,
  sectionBg = DEFAULT_MEALS_TABBED_STYLE.sectionBg,
  sectionPadding = DEFAULT_MEALS_TABBED_STYLE.sectionPadding,
  titleAlign = DEFAULT_MEALS_TABBED_STYLE.titleAlign,
  titleColor = DEFAULT_MEALS_TABBED_STYLE.titleColor,
  tabActive = DEFAULT_MEALS_TABBED_STYLE.tabActive,
  tabIdle = DEFAULT_MEALS_TABBED_STYLE.tabIdle,
  tabBorder = DEFAULT_MEALS_TABBED_STYLE.tabBorder,
  accordionRadius = DEFAULT_MEALS_TABBED_STYLE.accordionRadius,
  headerBg = DEFAULT_MEALS_TABBED_STYLE.headerBg,
  headerText = DEFAULT_MEALS_TABBED_STYLE.headerText,
  bodyBg = DEFAULT_MEALS_TABBED_STYLE.bodyBg,
  groupTitleColor = DEFAULT_MEALS_TABBED_STYLE.groupTitleColor,
  itemTitleColor = DEFAULT_MEALS_TABBED_STYLE.itemTitleColor,
  groupItemTitleColor = DEFAULT_MEALS_TABBED_STYLE.groupItemTitleColor,
  itemBodyColor = DEFAULT_MEALS_TABBED_STYLE.itemBodyColor,
  itemBg = DEFAULT_MEALS_TABBED_STYLE.itemBg,
  stripeColor = DEFAULT_MEALS_TABBED_STYLE.stripeColor,
  notesColor = DEFAULT_MEALS_TABBED_STYLE.notesColor,
  imageRadius = DEFAULT_MEALS_TABBED_STYLE.imageRadius,
}) {
  const baseId = useId();
  const isRtl = lang === "ar";
  const panelId = `${baseId}-panel-${activeTabIndex}`;
  const paddingClass =
    SECTION_PADDING_CLASS[sectionPadding] ?? SECTION_PADDING_CLASS.default;
  const alignClass = TITLE_ALIGN_CLASS[titleAlign] ?? TITLE_ALIGN_CLASS.left;
  const showHeading = showTitle && title;

  const accordionStyle = {
    accordionRadius,
    headerBg,
    headerText,
    bodyBg,
    groupTitleColor,
    itemTitleColor,
    groupItemTitleColor,
    itemBodyColor,
    itemBg,
    stripeColor,
    showItemTitle,
    showItemDescription,
  };

  return (
    <section
      className={`w-full ${paddingClass}`}
      dir={isRtl ? "rtl" : "ltr"}
      aria-labelledby={showHeading ? `${baseId}-title` : undefined}
      style={
        showSectionBg
          ? { backgroundColor: getThemeColorCss(sectionBg, "white") }
          : undefined
      }
    >
      <PageContentContainer>
        {showHeading ? (
          <h2
            id={`${baseId}-title`}
            className={`${typography.sectionTitle} mb-5 font-semibold wrap-break-word ${alignClass}`}
            style={{ color: getThemeColorCss(titleColor, "primary-1") }}
          >
            {title}
          </h2>
        ) : null}

        {showTabs ? (
          <MealsDescriptionTabs
            tabs={tabs}
            activeTabIndex={activeTabIndex}
            onTabChange={onTabChange}
            idPrefix={baseId}
            isRtl={isRtl}
            tabActive={tabActive}
            tabIdle={tabIdle}
            tabBorder={tabBorder}
          />
        ) : null}

        <div className="mt-6 grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
          <MealsDescriptionSections
            sections={activeSections}
            notes={showNotes ? notes : []}
            isSectionOpen={isSectionOpen}
            onToggleSection={onToggleSection}
            panelId={panelId}
            labelledBy={`${baseId}-tab-${activeTabIndex}`}
            wide={!showImage}
            notesColor={notesColor}
            accordionStyle={accordionStyle}
          />
          {showImage ? (
            <MealsDescriptionImage
              image={activeImage}
              tabKey={`tab-${activeTabIndex}`}
              imageRadius={imageRadius}
            />
          ) : null}
        </div>
      </PageContentContainer>
    </section>
  );
}
