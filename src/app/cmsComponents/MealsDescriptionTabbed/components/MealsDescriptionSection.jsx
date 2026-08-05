import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react";
import { typography } from "@/styles/typography";

function MealItemBlock({ item, itemIndex, titleClassName }) {
  return (
    <div
      className={`px-4 py-4 ${
        itemIndex % 2 === 0 ? "bg-[#F6F6F5]" : "bg-[#EFEFED]"
      }`}
    >
      {item.title ? (
        <h4 className={`${typography.itemDescription} font-semibold ${titleClassName}`}>
          {item.title}
        </h4>
      ) : null}
      {item.description ? (
        <p
          className={`${typography.body} mt-1 leading-relaxed text-700`}
        >
          {item.description}
        </p>
      ) : null}
    </div>
  );
}

export default function MealsDescriptionSection({
  section,
  isOpen = true,
  onToggle,
}) {
  if (!section) {
    return null;
  }

  const groups = Array.isArray(section.groups) ? section.groups : [];
  const items = Array.isArray(section.items) ? section.items : [];
  const hasGroups = groups.length > 0;

  return (
    <div className="mb-3 overflow-hidden rounded-t-md">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-3 bg-primary-1 px-4 py-3 text-start text-white"
      >
        <span className={`${typography.itemTitle} font-medium`}>
          {section.sectionTitle || ""}
        </span>
        {isOpen ? (
          <CaretUpIcon size={18} weight="bold" aria-hidden />
        ) : (
          <CaretDownIcon size={18} weight="bold" aria-hidden />
        )}
      </button>

      {isOpen ? (
        <div className="bg-[#F6F6F5]">
          {hasGroups
            ? groups.map((group, groupIndex) => (
                <div key={`${group.title || "group"}-${groupIndex}`}>
                  {group.title ? (
                    <div className="bg-[#F6F6F5] px-4 pb-1 pt-4">
                      <h3
                        className={`${typography.itemTitle} font-semibold text-primary-1`}
                      >
                        {group.title}
                      </h3>
                    </div>
                  ) : null}
                  {(group.items || []).map((item, itemIndex) => (
                    <MealItemBlock
                      key={`${item.title || "item"}-${itemIndex}`}
                      item={item}
                      itemIndex={itemIndex}
                      titleClassName="text-primary-2"
                    />
                  ))}
                </div>
              ))
            : items.map((item, itemIndex) => (
                <MealItemBlock
                  key={`${item.title || "item"}-${itemIndex}`}
                  item={item}
                  itemIndex={itemIndex}
                  titleClassName="text-primary-1"
                />
              ))}
        </div>
      ) : null}
    </div>
  );
}
