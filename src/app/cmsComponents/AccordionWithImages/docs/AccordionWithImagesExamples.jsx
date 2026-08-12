"use client";

import { useState } from "react";
import AccordionWithImages from "@/app/cmsComponents/AccordionWithImages";
import AccordionImagesContainer from "@/app/cmsComponents/AccordionWithImages/components/AccordionImagesContainer";
import AccordionWithImagesPropsForm from "@/app/cmsComponents/AccordionWithImages/docs/AccordionWithImagesPropsForm";
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

  const toggle = (key) => {
    setFlags((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <div>
      <AccordionImagesContainer lang={lang} dir={dir}>
        <AccordionWithImages
          data={accordionWithImagesData}
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
      >
        <AccordionWithImagesPropsForm flags={flags} toggle={toggle} />
      </Drawer>
    </div>
  );
}
