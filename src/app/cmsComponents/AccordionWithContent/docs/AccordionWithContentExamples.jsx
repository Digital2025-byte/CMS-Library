"use client";

import { useState } from "react";
import AccordionWithContent from "@/app/cmsComponents/AccordionWithContent";
import AccordionContainer from "@/app/cmsComponents/AccordionWithContent/container/AccordionContainer";
import AccordionWithContentPropsForm from "@/app/cmsComponents/AccordionWithContent/docs/AccordionWithContentPropsForm";
import Drawer, { useDrawer } from "@/components/ui/Drawer";

export default function AccordionWithContentExamples({
  ctx,
  name = "AccordionWithContent",
}) {
  const { lang, dir, accordionData } = ctx;
  const drawer = useDrawer();
  const [flags, setFlags] = useState({
    showTitleDescription: true,
    showButton: true,
  });
  const [buttonPosition, setButtonPosition] = useState("center");

  const toggle = (key) => {
    setFlags((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <div>
      <AccordionContainer lang={lang} dir={dir}>
        <AccordionWithContent
          data={accordionData}
          showTitleDescription={flags.showTitleDescription}
          showButton={flags.showButton}
          buttonPosition={buttonPosition}
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
      >
        <AccordionWithContentPropsForm
          flags={flags}
          toggle={toggle}
          buttonPosition={buttonPosition}
          setButtonPosition={setButtonPosition}
        />
      </Drawer>
    </div>
  );
}
