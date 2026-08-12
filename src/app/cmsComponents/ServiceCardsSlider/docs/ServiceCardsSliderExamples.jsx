"use client";

import { useState } from "react";
import ServiceCardsSlider from "@/app/cmsComponents/ServiceCardsSlider";
import ServiceCardsSliderContainer from "@/app/cmsComponents/ServiceCardsSlider/components/ServiceCardsSliderContainer";
import Drawer, { useDrawer } from "@/components/ui/Drawer";
import LayoutPropsForm from "@/components/demo/LayoutPropsForm";

const CONTROLS = [
  {
    key: "showTitleDescription",
    label: "showTitleDescription",
    hint: "Section title and description",
  },
];

export default function ServiceCardsSliderExamples({
  ctx,
  name = "ServiceCardsSlider",
}) {
  const { lang, dir, serviceCardsSliderData } = ctx;
  const drawer = useDrawer();
  const [flags, setFlags] = useState({ showTitleDescription: true });
  const toggle = (key) =>
    setFlags((current) => ({ ...current, [key]: !current[key] }));

  return (
    <div>
      <ServiceCardsSliderContainer lang={lang} dir={dir}>
        <ServiceCardsSlider
          lang={lang}
          data={serviceCardsSliderData}
          posParams="gb"
          showTitleDescription={flags.showTitleDescription}
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
      >
        <LayoutPropsForm
          legend={`${name} props`}
          controls={CONTROLS}
          flags={flags}
          toggle={toggle}
        />
      </Drawer>
    </div>
  );
}
