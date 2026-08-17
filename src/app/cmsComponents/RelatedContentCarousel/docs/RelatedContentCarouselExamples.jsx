"use client";

import { useEffect, useState } from "react";
import RelatedContentCarousel from "@/app/cmsComponents/RelatedContentCarousel";
import RelatedContentCarouselContainer from "@/app/cmsComponents/RelatedContentCarousel/components/RelatedContentCarouselContainer";
import RelatedContentCarouselPropsForm from "@/app/cmsComponents/RelatedContentCarousel/docs/RelatedContentCarouselPropsForm";
import {
  getRelatedContentCarouselEditorContent,
  wrapRelatedContentCarouselContent,
} from "@/app/cmsComponents/RelatedContentCarousel/utils/helpers";
import { DEFAULT_RELATED_CONTENT_STYLE } from "@/app/cmsComponents/RelatedContentCarousel/utils/style";
import {
  InspectorFooter,
  InspectorSubmitButton,
  isExternalHref,
} from "@/components/inspector";
import Drawer, { useDrawer } from "@/components/ui/Drawer";

function toEditorLink(href) {
  if (!href) {
    return { type: "internal", href: "" };
  }

  if (isExternalHref(href)) {
    return { type: "external", href };
  }

  return { type: "internal", href };
}

function toEditorContent(data, lang) {
  const content = getRelatedContentCarouselEditorContent(data, lang, "gb");

  return {
    ...content,
    items: (content.items || []).map((item) => {
      const link = toEditorLink(item.buttonHref);

      return {
        ...item,
        buttonHref: link.href,
        buttonLinkType: link.type,
      };
    }),
  };
}

export default function RelatedContentCarouselExamples({
  ctx,
  name = "RelatedContentCarousel",
}) {
  const { lang, dir, relatedContentCarouselData } = ctx;
  const drawer = useDrawer();
  const [style, setStyle] = useState(DEFAULT_RELATED_CONTENT_STYLE);
  const [content, setContent] = useState(() =>
    toEditorContent(relatedContentCarouselData, lang)
  );

  useEffect(() => {
    setContent(toEditorContent(relatedContentCarouselData, lang));
  }, [relatedContentCarouselData, lang]);

  return (
    <div>
      <RelatedContentCarouselContainer
        lang={lang}
        dir={dir}
        background={style.sectionBg}
        padding={style.sectionPadding}
      >
        <RelatedContentCarousel
          lang={lang}
          data={wrapRelatedContentCarouselContent(content, lang)}
          posParams="gb"
          showTitle={style.showTitle}
          showDescription={style.showDescription}
          showArrows={style.showArrows}
          showCardImage={style.showCardImage}
          showCardTitle={style.showCardTitle}
          showCardDescription={style.showCardDescription}
          showButton={style.showButton}
          titleAlign={style.titleAlign}
          titleColor={style.titleColor}
          descriptionColor={style.descriptionColor}
          cardBg={style.cardBg}
          cardRadius={style.cardRadius}
          cardTitleColor={style.cardTitleColor}
          cardBodyColor={style.cardBodyColor}
          buttonBg={style.buttonBg}
          buttonText={style.buttonText}
          buttonOnFill={style.buttonOnFill}
          navColor={style.navColor}
          navTrack={style.navTrack}
        />
      </RelatedContentCarouselContainer>

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
                console.log("RelatedContentCarousel", { content, style })
              }
            />
          </InspectorFooter>
        }
      >
        <RelatedContentCarouselPropsForm
          content={content}
          onContentChange={setContent}
          contentDefaults={toEditorContent(relatedContentCarouselData, lang)}
          style={style}
          onStyleChange={setStyle}
        />
      </Drawer>
    </div>
  );
}
