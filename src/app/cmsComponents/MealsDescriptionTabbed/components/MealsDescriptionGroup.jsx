import { typography } from "@/styles/typography";
import MealsDescriptionItem from "./MealsDescriptionItem";

export default function MealsDescriptionGroup({ group, groupIndex = 0 }) {
  if (!group) {
    return null;
  }

  const items = Array.isArray(group.items) ? group.items : [];

  return (
    <div>
      {group.title ? (
        <div className="bg-white px-4 pb-1 pt-4">
          <h3
            className={`${typography.itemTitle} font-semibold text-primary-1`}
          >
            {group.title}
          </h3>
        </div>
      ) : null}

      {items.map((item, itemIndex) => (
        <MealsDescriptionItem
          key={`${group.title || groupIndex}-${item.title || "item"}-${itemIndex}`}
          item={item}
          striped={itemIndex % 2 === 1}
          titleClassName="text-primary-2"
        />
      ))}
    </div>
  );
}
