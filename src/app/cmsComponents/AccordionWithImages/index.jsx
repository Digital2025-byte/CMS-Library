"use client";

import AccordionImagesHeader from "./components/AccordionImagesHeader";
import AccordionImagesItem from "./components/AccordionImagesItem";
import AccordionImagesPanel from "./components/AccordionImagesPanel";
import { useAccordionImages } from "./hooks/useAccordionImages";
import { getAccordionImagesContent } from "./utils/helpers";

const AccordionWithImages = ({
  data,
  showTitleDescription = true,
  showImagePanel = true,
}) => {
  const { title, description, items } = getAccordionImagesContent(data);
  const { openIndex, panelIndex, containerRef, setItemRef, toggleAccordion } =
    useAccordionImages(items);

  return (
    <>
      {showTitleDescription ? (
        <AccordionImagesHeader title={title} description={description} />
      ) : null}

      <section className="flex flex-col gap-6 py-2 sm:gap-8 lg:flex-row lg:gap-12 lg:py-4">
        <div className="flex w-full flex-col lg:w-1/2">
          <div
            ref={containerRef}
            className="relative flex max-h-112 flex-1 flex-col overflow-y-auto sm:max-h-128 lg:max-h-none"
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

        {showImagePanel ? (
          <div className="hidden w-full items-center justify-center sm:flex lg:w-1/2">
            <AccordionImagesPanel items={items} activeIndex={panelIndex} />
          </div>
        ) : null}
      </section>
    </>
  );
};

export default AccordionWithImages;
