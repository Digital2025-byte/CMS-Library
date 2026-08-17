"use client";

import AccordionImagesHeader from "./components/AccordionImagesHeader";
import AccordionImagesItem from "./components/AccordionImagesItem";
import AccordionImagesPanel from "./components/AccordionImagesPanel";
import { useAccordionImages } from "./hooks/useAccordionImages";
import { getAccordionImagesContent } from "./utils/helpers";
import { ITEM_GAP_CLASS } from "./utils/style";

const AccordionWithImages = ({
  data,
  showTitleDescription = true,
  showDescription = true,
  showTitleBorder = true,
  showImagePanel = true,
  titleAlign = "left",
  titleColor = "primary-1",
  descriptionColor = "700",
  itemLook = "filled",
  itemBg = "background",
  itemRadius = "none",
  itemGap = "tight",
  itemPadding = "tight",
  showItemDivider = true,
  itemTitleColor = "800",
  itemOpenColor = "primary-1",
  itemBodyColor = "700",
  imagePosition = "right",
  imageRadius = "lg",
  imageBg = "100",
  toggleBg = "primary-1",
  toggleBorder = "secondary-1",
  toggleIcon = "white",
}) => {
  const { title, description, items } = getAccordionImagesContent(data);
  const { openIndex, panelIndex, containerRef, setItemRef, toggleAccordion } =
    useAccordionImages(items);
  const gapClass = ITEM_GAP_CLASS[itemGap] ?? ITEM_GAP_CLASS.tight;

  return (
    <>
      {showTitleDescription || showDescription ? (
        <AccordionImagesHeader
          title={showTitleDescription ? title : ""}
          description={description}
          align={titleAlign}
          titleColor={titleColor}
          descriptionColor={descriptionColor}
          showDescription={showDescription}
          showTitleBorder={showTitleBorder}
        />
      ) : null}

      <section
        className={`flex flex-col gap-6 py-2 sm:gap-8 lg:flex-row lg:gap-12 lg:py-4 ${
          imagePosition === "left" ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="flex w-full flex-col lg:w-1/2">
          <div
            ref={containerRef}
            className="relative flex max-h-112 flex-1 flex-col overflow-y-auto sm:max-h-128 lg:max-h-none"
          >
            <div className={`flex w-full flex-col ${gapClass}`}>
              {items.map((item, index) => (
                <AccordionImagesItem
                  key={index}
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() => toggleAccordion(index)}
                  itemRef={(element) => setItemRef(index, element)}
                  look={itemLook}
                  background={itemBg}
                  radius={itemRadius}
                  padding={itemPadding}
                  showDivider={showItemDivider}
                  titleColor={itemTitleColor}
                  openColor={itemOpenColor}
                  bodyColor={itemBodyColor}
                  toggleBg={toggleBg}
                  toggleBorder={toggleBorder}
                  toggleIcon={toggleIcon}
                />
              ))}
            </div>
          </div>
        </div>

        {showImagePanel ? (
          <div className="hidden w-full items-center justify-center sm:flex lg:w-1/2">
            <AccordionImagesPanel
              items={items}
              activeIndex={panelIndex}
              radius={imageRadius}
              background={imageBg}
            />
          </div>
        ) : null}
      </section>
    </>
  );
};

export default AccordionWithImages;
