import MealsDescriptionNotes from "./MealsDescriptionNotes";
import MealsDescriptionSection from "./MealsDescriptionSection";

export default function MealsDescriptionSections({
  sections = [],
  notes = [],
  isSectionOpen,
  onToggleSection,
  panelId,
  labelledBy,
}) {
  if (!sections.length && !notes.length) {
    return null;
  }

  return (
    <div
      className="lg:col-span-8"
      id={panelId}
      role="tabpanel"
      aria-labelledby={labelledBy}
    >
      {sections.map((section, sectionIndex) => (
        <MealsDescriptionSection
          key={`${section.sectionTitle || "section"}-${sectionIndex}`}
          section={section}
          sectionIndex={sectionIndex}
          isOpen={isSectionOpen?.(sectionIndex)}
          onToggle={() => onToggleSection?.(sectionIndex)}
        />
      ))}
      <MealsDescriptionNotes notes={notes} />
    </div>
  );
}
