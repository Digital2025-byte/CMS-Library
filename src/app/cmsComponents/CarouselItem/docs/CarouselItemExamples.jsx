"use client";

import { useState } from "react";
import CarouselItem from "@/app/cmsComponents/CarouselItem";
import CarouselItemContainer from "@/app/cmsComponents/CarouselItem/components/CarouselItemContainer";
import Drawer, { useDrawer } from "@/components/ui/Drawer";
import LayoutPropsForm from "@/components/demo/LayoutPropsForm";

const CONTROLS = [
  {
    key: "showTitle",
    label: "showTitle",
    hint: "Section title above the carousel",
  },
  {
    key: "showArrows",
    label: "showArrows",
    hint: "Previous / next arrow controls",
  },
  {
    key: "showDots",
    label: "showDots",
    hint: "Pagination dots",
  },
];

export default function CarouselItemExamples({
  ctx,
  name = "CarouselItem",
}) {
  const { lang, dir, carouselItemData } = ctx;
  const drawer = useDrawer();
  const [flags, setFlags] = useState({
    showTitle: true,
    showArrows: true,
    showDots: true,
  });
  const toggle = (key) =>
    setFlags((current) => ({ ...current, [key]: !current[key] }));

  return (
    <div>
      <CarouselItemContainer lang={lang} dir={dir}>
        <CarouselItem
          lang={lang}
          data={carouselItemData}
          posParams="gb"
          showTitle={flags.showTitle}
          showArrows={flags.showArrows}
          showDots={flags.showDots}
        />
      </CarouselItemContainer>
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
