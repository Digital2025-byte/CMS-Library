import PageContentContainer from "@/components/layout/PageContentContainer";
import { typography } from "@/styles/typography";
import MealsDescriptionImage from "./MealsDescriptionImage";
import MealsDescriptionSections from "./MealsDescriptionSections";
import MealsDescriptionTabs from "./MealsDescriptionTabs";

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
}) {
  return (
    <section
      className="w-full bg-white py-8 lg:py-12"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <PageContentContainer>
        {title ? (
          <h2
            className={`${typography.sectionTitle} mb-5 font-semibold text-primary-1`}
          >
            {title}
          </h2>
        ) : null}

        <MealsDescriptionTabs
          tabs={tabs}
          activeTabIndex={activeTabIndex}
          onTabChange={onTabChange}
        />

        <div className="mt-6 grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
          <MealsDescriptionSections
            sections={activeSections}
            notes={notes}
            isSectionOpen={isSectionOpen}
            onToggleSection={onToggleSection}
          />
          <MealsDescriptionImage image={activeImage} />
        </div>
      </PageContentContainer>
    </section>
  );
}
