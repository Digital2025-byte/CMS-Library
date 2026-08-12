"use client";

import { useState } from "react";
import CardsCarouselFillImage from "@/app/cmsComponents/CardsCarouselFillImage";
import CardsCarouselFillImageContainer from "@/app/cmsComponents/CardsCarouselFillImage/components/CardsCarouselFillImageContainer";
import Drawer, { useDrawer } from "@/components/ui/Drawer";
import LayoutPropsForm from "@/components/demo/LayoutPropsForm";

const CONTROLS = [
  {
    key: "showTitleDescription",
    label: "showTitleDescription",
    hint: "Section title and description",
  },
  {
    key: "showArrows",
    label: "showArrows",
    hint: "Previous / next arrow controls",
  },
];

export default function CardsCarouselFillImageExamples({
  ctx,
  name = "CardsCarouselFillImage",
}) {
  const { lang, dir, cardsCarouselFillImageData } = ctx;
  const drawer = useDrawer();
  const [flags, setFlags] = useState({
    showTitleDescription: true,
    showArrows: true,
  });
  const toggle = (key) =>
    setFlags((current) => ({ ...current, [key]: !current[key] }));

  return (
    <div>
      <CardsCarouselFillImageContainer lang={lang} dir={dir}>
        <CardsCarouselFillImage
          lang={lang}
          data={cardsCarouselFillImageData}
          posParams="gb"
          showTitleDescription={flags.showTitleDescription}
          showArrows={flags.showArrows}
        />
      </CardsCarouselFillImageContainer>
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
