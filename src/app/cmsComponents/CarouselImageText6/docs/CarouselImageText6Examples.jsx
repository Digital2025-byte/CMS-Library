"use client";

import { useEffect, useState } from "react";
import CarouselImageText6 from "@/app/cmsComponents/CarouselImageText6";
import CarouselImageText6Container from "@/app/cmsComponents/CarouselImageText6/components/CarouselImageText6Container";
import CarouselImageText6PropsForm from "@/app/cmsComponents/CarouselImageText6/docs/CarouselImageText6PropsForm";
import {
  getCarouselImageText6EditorContent,
  wrapCarouselImageText6Content,
} from "@/app/cmsComponents/CarouselImageText6/utils/helpers";
import { DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE } from "@/app/cmsComponents/CarouselImageText6/utils/style";
import { InspectorFooter, InspectorSubmitButton } from "@/components/inspector";
import Drawer, { useDrawer } from "@/components/ui/Drawer";

export default function CarouselImageText6Examples({
  ctx,
  name = "CarouselImageText6",
}) {
  const { lang, dir, carouselImageText6Data } = ctx;
  const drawer = useDrawer();
  const [style, setStyle] = useState(DEFAULT_CAROUSEL_IMAGE_TEXT_STYLE);
  const [content, setContent] = useState(() =>
    getCarouselImageText6EditorContent(carouselImageText6Data, lang)
  );

  useEffect(() => {
    setContent(getCarouselImageText6EditorContent(carouselImageText6Data, lang));
  }, [carouselImageText6Data, lang]);

  return (
    <div>
      <CarouselImageText6Container lang={lang} dir={dir}>
        <CarouselImageText6
          lang={lang}
          data={wrapCarouselImageText6Content(content, lang)}
          showTitle={style.showTitle}
          showItemTitle={style.showItemTitle}
          showItemDescription={style.showItemDescription}
          grayscaleInactive={style.grayscaleInactive}
          openOn={style.openOn}
          showSectionBg={style.showSectionBg}
          sectionBg={style.sectionBg}
          titleAlign={style.titleAlign}
          titleColor={style.titleColor}
          showOverlay={style.showOverlay}
          overlayColor={style.overlayColor}
          showPanelBg={style.showPanelBg}
          panelColor={style.panelColor}
          showCardBg={style.showCardBg}
          cardBg={style.cardBg}
          itemTitleColor={style.itemTitleColor}
          itemBodyColor={style.itemBodyColor}
        />
      </CarouselImageText6Container>

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
                console.log("CarouselImageText6", { content, style })
              }
            />
          </InspectorFooter>
        }
      >
        <CarouselImageText6PropsForm
          content={content}
          onContentChange={setContent}
          contentDefaults={getCarouselImageText6EditorContent(
            carouselImageText6Data,
            lang
          )}
          style={style}
          onStyleChange={setStyle}
        />
      </Drawer>
    </div>
  );
}
