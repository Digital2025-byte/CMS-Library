"use client";

import { useEffect, useState } from "react";
import SearchWithTabsAndGrid from "@/app/cmsComponents/SearchWithTabsAndGrid";
import SearchWithTabsAndGridPropsForm from "@/app/cmsComponents/SearchWithTabsAndGrid/docs/SearchWithTabsAndGridPropsForm";
import {
  getSearchWithTabsAndGridEditorContent,
  wrapSearchWithTabsAndGridContent,
} from "@/app/cmsComponents/SearchWithTabsAndGrid/utils/helpers";
import { DEFAULT_SEARCH_GRID_STYLE } from "@/app/cmsComponents/SearchWithTabsAndGrid/utils/style";
import {
  InspectorFooter,
  InspectorSubmitButton,
} from "@/components/inspector";
import Drawer, { useDrawer } from "@/components/ui/Drawer";

function toEditorContent(data, lang) {
  return getSearchWithTabsAndGridEditorContent(data, lang);
}

export default function SearchWithTabsAndGridExamples({
  ctx,
  name = "SearchWithTabsAndGrid",
}) {
  const { lang, searchWithTabsAndGridData } = ctx;
  const drawer = useDrawer();
  const [style, setStyle] = useState(DEFAULT_SEARCH_GRID_STYLE);
  const [content, setContent] = useState(() =>
    toEditorContent(searchWithTabsAndGridData, lang)
  );

  useEffect(() => {
    setContent(toEditorContent(searchWithTabsAndGridData, lang));
  }, [searchWithTabsAndGridData, lang]);

  return (
    <div>
      <SearchWithTabsAndGrid
        lang={lang}
        data={wrapSearchWithTabsAndGridContent(content, lang)}
        posParams="gb"
        showTitle={style.showTitle}
        showSearch={style.showSearch}
        showTabs={style.showTabs}
        showSectionBg={style.showSectionBg}
        showCardImage={style.showCardImage}
        showCity={style.showCity}
        showName={style.showName}
        showTag={style.showTag}
        showOverlay={style.showOverlay}
        showButtons={style.showButtons}
        showArrows={style.showArrows}
        showDots={style.showDots}
        sectionBg={style.sectionBg}
        sectionPadding={style.sectionPadding}
        titleAlign={style.titleAlign}
        titleColor={style.titleColor}
        searchBg={style.searchBg}
        searchText={style.searchText}
        chipColor={style.chipColor}
        chipActiveText={style.chipActiveText}
        cardRadius={style.cardRadius}
        overlayColor={style.overlayColor}
        cityColor={style.cityColor}
        nameColor={style.nameColor}
        tagColor={style.tagColor}
        primaryBg={style.primaryBg}
        primaryText={style.primaryText}
        secondaryText={style.secondaryText}
        navColor={style.navColor}
        dotColor={style.dotColor}
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
                console.log("SearchWithTabsAndGrid", { content, style })
              }
            />
          </InspectorFooter>
        }
      >
        <SearchWithTabsAndGridPropsForm
          content={content}
          onContentChange={setContent}
          contentDefaults={toEditorContent(searchWithTabsAndGridData, lang)}
          style={style}
          onStyleChange={setStyle}
        />
      </Drawer>
    </div>
  );
}
