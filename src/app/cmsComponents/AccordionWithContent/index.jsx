"use client";

import AccordionButton from "./components/AccordionButton";
import AccordionHeader from "./components/AccordionHeader";
import AccordionItem from "./components/AccordionItem";
import { useAccordion } from "./hooks/useAccordion";
import { getAccordionContent } from "./utils/helpers";
import { ITEM_GAP_CLASS } from "./utils/style";

const AccordionWithContent = ({
  data,
  showTitleDescription = true,
  showDescription = true,
  showButton = true,
  titleAlign = "left",
  titleColor = "primary-1",
  descriptionColor = "700",
  itemLook = "filled",
  itemBg = "white",
  itemRadius = "lg",
  itemGap = "default",
  itemPadding = "default",
  itemTitleColor = "800",
  itemOpenColor = "primary-1",
  itemBodyColor = "700",
  buttonPosition = "center",
  buttonVariant = "primary",
  buttonWidth = "auto",
}) => {
  const { title, description, buttonLabel, buttonHref, items } =
    getAccordionContent(data);
  const { isOpen, toggleAccordion } = useAccordion();
  const gapClass = ITEM_GAP_CLASS[itemGap] ?? ITEM_GAP_CLASS.default;

  return (
    <>
      {showTitleDescription || showDescription ? (
        <AccordionHeader
          title={showTitleDescription ? title : ""}
          description={description}
          align={titleAlign}
          titleColor={titleColor}
          descriptionColor={descriptionColor}
          showDescription={showDescription}
        />
      ) : null}

      <div className={`flex flex-col ${gapClass}`}>
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            isOpen={isOpen(index)}
            onToggle={() => toggleAccordion(index)}
            look={itemLook}
            background={itemBg}
            radius={itemRadius}
            padding={itemPadding}
            titleColor={itemTitleColor}
            openColor={itemOpenColor}
            bodyColor={itemBodyColor}
          />
        ))}
      </div>

      {showButton ? (
        <AccordionButton
          label={buttonLabel}
          href={buttonHref}
          position={buttonPosition}
          variant={buttonVariant}
          width={buttonWidth}
        />
      ) : null}
    </>
  );
};

export default AccordionWithContent;
