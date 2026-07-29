"use client";

import AccordionButton from "./AccordionButton";
import AccordionHeader from "./AccordionHeader";
import AccordionItem from "./AccordionItem";
import { getAccordionContent } from "./helpers";
import { useAccordion } from "./useAccordion";

const AccordionWithContent = ({ lang, data }) => {
  const { title, description, buttonLabel, buttonHref, items } =
    getAccordionContent(data);
  const { isOpen, toggleAccordion } = useAccordion();

  return (
    <div
      className="w-full bg-surface-1"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <section className="mx-auto w-full max-w-4xl px-6 py-12 lg:px-8 lg:py-16">
        <AccordionHeader title={title} description={description} />

        <div className="flex flex-col gap-4">
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
      </section>
    </div>
  );
};

export default AccordionWithContent;
