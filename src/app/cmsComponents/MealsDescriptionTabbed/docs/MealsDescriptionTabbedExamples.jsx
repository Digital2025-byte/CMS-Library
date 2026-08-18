"use client";

import { useEffect, useState } from "react";
import MealsDescriptionTabbed from "@/app/cmsComponents/MealsDescriptionTabbed";
import MealsDescriptionTabbedContainer from "@/app/cmsComponents/MealsDescriptionTabbed/components/MealsDescriptionTabbedContainer";
import MealsDescriptionTabbedPropsForm from "@/app/cmsComponents/MealsDescriptionTabbed/docs/MealsDescriptionTabbedPropsForm";
import {
  getMealsDescriptionTabbedEditorContent,
  wrapMealsDescriptionTabbedContent,
} from "@/app/cmsComponents/MealsDescriptionTabbed/utils/helpers";
import { DEFAULT_MEALS_TABBED_STYLE } from "@/app/cmsComponents/MealsDescriptionTabbed/utils/style";
import {
  InspectorFooter,
  InspectorSubmitButton,
} from "@/components/inspector";
import Drawer, { useDrawer } from "@/components/ui/Drawer";

function toEditorContent(data, lang) {
  return getMealsDescriptionTabbedEditorContent(data, lang);
}

export default function MealsDescriptionTabbedExamples({
  ctx,
  name = "MealsDescriptionTabbed",
}) {
  const { lang, dir, mealsDescriptionTabbedData } = ctx;
  const drawer = useDrawer();
  const [style, setStyle] = useState(DEFAULT_MEALS_TABBED_STYLE);
  const [content, setContent] = useState(() =>
    toEditorContent(mealsDescriptionTabbedData, lang)
  );

  useEffect(() => {
    setContent(toEditorContent(mealsDescriptionTabbedData, lang));
  }, [mealsDescriptionTabbedData, lang]);

  return (
    <div>
      <MealsDescriptionTabbedContainer lang={lang} dir={dir}>
        <MealsDescriptionTabbed
          lang={lang}
          data={wrapMealsDescriptionTabbedContent(content, lang)}
          showTitle={style.showTitle}
          showTabs={style.showTabs}
          showImage={style.showImage}
          showNotes={style.showNotes}
          showSectionBg={style.showSectionBg}
          showItemTitle={style.showItemTitle}
          showItemDescription={style.showItemDescription}
          sectionBg={style.sectionBg}
          sectionPadding={style.sectionPadding}
          titleAlign={style.titleAlign}
          titleColor={style.titleColor}
          tabActive={style.tabActive}
          tabIdle={style.tabIdle}
          tabBorder={style.tabBorder}
          accordionRadius={style.accordionRadius}
          headerBg={style.headerBg}
          headerText={style.headerText}
          bodyBg={style.bodyBg}
          groupTitleColor={style.groupTitleColor}
          itemTitleColor={style.itemTitleColor}
          groupItemTitleColor={style.groupItemTitleColor}
          itemBodyColor={style.itemBodyColor}
          itemBg={style.itemBg}
          stripeColor={style.stripeColor}
          notesColor={style.notesColor}
          imageRadius={style.imageRadius}
        />
      </MealsDescriptionTabbedContainer>

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
                console.log("MealsDescriptionTabbed", { content, style })
              }
            />
          </InspectorFooter>
        }
      >
        <MealsDescriptionTabbedPropsForm
          content={content}
          onContentChange={setContent}
          contentDefaults={toEditorContent(mealsDescriptionTabbedData, lang)}
          style={style}
          onStyleChange={setStyle}
        />
      </Drawer>
    </div>
  );
}
