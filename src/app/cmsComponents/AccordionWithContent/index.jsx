"use client";

import AccordionButton from "./AccordionButton";
import AccordionHeader from "./AccordionHeader";
import AccordionItem from "./AccordionItem";
import { getAccordionContent } from "./helpers";
import { useAccordion } from "./useAccordion";

const AccordionWithContent = ({ data }) => {
  const { title, description, buttonLabel, buttonHref, items } =
    getAccordionContent(data);
  const { isOpen, toggleAccordion } = useAccordion();

  return (
    <>
      <AccordionHeader title={title} description={description} />

      <div className="flex flex-col gap-3 sm:gap-4">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            isOpen={isOpen(index)}
            onToggle={() => toggleAccordion(index)}
          />
        ))}
      </div>

      <AccordionButton label={buttonLabel} href={buttonHref} />
    </>
  );
};

export default AccordionWithContent;
