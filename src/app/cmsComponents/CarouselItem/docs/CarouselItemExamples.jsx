"use client";

import { useEffect, useState } from "react";
import CarouselItem from "@/app/cmsComponents/CarouselItem";
import CarouselItemContainer from "@/app/cmsComponents/CarouselItem/components/CarouselItemContainer";
import CarouselItemPropsForm from "@/app/cmsComponents/CarouselItem/docs/CarouselItemPropsForm";
import {
  getCarouselItemEditorContent,
  wrapCarouselItemContent,
} from "@/app/cmsComponents/CarouselItem/utils/helpers";
import { DEFAULT_CAROUSEL_ITEM_STYLE } from "@/app/cmsComponents/CarouselItem/utils/style";
import {
  InspectorFooter,
  InspectorSubmitButton,
  resolveEditorLink,
} from "@/components/inspector";
import Drawer, { useDrawer } from "@/components/ui/Drawer";

function toEditorContent(data, lang) {
  const content = getCarouselItemEditorContent(data, lang);

  return {
    ...content,
    items: (content.items || []).map((item) => {
      const link = resolveEditorLink(item.buttonHref);

      return {
        ...item,
        buttonHref: link.href,
        buttonLinkType: link.type,
      };
    }),
  };
}

export default function CarouselItemExamples({
  ctx,
  name = "CarouselItem",
}) {
  const { lang, dir, carouselItemData } = ctx;
  const drawer = useDrawer();
  const [style, setStyle] = useState(DEFAULT_CAROUSEL_ITEM_STYLE);
  const [content, setContent] = useState(() =>
    toEditorContent(carouselItemData, lang)
  );

  useEffect(() => {
    setContent(toEditorContent(carouselItemData, lang));
  }, [carouselItemData, lang]);

  return (
    <div>
      <CarouselItemContainer lang={lang} dir={dir}>
        <CarouselItem
          lang={lang}
          data={wrapCarouselItemContent(content, lang)}
          posParams="gb"
          showTitle={style.showTitle}
          showArrows={style.showArrows}
          showDots={style.showDots}
          showSectionBg={style.showSectionBg}
          showCardImage={style.showCardImage}
          showCity={style.showCity}
          showIata={style.showIata}
          showCountry={style.showCountry}
          showOverlay={style.showOverlay}
          showHoverDim={style.showHoverDim}
          showButton={style.showButton}
          sectionBg={style.sectionBg}
          sectionPadding={style.sectionPadding}
          titleAlign={style.titleAlign}
          titleColor={style.titleColor}
          cardRadius={style.cardRadius}
          cityColor={style.cityColor}
          countryColor={style.countryColor}
          overlayColor={style.overlayColor}
          buttonBg={style.buttonBg}
          buttonText={style.buttonText}
          navColor={style.navColor}
          dotColor={style.dotColor}
        />
      </CarouselItemContainer>

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
              onClick={() => console.log("CarouselItem", { content, style })}
            />
          </InspectorFooter>
        }
      >
        <CarouselItemPropsForm
          content={content}
          onContentChange={setContent}
          contentDefaults={toEditorContent(carouselItemData, lang)}
          style={style}
          onStyleChange={setStyle}
        />
      </Drawer>
    </div>
  );
}
