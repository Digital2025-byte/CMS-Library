"use client";

import { useEffect, useState } from "react";
import ImageCarouselsWithOppositeScrollDirections from "@/app/cmsComponents/ImageCarouselsWithOppositeScrollDirections";
import OppositeScrollContainer from "@/app/cmsComponents/ImageCarouselsWithOppositeScrollDirections/components/OppositeScrollContainer";
import OppositeScrollPropsForm from "@/app/cmsComponents/ImageCarouselsWithOppositeScrollDirections/docs/OppositeScrollPropsForm";
import {
  getOppositeScrollEditorContent,
  wrapOppositeScrollContent,
} from "@/app/cmsComponents/ImageCarouselsWithOppositeScrollDirections/utils/helpers";
import { DEFAULT_OPPOSITE_SCROLL_STYLE } from "@/app/cmsComponents/ImageCarouselsWithOppositeScrollDirections/utils/style";
import {
  InspectorFooter,
  InspectorSubmitButton,
  resolveEditorLink,
} from "@/components/inspector";
import Drawer, { useDrawer } from "@/components/ui/Drawer";

function toEditorContent(data, lang) {
  const content = getOppositeScrollEditorContent(data, lang);
  const link = resolveEditorLink(content.buttonHref);

  return {
    ...content,
    buttonHref: link.href,
    buttonLinkType: link.type,
  };
}

export default function OppositeScrollExamples({
  ctx,
  name = "ImageCarouselsWithOppositeScrollDirections",
}) {
  const { lang, dir, imageCarouselsWithOppositeScrollData } = ctx;
  const drawer = useDrawer();
  const [style, setStyle] = useState(DEFAULT_OPPOSITE_SCROLL_STYLE);
  const [content, setContent] = useState(() =>
    toEditorContent(imageCarouselsWithOppositeScrollData, lang)
  );

  useEffect(() => {
    setContent(toEditorContent(imageCarouselsWithOppositeScrollData, lang));
  }, [imageCarouselsWithOppositeScrollData, lang]);

  return (
    <div>
      <OppositeScrollContainer lang={lang} dir={dir}>
        <ImageCarouselsWithOppositeScrollDirections
          lang={lang}
          data={wrapOppositeScrollContent(content, lang)}
          showTitleDescription={style.showTitleDescription}
          showDescription={style.showDescription}
          showExploreButton={style.showExploreButton}
          showCardTitles={style.showCardTitles}
          showOverlay={style.showOverlay}
          dimOnHover={style.dimOnHover}
          pauseOnHover={style.pauseOnHover}
          reverseRows={style.reverseRows}
          sectionBg={style.sectionBg}
          sectionPadding={style.sectionPadding}
          titleAlign={style.titleAlign}
          titleColor={style.titleColor}
          descriptionColor={style.descriptionColor}
          cardSize={style.cardSize}
          cardRadius={style.cardRadius}
          cardGap={style.cardGap}
          rowGap={style.rowGap}
          cardTitleColor={style.cardTitleColor}
          overlayColor={style.overlayColor}
          speed={style.speed}
          buttonBg={style.buttonBg}
          buttonColor={style.buttonColor}
        />
      </OppositeScrollContainer>

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
                console.log("ImageCarouselsWithOppositeScrollDirections", {
                  content,
                  style,
                })
              }
            />
          </InspectorFooter>
        }
      >
        <OppositeScrollPropsForm
          content={content}
          onContentChange={setContent}
          contentDefaults={toEditorContent(
            imageCarouselsWithOppositeScrollData,
            lang
          )}
          style={style}
          onStyleChange={setStyle}
        />
      </Drawer>
    </div>
  );
}
