"use client";

import InspectorAddButton from "../InspectorAddButton";
import InspectorRepeaterItem from "../InspectorRepeaterItem";
import useRepeater from "../useRepeater";

export default function InspectorRepeater({
  items = [],
  onChange,
  createItem,
  itemLabel = (_item, index) => `Item ${index + 1}`,
  addLabel = "Add Item",
  children,
}) {
  const repeater = useRepeater({ items, onChange, createItem });

  return (
    <>
      {items.map((item, index) => (
        <InspectorRepeaterItem
          key={index}
          label={itemLabel(item, index)}
          open={repeater.isOpen(index)}
          onToggle={() => repeater.toggleItem(index)}
          onRemove={() => repeater.removeItem(index)}
        >
          {children(item, {
            index,
            update: (key, value) => repeater.updateItem(index, key, value),
          })}
        </InspectorRepeaterItem>
      ))}
      <InspectorAddButton onClick={repeater.addItem}>{addLabel}</InspectorAddButton>
    </>
  );
}
