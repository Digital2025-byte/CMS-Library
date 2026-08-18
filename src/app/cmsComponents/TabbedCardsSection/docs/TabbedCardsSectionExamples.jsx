"use client";

import { useEffect, useState } from "react";
import TabbedCardsSection from "@/app/cmsComponents/TabbedCardsSection";
import TabbedCardsContainer from "@/app/cmsComponents/TabbedCardsSection/components/TabbedCardsContainer";
import TabbedCardsSectionPropsForm from "@/app/cmsComponents/TabbedCardsSection/docs/TabbedCardsSectionPropsForm";
import {
  getTabbedCardsEditorContent,
  wrapTabbedCardsContent,
} from "@/app/cmsComponents/TabbedCardsSection/utils/helpers";
import { DEFAULT_TABBED_CARDS_STYLE } from "@/app/cmsComponents/TabbedCardsSection/utils/style";
import {
  InspectorFooter,
  InspectorSubmitButton,
} from "@/components/inspector";
import Drawer, { useDrawer } from "@/components/ui/Drawer";

function toEditorContent(data, lang) {
  return getTabbedCardsEditorContent(data, lang);
}

export default function TabbedCardsSectionExamples({
  ctx,
  name = "TabbedCardsSection",
}) {
  const { lang, dir, tabbedCardsData } = ctx;
  const drawer = useDrawer();
  const [style, setStyle] = useState(DEFAULT_TABBED_CARDS_STYLE);
  const [content, setContent] = useState(() =>
    toEditorContent(tabbedCardsData, lang)
  );

  useEffect(() => {
    setContent(toEditorContent(tabbedCardsData, lang));
  }, [tabbedCardsData, lang]);

  return (
    <div>
      <TabbedCardsContainer
        lang={lang}
        dir={dir}
        background={style.sectionBg}
        showBackground={style.showSectionBg}
        padding={style.sectionPadding}
      >
        <TabbedCardsSection
          lang={lang}
          data={wrapTabbedCardsContent(content, lang)}
          showTitle={style.showTitle}
          showDescription={style.showDescription}
          showTabs={style.showTabs}
          showImage={style.showImage}
          showCardTitle={style.showCardTitle}
          showCardDescription={style.showCardDescription}
          showCardBg={style.showCardBg}
          titleAlign={style.titleAlign}
          titleColor={style.titleColor}
          descriptionColor={style.descriptionColor}
          tabTrack={style.tabTrack}
          tabActiveBg={style.tabActiveBg}
          tabActiveText={style.tabActiveText}
          tabIdleText={style.tabIdleText}
          cardRadius={style.cardRadius}
          cardGap={style.cardGap}
          cardBg={style.cardBg}
          nameColor={style.nameColor}
          bodyColor={style.bodyColor}
        />
      </TabbedCardsContainer>

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
                console.log("TabbedCardsSection", { content, style })
              }
            />
          </InspectorFooter>
        }
      >
        <TabbedCardsSectionPropsForm
          content={content}
          onContentChange={setContent}
          contentDefaults={toEditorContent(tabbedCardsData, lang)}
          style={style}
          onStyleChange={setStyle}
        />
      </Drawer>
    </div>
  );
}
