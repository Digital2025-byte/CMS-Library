import { CaretDownIcon, CaretUpIcon, TrashIcon } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";
import { inspectorIconHoverClass } from "../constants";

export default function InspectorRepeaterItem({
  label,
  open,
  onToggle,
  onRemove,
  children,
}) {
  return (
    <div className="overflow-hidden rounded-sm border border-200">
      <div className="group flex items-center bg-50">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="flex min-w-0 flex-1 cursor-pointer items-center gap-2 px-3 py-2 text-start hover:bg-100"
        >
          {open ? (
            <CaretUpIcon
              className="h-4 w-4 shrink-0 text-700"
              weight="bold"
              aria-hidden
            />
          ) : (
            <CaretDownIcon
              className="h-4 w-4 shrink-0 text-500"
              weight="bold"
              aria-hidden
            />
          )}
          <span className={`${typography.caption} truncate font-medium text-main`}>
            {label}
          </span>
        </button>
        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove ${label}`}
          className={`cursor-pointer px-2 py-2 text-500 hover:bg-200 hover:text-main ${inspectorIconHoverClass}`}
        >
          <TrashIcon size={14} weight="regular" aria-hidden />
        </button>
      </div>
      {open ? (
        <div className="flex flex-col gap-3 border-t border-200 bg-white px-3 py-3">
          {children}
        </div>
      ) : null}
    </div>
  );
}
