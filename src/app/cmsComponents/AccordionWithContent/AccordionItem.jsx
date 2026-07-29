import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react";

export default function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div
      className="cursor-pointer rounded-lg bg-white px-5 py-5 transition-shadow sm:px-6 **:cursor-pointer"
      onClick={onToggle}
    >
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
      >
        <h3
          className={`text-base font-medium leading-snug sm:text-lg ${
            isOpen ? "text-primary-1" : "text-gray-800"
          }`}
        >
          {item.title}
        </h3>
        {isOpen ? (
          <CaretUpIcon
            className="h-5 w-5 shrink-0 text-primary-1"
            weight="bold"
          />
        ) : (
          <CaretDownIcon
            className="h-5 w-5 shrink-0 text-gray-500"
            weight="bold"
          />
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "mt-3 max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-line text-gray-600 sm:text-base">
          {item.description}
        </p>
      </div>
    </div>
  );
}
