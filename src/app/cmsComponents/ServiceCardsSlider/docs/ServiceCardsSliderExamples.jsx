"use client";

import { useEffect, useState } from "react";
import ServiceCardsSlider from "@/app/cmsComponents/ServiceCardsSlider";
import ServiceCardsSliderContainer from "@/app/cmsComponents/ServiceCardsSlider/components/ServiceCardsSliderContainer";
import ServiceCardsSliderPropsForm from "@/app/cmsComponents/ServiceCardsSlider/docs/ServiceCardsSliderPropsForm";
import {
  getServiceCardsSliderEditorContent,
  wrapServiceCardsSliderContent,
} from "@/app/cmsComponents/ServiceCardsSlider/utils/helpers";
import { DEFAULT_SERVICE_CARDS_STYLE } from "@/app/cmsComponents/ServiceCardsSlider/utils/style";
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
  const content = getServiceCardsSliderEditorContent(data, lang, "gb");

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

export default function ServiceCardsSliderExamples({
  ctx,
  name = "ServiceCardsSlider",
}) {
  const { lang, dir, serviceCardsSliderData } = ctx;
  const drawer = useDrawer();
  const [style, setStyle] = useState(DEFAULT_SERVICE_CARDS_STYLE);
  const [content, setContent] = useState(() =>
    toEditorContent(serviceCardsSliderData, lang)
  );

  useEffect(() => {
    setContent(toEditorContent(serviceCardsSliderData, lang));
  }, [serviceCardsSliderData, lang]);

  return (
    <div>
      <ServiceCardsSliderContainer lang={lang} dir={dir}>
        <ServiceCardsSlider
          lang={lang}
          data={wrapServiceCardsSliderContent(content, lang)}
          posParams="gb"
          showTitle={style.showTitle}
          showDescription={style.showDescription}
          showItemTitle={style.showItemTitle}
          showItemDescription={style.showItemDescription}
          showIcon={style.showIcon}
          showArrow={style.showArrow}
          sectionBg={style.sectionBg}
          sectionPadding={style.sectionPadding}
          titleAlign={style.titleAlign}
          titleColor={style.titleColor}
          descriptionColor={style.descriptionColor}
          cardBg={style.cardBg}
          cardRadius={style.cardRadius}
          cardPadding={style.cardPadding}
          cardGap={style.cardGap}
          iconBg={style.iconBg}
          itemTitleColor={style.itemTitleColor}
          itemBodyColor={style.itemBodyColor}
          arrowColor={style.arrowColor}
        />
      </ServiceCardsSliderContainer>

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
                console.log("ServiceCardsSlider", { content, style })
              }
            />
          </InspectorFooter>
        }
      >
        <ServiceCardsSliderPropsForm
          content={content}
          onContentChange={setContent}
          contentDefaults={toEditorContent(serviceCardsSliderData, lang)}
          style={style}
          onStyleChange={setStyle}
        />
      </Drawer>
    </div>
  );
}
