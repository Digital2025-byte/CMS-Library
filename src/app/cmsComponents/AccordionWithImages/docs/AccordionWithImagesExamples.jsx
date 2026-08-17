"use client";

import { useEffect, useState } from "react";
import AccordionWithImages from "@/app/cmsComponents/AccordionWithImages";
import AccordionImagesContainer from "@/app/cmsComponents/AccordionWithImages/components/AccordionImagesContainer";
import AccordionWithImagesPropsForm from "@/app/cmsComponents/AccordionWithImages/docs/AccordionWithImagesPropsForm";
import {
  getAccordionImagesEditorContent,
  wrapAccordionImagesContent,
} from "@/app/cmsComponents/AccordionWithImages/utils/helpers";
import { InspectorFooter, InspectorSubmitButton } from "@/components/inspector";
import Drawer, { useDrawer } from "@/components/ui/Drawer";

export default function AccordionWithImagesExamples({
  ctx,
  name = "AccordionWithImages",
}) {
  const { lang, dir, accordionWithImagesData } = ctx;
  const drawer = useDrawer();
  const [flags, setFlags] = useState({
    showTitleDescription: true,
    showImagePanel: true,
  });
  const [content, setContent] = useState(() =>
    getAccordionImagesEditorContent(accordionWithImagesData)
  );

  useEffect(() => {
    setContent(getAccordionImagesEditorContent(accordionWithImagesData));
  }, [accordionWithImagesData]);

  const toggle = (key) => {
    setFlags((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <div>
      <AccordionImagesContainer lang={lang} dir={dir}>
        <AccordionWithImages
          data={wrapAccordionImagesContent(content)}
          showTitleDescription={flags.showTitleDescription}
          showImagePanel={flags.showImagePanel}
        />
      </AccordionImagesContainer>

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
                console.log("AccordionWithImages", {
                  content,
                  style: {
                    showTitleDescription: flags.showTitleDescription,
                    showImagePanel: flags.showImagePanel,
                  },
                })
              }
            />
          </InspectorFooter>
        }
      >
        <AccordionWithImagesPropsForm
          content={content}
          onContentChange={setContent}
          flags={flags}
          toggle={toggle}
        />
      </Drawer>
    </div>
  );
}
