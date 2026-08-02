import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";

export default function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div
      className="cursor-pointer rounded-lg bg-background px-4 py-4 transition-shadow sm:px-5 sm:py-5 md:px-6 [&_*]:cursor-pointer"
      onClick={onToggle}
    >
      <button
        type="button"
        className="flex min-h-11 w-full cursor-pointer items-start justify-between gap-3 text-start sm:min-h-0 sm:items-center sm:gap-4"
      >
        <h3
          className={`${typography.itemTitle} font-medium leading-snug ${
            isOpen ? "text-primary-1" : "text-800"
          }`}
        >
          {item.title}
        </h3>
        {isOpen ? (
          <CaretUpIcon
            className="mt-0.5 h-4 w-4 shrink-0 text-primary-1 sm:mt-0 sm:h-5 sm:w-5"
            weight="bold"
          />
        ) : (
          <CaretDownIcon
            className="mt-0.5 h-4 w-4 shrink-0 text-500 sm:mt-0 sm:h-5 sm:w-5"
            weight="bold"
          />
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "mt-2 max-h-125 opacity-100 sm:mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <p
          className={`${typography.itemDescription} pr-6 leading-relaxed whitespace-pre-line text-700 sm:pr-8`}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}
