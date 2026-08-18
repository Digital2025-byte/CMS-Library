"use client";

import { useEffect, useState } from "react";
import OnBoardImageRing from "@/app/cmsComponents/OnBoardImageRing";
import OnBoardImageRingPropsForm from "@/app/cmsComponents/OnBoardImageRing/docs/OnBoardImageRingPropsForm";
import {
  getOnBoardImageRingEditorContent,
  wrapOnBoardImageRingContent,
} from "@/app/cmsComponents/OnBoardImageRing/utils/helpers";
import {
  CARD_GAP_VALUE,
  DEFAULT_ON_BOARD_IMAGE_RING_STYLE,
} from "@/app/cmsComponents/OnBoardImageRing/utils/style";
import {
  InspectorFooter,
  InspectorSubmitButton,
} from "@/components/inspector";
import Drawer, { useDrawer } from "@/components/ui/Drawer";

function toEditorContent(data, lang) {
  return getOnBoardImageRingEditorContent(data, lang);
}

export default function OnBoardImageRingExamples({
  ctx,
  name = "OnBoardImageRing",
}) {
  const { lang, onBoardImageRingData } = ctx;
  const drawer = useDrawer();
  const [style, setStyle] = useState(DEFAULT_ON_BOARD_IMAGE_RING_STYLE);
  const [content, setContent] = useState(() =>
    toEditorContent(onBoardImageRingData, lang)
  );

  useEffect(() => {
    setContent(toEditorContent(onBoardImageRingData, lang));
  }, [onBoardImageRingData, lang]);

  return (
    <div>
      <OnBoardImageRing
        lang={lang}
        data={wrapOnBoardImageRingContent(content, lang)}
        showTitle={style.showTitle}
        showDescription={style.showDescription}
        showSectionBg={style.showSectionBg}
        showCaptions={style.showCaptions}
        showOverlay={style.showOverlay}
        showCardImage={style.showCardImage}
        sectionBg={style.sectionBg}
        sectionPadding={style.sectionPadding}
        titleAlign={style.titleAlign}
        titleColor={style.titleColor}
        descriptionColor={style.descriptionColor}
        cardRadius={style.cardRadius}
        cardGap={style.cardGap}
        captionColor={style.captionColor}
        overlayColor={style.overlayColor}
        imageGap={CARD_GAP_VALUE[style.cardGap] ?? CARD_GAP_VALUE.default}
      />

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
                console.log("OnBoardImageRing", { content, style })
              }
            />
          </InspectorFooter>
        }
      >
        <OnBoardImageRingPropsForm
          content={content}
          onContentChange={setContent}
          contentDefaults={toEditorContent(onBoardImageRingData, lang)}
          style={style}
          onStyleChange={setStyle}
        />
      </Drawer>
    </div>
  );
}
