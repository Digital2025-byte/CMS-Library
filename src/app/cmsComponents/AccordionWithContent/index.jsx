"use client";

import AccordionButton from "./components/AccordionButton";
import AccordionHeader from "./components/AccordionHeader";
import AccordionItem from "./components/AccordionItem";
import { useAccordion } from "./hooks/useAccordion";
import { getAccordionContent } from "./utils/helpers";

const AccordionWithContent = ({
  data,
  showTitleDescription = true,
  showButton = true,
  buttonPosition = "center",
}) => {
  const { title, description, buttonLabel, buttonHref, items } =
    getAccordionContent(data);
  const { isOpen, toggleAccordion } = useAccordion();

  return (
    <>
      {showTitleDescription ? (
        <AccordionHeader title={title} description={description} />
      ) : null}

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

      {showButton ? (
        <AccordionButton
          label={buttonLabel}
          href={buttonHref}
          position={buttonPosition}
        />
      ) : null}
    </>
  );
};

export default AccordionWithContent;
