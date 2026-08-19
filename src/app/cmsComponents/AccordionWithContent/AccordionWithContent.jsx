"use client";

import AccordionButton from "./components/AccordionButton";
import AccordionHeader from "./components/AccordionHeader";
import AccordionItem from "./components/AccordionItem";
import { useAccordion } from "./hooks/useAccordion";
import { getAccordionContent } from "./utils/helpers";
import { ITEM_GAP_CLASS, resolveAccordionStyle } from "./utils/style";

export default function AccordionWithContent({ data, style }) {
  const resolved = resolveAccordionStyle(style);
  const { title, description, buttonLabel, buttonHref, items } =
    getAccordionContent(data);
  const { isOpen, toggleAccordion } = useAccordion();
  const gapClass = ITEM_GAP_CLASS[resolved.itemGap] ?? ITEM_GAP_CLASS.default;

  return (
    <>
      {resolved.showTitleDescription || resolved.showDescription ? (
        <AccordionHeader
          title={resolved.showTitleDescription ? title : ""}
          description={description}
          align={resolved.titleAlign}
          titleColor={resolved.titleColor}
          descriptionColor={resolved.descriptionColor}
          showDescription={resolved.showDescription}
        />
      ) : null}

      <div className={`flex flex-col ${gapClass}`}>
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            isOpen={isOpen(index)}
            onToggle={() => toggleAccordion(index)}
            look={resolved.itemLook}
            showBackground={resolved.showItemBg}
            background={resolved.itemBg}
            radius={resolved.itemRadius}
            padding={resolved.itemPadding}
            titleColor={resolved.itemTitleColor}
            openColor={resolved.itemOpenColor}
            bodyColor={resolved.itemBodyColor}
          />
        ))}
      </div>

      {resolved.showButton ? (
        <AccordionButton
          label={buttonLabel}
          href={buttonHref}
          position={resolved.buttonPosition}
          variant={resolved.buttonVariant}
          width={resolved.buttonWidth}
        />
      ) : null}
    </>
  );
}
