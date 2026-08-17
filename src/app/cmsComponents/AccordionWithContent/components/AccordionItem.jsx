import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";
import {
  ITEM_PADDING_CLASS,
  ITEM_RADIUS_CLASS,
  SURFACE_CLASS,
  TEXT_COLOR_CLASS,
} from "../utils/style";

export default function AccordionItem({
  item,
  isOpen,
  onToggle,
  look = "filled",
  background = "white",
  radius = "lg",
  padding = "default",
  titleColor = "800",
  openColor = "primary-1",
  bodyColor = "700",
}) {
  const backgroundClass = SURFACE_CLASS[background] ?? SURFACE_CLASS.white;
  const radiusClass = ITEM_RADIUS_CLASS[radius] ?? ITEM_RADIUS_CLASS.lg;
  const paddingClass = ITEM_PADDING_CLASS[padding] ?? ITEM_PADDING_CLASS.default;
  const lookClass =
    look === "outline"
      ? `border border-200 bg-transparent`
      : backgroundClass;
  const closedTitleClass = TEXT_COLOR_CLASS[titleColor] ?? TEXT_COLOR_CLASS["800"];
  const openTitleClass = TEXT_COLOR_CLASS[openColor] ?? TEXT_COLOR_CLASS["primary-1"];
  const bodyClass = TEXT_COLOR_CLASS[bodyColor] ?? TEXT_COLOR_CLASS["700"];
  const iconClass = isOpen ? openTitleClass : "text-500";

  return (
    <div
      className={`cursor-pointer **:cursor-pointer ${lookClass} ${radiusClass} ${paddingClass}`}
      onClick={onToggle}
    >
      <button
        type="button"
        className="flex min-h-11 w-full cursor-pointer items-start justify-between gap-3 text-start sm:min-h-0 sm:items-center sm:gap-4"
      >
        <h3
          className={`${typography.itemTitle} font-medium leading-snug ${
            isOpen ? openTitleClass : closedTitleClass
          }`}
        >
          {item.title}
        </h3>
        {isOpen ? (
          <CaretUpIcon
            className={`mt-0.5 h-4 w-4 shrink-0 sm:mt-0 sm:h-5 sm:w-5 ${iconClass}`}
            weight="bold"
          />
        ) : (
          <CaretDownIcon
            className={`mt-0.5 h-4 w-4 shrink-0 sm:mt-0 sm:h-5 sm:w-5 ${iconClass}`}
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
          className={`${typography.itemDescription} pr-6 leading-relaxed whitespace-pre-line sm:pr-8 ${bodyClass}`}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}
