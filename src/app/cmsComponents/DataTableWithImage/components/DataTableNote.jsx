import { InfoIcon } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";

export default function DataTableNote({ note = "" }) {
  if (!note) {
    return null;
  }

  return (
    <p
      className={`${typography.caption} mt-5 flex items-center gap-2 text-primary-1`}
    >
      <InfoIcon
        size={18}
        weight="fill"
        className="shrink-0 text-primary-1"
        aria-hidden
      />
      <span>{note}</span>
    </p>
  );
}
