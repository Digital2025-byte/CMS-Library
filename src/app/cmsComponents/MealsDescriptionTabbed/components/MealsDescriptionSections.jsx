import MealsDescriptionNotes from "./MealsDescriptionNotes";
import MealsDescriptionSection from "./MealsDescriptionSection";

export default function MealsDescriptionSections({
  sections = [],
  notes = [],
  isSectionOpen,
  onToggleSection,
}) {
  if (!sections.length && !notes.length) {
    return null;
  }

  return (
    <div className="lg:col-span-8">
      {sections.map((section, sectionIndex) => (
        <MealsDescriptionSection
          key={`${section.sectionTitle || "section"}-${sectionIndex}`}
          section={section}
          isOpen={isSectionOpen?.(sectionIndex)}
          onToggle={() => onToggleSection?.(sectionIndex)}
        />
      ))}
      <MealsDescriptionNotes notes={notes} />
    </div>
  );
}
