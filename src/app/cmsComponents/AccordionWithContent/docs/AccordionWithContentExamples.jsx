"use client";

import { useEffect, useState } from "react";
import AccordionWithContent from "@/app/cmsComponents/AccordionWithContent";
import AccordionContainer from "@/app/cmsComponents/AccordionWithContent/container/AccordionContainer";
import AccordionWithContentPropsForm from "@/app/cmsComponents/AccordionWithContent/docs/AccordionWithContentPropsForm";
import {
  getAccordionContent,
  wrapAccordionContent,
} from "@/app/cmsComponents/AccordionWithContent/utils/helpers";
import { DEFAULT_ACCORDION_STYLE } from "@/app/cmsComponents/AccordionWithContent/utils/style";
import {
  InspectorFooter,
  InspectorSubmitButton,
  resolveEditorLink,
} from "@/components/inspector";
import Drawer, { useDrawer } from "@/components/ui/Drawer";

function toEditorContent(data) {
  const content = getAccordionContent(data);
  const link = resolveEditorLink(content.buttonHref);

  return {
    ...content,
    buttonLinkType: link.type,
    buttonHref: link.href,
  };
}

export default function AccordionWithContentExamples({
  ctx,
  name = "AccordionWithContent",
}) {
  const { lang, dir, accordionData } = ctx;
  const drawer = useDrawer();
  const [style, setStyle] = useState(DEFAULT_ACCORDION_STYLE);
  const [content, setContent] = useState(() => toEditorContent(accordionData));

  useEffect(() => {
    setContent(toEditorContent(accordionData));
  }, [accordionData]);

  return (
    <div>
      <AccordionContainer
        lang={lang}
        dir={dir}
        background={style.sectionBg}
        showBackground={style.showSectionBg}
      >
        <AccordionWithContent
          data={wrapAccordionContent(content)}
          showTitleDescription={style.showTitleDescription}
          showDescription={style.showDescription}
          showButton={style.showButton}
          titleAlign={style.titleAlign}
          titleColor={style.titleColor}
          descriptionColor={style.descriptionColor}
          itemLook={style.itemLook}
          showItemBg={style.showItemBg}
          itemBg={style.itemBg}
          itemRadius={style.itemRadius}
          itemGap={style.itemGap}
          itemPadding={style.itemPadding}
          itemTitleColor={style.itemTitleColor}
          itemOpenColor={style.itemOpenColor}
          itemBodyColor={style.itemBodyColor}
          buttonPosition={style.buttonPosition}
          buttonVariant={style.buttonVariant}
          buttonWidth={style.buttonWidth}
        />
      </AccordionContainer>

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
                console.log("AccordionWithContent", { content, style })
              }
            />
          </InspectorFooter>
        }
      >
        <AccordionWithContentPropsForm
          content={content}
          onContentChange={setContent}
          contentDefaults={toEditorContent(accordionData)}
          style={style}
          onStyleChange={setStyle}
        />
      </Drawer>
    </div>
  );
}
