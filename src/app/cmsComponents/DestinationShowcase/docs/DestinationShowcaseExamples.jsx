"use client";

import { useEffect, useState } from "react";
import DestinationShowcase from "@/app/cmsComponents/DestinationShowcase";
import DestinationShowcaseContainer from "@/app/cmsComponents/DestinationShowcase/components/DestinationShowcaseContainer";
import DestinationShowcasePropsForm from "@/app/cmsComponents/DestinationShowcase/docs/DestinationShowcasePropsForm";
import {
  getDestinationShowcaseEditorContent,
  wrapDestinationShowcaseContent,
} from "@/app/cmsComponents/DestinationShowcase/utils/helpers";
import { DEFAULT_DESTINATION_SHOWCASE_STYLE } from "@/app/cmsComponents/DestinationShowcase/utils/style";
import {
  InspectorFooter,
  InspectorSubmitButton,
  resolveEditorLink,
} from "@/components/inspector";
import Drawer, { useDrawer } from "@/components/ui/Drawer";

function toEditorContent(data, lang) {
  const content = getDestinationShowcaseEditorContent(data, lang, {
    posParams: "gb",
  });
  const link = resolveEditorLink(content.viewAllHref);

  return {
    ...content,
    viewAllHref: link.href,
    viewAllLinkType: link.type,
  };
}

export default function DestinationShowcaseExamples({
  ctx,
  name = "DestinationShowcase",
}) {
  const { lang, dir, destinationShowcaseData } = ctx;
  const drawer = useDrawer();
  const [style, setStyle] = useState(DEFAULT_DESTINATION_SHOWCASE_STYLE);
  const [content, setContent] = useState(() =>
    toEditorContent(destinationShowcaseData, lang)
  );

  useEffect(() => {
    setContent(toEditorContent(destinationShowcaseData, lang));
  }, [destinationShowcaseData, lang]);

  return (
    <div>
      <DestinationShowcaseContainer
        lang={lang}
        dir={dir}
        background={style.sectionBg}
        showBackground={style.showSectionBg}
        padding={style.sectionPadding}
      >
        <DestinationShowcase
          lang={lang}
          data={wrapDestinationShowcaseContent(content, lang)}
          posParams="gb"
          showTitle={style.showTitle}
          showDescription={style.showDescription}
          showViewAll={style.showViewAll}
          showButton={style.showButton}
          showHeroImage={style.showHeroImage}
          showOverlay={style.showOverlay}
          showDestinationName={style.showDestinationName}
          showDestinationDescription={style.showDestinationDescription}
          showCards={style.showCards}
          showCardOverlay={style.showCardOverlay}
          showArrows={style.showArrows}
          showDots={style.showDots}
          titleAlign={style.titleAlign}
          titleColor={style.titleColor}
          descriptionColor={style.descriptionColor}
          viewAllColor={style.viewAllColor}
          bannerRadius={style.bannerRadius}
          overlayColor={style.overlayColor}
          destNameColor={style.destNameColor}
          destBodyColor={style.destBodyColor}
          cardRadius={style.cardRadius}
          cardOverlayColor={style.cardOverlayColor}
          buttonBg={style.buttonBg}
          buttonText={style.buttonText}
          navColor={style.navColor}
        />
      </DestinationShowcaseContainer>

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
                console.log("DestinationShowcase", { content, style })
              }
            />
          </InspectorFooter>
        }
      >
        <DestinationShowcasePropsForm
          content={content}
          onContentChange={setContent}
          contentDefaults={toEditorContent(destinationShowcaseData, lang)}
          style={style}
          onStyleChange={setStyle}
        />
      </Drawer>
    </div>
  );
}
