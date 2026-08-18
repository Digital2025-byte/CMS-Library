import MealsDescriptionNotes from "./MealsDescriptionNotes";
import MealsDescriptionSection from "./MealsDescriptionSection";

export default function MealsDescriptionSections({
  sections = [],
  notes = [],
  isSectionOpen,
  onToggleSection,
  panelId,
  labelledBy,
  wide = false,
  notesColor,
  accordionStyle,
}) {
  if (!sections.length && !notes.length) {
    return null;
  }

  return (
    <div
      className={wide ? "lg:col-span-12" : "lg:col-span-8"}
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
          accordionStyle={accordionStyle}
        />
      ))}
      <MealsDescriptionNotes notes={notes} notesColor={notesColor} />
    </div>
  );
}
