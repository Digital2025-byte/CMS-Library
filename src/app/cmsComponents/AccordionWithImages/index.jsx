"use client";

import AccordionImagesHeader from "./components/AccordionImagesHeader";
import AccordionImagesItem from "./components/AccordionImagesItem";
import AccordionImagesPanel from "./components/AccordionImagesPanel";
import { useAccordionImages } from "./hooks/useAccordionImages";
import { getAccordionImagesContent } from "./utils/helpers";

const AccordionWithImages = ({ data }) => {
  const { title, description, items } = getAccordionImagesContent(data);
  const { openIndex, containerRef, setItemRef, toggleAccordion } =
    useAccordionImages(items);

  return (
    <>
      <AccordionImagesHeader title={title} description={description} />

      <section className="flex flex-col gap-6 py-2 sm:gap-8 lg:flex-row lg:gap-12 lg:py-4">
        <div className="flex w-full flex-col lg:w-1/2">
          <div
            ref={containerRef}
            className="relative flex max-h-[28rem] flex-1 flex-col overflow-y-auto sm:max-h-[32rem] lg:max-h-none"
          >
            <div className="flex w-full flex-col space-y-2 sm:space-y-4">
              {items.map((item, index) => (
                <AccordionImagesItem
                  key={index}
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() => toggleAccordion(index)}
                  itemRef={(element) => setItemRef(index, element)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="hidden w-full items-center justify-center sm:flex lg:w-1/2">
          <AccordionImagesPanel items={items} activeIndex={openIndex} />
        </div>
      </section>
    </>
  );
};

export default AccordionWithImages;
