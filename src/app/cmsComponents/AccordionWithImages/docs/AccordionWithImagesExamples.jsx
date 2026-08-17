"use client";

import { useEffect, useState } from "react";
import AccordionWithImages from "@/app/cmsComponents/AccordionWithImages";
import AccordionImagesContainer from "@/app/cmsComponents/AccordionWithImages/components/AccordionImagesContainer";
import AccordionWithImagesPropsForm from "@/app/cmsComponents/AccordionWithImages/docs/AccordionWithImagesPropsForm";
import {
  getAccordionImagesEditorContent,
  wrapAccordionImagesContent,
} from "@/app/cmsComponents/AccordionWithImages/utils/helpers";
import { DEFAULT_ACCORDION_IMAGES_STYLE } from "@/app/cmsComponents/AccordionWithImages/utils/style";
import { InspectorFooter, InspectorSubmitButton } from "@/components/inspector";
import Drawer, { useDrawer } from "@/components/ui/Drawer";

export default function AccordionWithImagesExamples({
  ctx,
  name = "AccordionWithImages",
}) {
  const { lang, dir, accordionWithImagesData } = ctx;
  const drawer = useDrawer();
  const [style, setStyle] = useState(DEFAULT_ACCORDION_IMAGES_STYLE);
  const [content, setContent] = useState(() =>
    getAccordionImagesEditorContent(accordionWithImagesData)
  );

  useEffect(() => {
    setContent(getAccordionImagesEditorContent(accordionWithImagesData));
  }, [accordionWithImagesData]);

  return (
    <div>
      <AccordionImagesContainer lang={lang} dir={dir} background={style.sectionBg}>
        <AccordionWithImages
          data={wrapAccordionImagesContent(content)}
          showTitleDescription={style.showTitleDescription}
          showDescription={style.showDescription}
          showTitleBorder={style.showTitleBorder}
          showImagePanel={style.showImagePanel}
          titleAlign={style.titleAlign}
          titleColor={style.titleColor}
          descriptionColor={style.descriptionColor}
          itemLook={style.itemLook}
          itemBg={style.itemBg}
          itemRadius={style.itemRadius}
          itemGap={style.itemGap}
          itemPadding={style.itemPadding}
          showItemDivider={style.showItemDivider}
          itemTitleColor={style.itemTitleColor}
          itemOpenColor={style.itemOpenColor}
          itemBodyColor={style.itemBodyColor}
          imagePosition={style.imagePosition}
          imageRadius={style.imageRadius}
          imageBg={style.imageBg}
          toggleBg={style.toggleBg}
          toggleBorder={style.toggleBorder}
          toggleIcon={style.toggleIcon}
        />
      </AccordionImagesContainer>

      <Drawer
        isOpen={drawer.isOpen}
        onClose={drawer.close}
        onOpen={drawer.open}
        triggerRef={drawer.triggerRef}
        panelRef={drawer.panelRef}
        titleId={drawer.titleId}
        title={name}
        footer={
          <InspectorFooter>
            <InspectorSubmitButton
              onClick={() =>
                console.log("AccordionWithImages", { content, style })
              }
            />
          </InspectorFooter>
        }
      >
        <AccordionWithImagesPropsForm
          content={content}
          onContentChange={setContent}
          contentDefaults={getAccordionImagesEditorContent(
            accordionWithImagesData
          )}
          style={style}
          onStyleChange={setStyle}
        />
      </Drawer>
    </div>
  );
}
