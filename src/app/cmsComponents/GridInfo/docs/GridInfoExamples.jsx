"use client";

import { useEffect, useState } from "react";
import GridInfo from "@/app/cmsComponents/GridInfo";
import GridInfoContainer from "@/app/cmsComponents/GridInfo/components/GridInfoContainer";
import GridInfoPropsForm from "@/app/cmsComponents/GridInfo/docs/GridInfoPropsForm";
import {
  getGridInfoEditorContent,
  wrapGridInfoContent,
} from "@/app/cmsComponents/GridInfo/utils/helpers";
import { DEFAULT_GRID_INFO_STYLE } from "@/app/cmsComponents/GridInfo/utils/style";
import {
  InspectorFooter,
  InspectorSubmitButton,
} from "@/components/inspector";
import Drawer, { useDrawer } from "@/components/ui/Drawer";

function toEditorContent(data, lang) {
  return getGridInfoEditorContent(data, lang);
}

export default function GridInfoExamples({ ctx, name = "GridInfo" }) {
  const { lang, dir, gridInfoData } = ctx;
  const drawer = useDrawer();
  const [style, setStyle] = useState(DEFAULT_GRID_INFO_STYLE);
  const [content, setContent] = useState(() =>
    toEditorContent(gridInfoData, lang)
  );

  useEffect(() => {
    setContent(toEditorContent(gridInfoData, lang));
  }, [gridInfoData, lang]);

  return (
    <div>
      <GridInfoContainer
        lang={lang}
        dir={dir}
        background={style.sectionBg}
        showBackground={style.showSectionBg}
        padding={style.sectionPadding}
      >
        <GridInfo
          lang={lang}
          data={wrapGridInfoContent(content, lang)}
          showTitle={style.showTitle}
          showDescription={style.showDescription}
          showFilter={style.showFilter}
          showName={style.showName}
          showAddress={style.showAddress}
          showPhone={style.showPhone}
          showEmail={style.showEmail}
          showHours={style.showHours}
          showCardBg={style.showCardBg}
          titleAlign={style.titleAlign}
          titleColor={style.titleColor}
          descriptionColor={style.descriptionColor}
          chipColor={style.chipColor}
          chipActiveText={style.chipActiveText}
          chipIdleBg={style.chipIdleBg}
          cardRadius={style.cardRadius}
          cardGap={style.cardGap}
          cardBg={style.cardBg}
          nameColor={style.nameColor}
          bodyColor={style.bodyColor}
          iconColor={style.iconColor}
        />
      </GridInfoContainer>

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
              onClick={() => console.log("GridInfo", { content, style })}
            />
          </InspectorFooter>
        }
      >
        <GridInfoPropsForm
          content={content}
          onContentChange={setContent}
          contentDefaults={toEditorContent(gridInfoData, lang)}
          style={style}
          onStyleChange={setStyle}
        />
      </Drawer>
    </div>
  );
}
