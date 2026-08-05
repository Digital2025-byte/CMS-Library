import { InfoIcon } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";

export default function MealsDescriptionNotes({ notes = [] }) {
  if (!notes.length) {
    return null;
  }

  return (
    <aside
      className="mt-4 flex items-start gap-3 rounded-lg  px-4 py-3 text-primary-1"
      aria-label="Meal notes"
    >
      <InfoIcon
        size={25}
        weight="fill"
        className="mt-0.5 shrink-0"
        aria-hidden
      />
      <ul className={`${typography.caption} list-disc space-y-1 ps-4`}>
        {notes.map((note, index) => (
          <li key={`${String(note).slice(0, 24)}-${index}`}>{note}</li>
        ))}
      </ul>
    </aside>
  );
}
