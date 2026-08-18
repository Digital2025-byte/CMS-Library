"use client";

import { useEffect, useState } from "react";
import SimpleGridWithPrefix from "@/app/cmsComponents/SimpleGridWithPrefix";
import SimpleGridContainer from "@/app/cmsComponents/SimpleGridWithPrefix/components/SimpleGridContainer";
import SimpleGridWithPrefixPropsForm from "@/app/cmsComponents/SimpleGridWithPrefix/docs/SimpleGridWithPrefixPropsForm";
import {
  getSimpleGridWithPrefixEditorContent,
  wrapSimpleGridWithPrefixContent,
} from "@/app/cmsComponents/SimpleGridWithPrefix/utils/helpers";
import { DEFAULT_SIMPLE_GRID_STYLE } from "@/app/cmsComponents/SimpleGridWithPrefix/utils/style";
import {
  InspectorFooter,
  InspectorSubmitButton,
} from "@/components/inspector";
import Drawer, { useDrawer } from "@/components/ui/Drawer";

function toEditorContent(data, lang) {
  return getSimpleGridWithPrefixEditorContent(data, lang);
}

export default function SimpleGridWithPrefixExamples({
  ctx,
  name = "SimpleGridWithPrefix",
}) {
  const { lang, dir, simpleGridWithPrefixData } = ctx;
  const drawer = useDrawer();
  const [style, setStyle] = useState(DEFAULT_SIMPLE_GRID_STYLE);
  const [content, setContent] = useState(() =>
    toEditorContent(simpleGridWithPrefixData, lang)
  );

  useEffect(() => {
    setContent(toEditorContent(simpleGridWithPrefixData, lang));
  }, [simpleGridWithPrefixData, lang]);

  return (
    <div>
      <SimpleGridContainer
        lang={lang}
        dir={dir}
        background={style.sectionBg}
        showBackground={style.showSectionBg}
        padding={style.sectionPadding}
      >
        <SimpleGridWithPrefix
          lang={lang}
          data={wrapSimpleGridWithPrefixContent(content, lang)}
          showTitle={style.showTitle}
          showDescription={style.showDescription}
          showIcon={style.showIcon}
          showPrefix={style.showPrefix}
          showChip={style.showChip}
          showUserName={style.showUserName}
          showArrow={style.showArrow}
          showCardBg={style.showCardBg}
          titleAlign={style.titleAlign}
          titleColor={style.titleColor}
          descriptionColor={style.descriptionColor}
          cardRadius={style.cardRadius}
          cardGap={style.cardGap}
          cardBg={style.cardBg}
          nameColor={style.nameColor}
          chipBg={style.chipBg}
          chipText={style.chipText}
          userNameColor={style.userNameColor}
          arrowColor={style.arrowColor}
        />
      </SimpleGridContainer>

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
                console.log("SimpleGridWithPrefix", { content, style })
              }
            />
          </InspectorFooter>
        }
      >
        <SimpleGridWithPrefixPropsForm
          content={content}
          onContentChange={setContent}
          contentDefaults={toEditorContent(simpleGridWithPrefixData, lang)}
          style={style}
          onStyleChange={setStyle}
        />
      </Drawer>
    </div>
  );
}
