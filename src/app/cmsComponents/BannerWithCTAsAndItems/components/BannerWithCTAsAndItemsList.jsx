import { CheckCircleIcon } from "@phosphor-icons/react";

export default function BannerWithCTAsAndItemsList({ items = [] }) {
  if (!items.length) {
    return null;
  }

  return (
    <ul className="mt-5 flex list-none flex-col gap-3 p-0 sm:mt-6 sm:gap-3.5">
      {items.map((item, index) => (
        <li
          key={`${item}-${index}`}
          className="flex items-center gap-2.5 text-base font-medium text-white sm:text-lg"
        >
          <CheckCircleIcon
            size={24}
            weight="regular"
            className="shrink-0 text-white"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
