"use client";

import { useId } from "react";
import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";
import MealsDescriptionGroup from "./MealsDescriptionGroup";
import MealsDescriptionItem from "./MealsDescriptionItem";

export default function MealsDescriptionSection({
  section,
  sectionIndex = 0,
  isOpen = true,
  onToggle,
}) {
  const reactId = useId();
  const panelId = `${reactId}-panel`;
  const headerId = `${reactId}-header`;

  if (!section) {
    return null;
  }

  const groups = Array.isArray(section.groups) ? section.groups : [];
  const items = Array.isArray(section.items) ? section.items : [];
  const hasGroups = groups.length > 0;
  const hasBody = hasGroups || items.length > 0;

  return (
    <div className="mb-3 overflow-hidden rounded-md shadow-xs">
      <button
        type="button"
        id={headerId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="cursor-pointer flex min-h-11 w-full items-center justify-between gap-3 bg-primary-1 px-4 py-3 text-start text-white transition-colors hover:bg-primary-1/95"
      >
        <span className={`${typography.itemTitle} font-medium`}>
          {section.sectionTitle || `Section ${sectionIndex + 1}`}
        </span>
        {isOpen ? (
          <CaretUpIcon size={18} weight="bold" className="shrink-0" aria-hidden />
        ) : (
          <CaretDownIcon
            size={18}
            weight="bold"
            className="shrink-0"
            aria-hidden
          />
        )}
      </button>

      {hasBody ? (
        <div
          id={panelId}
          role="region"
          aria-labelledby={headerId}
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-100">
            {hasGroups
              ? groups.map((group, groupIndex) => (
                  <MealsDescriptionGroup
                    key={`${group.title || "group"}-${groupIndex}`}
                    group={group}
                    groupIndex={groupIndex}
                  />
                ))
              : items.map((item, itemIndex) => (
                  <MealsDescriptionItem
                    key={`${item.title || "item"}-${itemIndex}`}
                    item={item}
                    striped={itemIndex % 2 === 1}
                    titleClassName="text-primary-1"
                  />
                ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
