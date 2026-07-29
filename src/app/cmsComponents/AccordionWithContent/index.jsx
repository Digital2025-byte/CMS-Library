"use client";

import AccordionButton from "./components/AccordionButton";
import AccordionHeader from "./components/AccordionHeader";
import AccordionItem from "./components/AccordionItem";
import { useAccordion } from "./hooks/useAccordion";
import { getAccordionContent } from "./utils/helpers";

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
