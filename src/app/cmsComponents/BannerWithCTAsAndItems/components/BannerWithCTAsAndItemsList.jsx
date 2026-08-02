import { CheckCircleIcon } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";

export default function BannerWithCTAsAndItemsList({ items = [] }) {
  if (!items.length) {
    return null;
  }

  return (
    <ul className="mt-5 flex list-none flex-col items-start gap-3 p-0 sm:mt-6 sm:gap-3.5">
      {items.map((item, index) => (
        <li
          key={`${item}-${index}`}
          className={`${typography.itemDescription} flex items-center gap-2.5 font-medium text-secondary-200`}
        >
          <CheckCircleIcon
            size={24}
            weight="regular"
            className="shrink-0 text-secondary-200"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
