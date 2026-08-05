import { InfoIcon } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";

export default function MealsDescriptionNotes({ notes = [] }) {
  if (!notes.length) {
    return null;
  }

  return (
    <div className="mt-4 flex items-start gap-3 rounded-lg bg-primary-100/40 px-4 py-3 text-primary-1">
      <InfoIcon
        size={20}
        weight="fill"
        className="mt-0.5 shrink-0 text-primary-1"
        aria-hidden
      />
      <ul className={`${typography.itemDescription} list-disc space-y-1 ps-4`}>
        {notes.map((note, index) => (
          <li key={`${note}-${index}`}>{note}</li>
        ))}
      </ul>
    </div>
  );
}
