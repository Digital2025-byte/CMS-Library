"use client";

import { useState } from "react";
import CarouselImageText6 from "@/app/cmsComponents/CarouselImageText6";
import CarouselImageText6Container from "@/app/cmsComponents/CarouselImageText6/components/CarouselImageText6Container";
import CarouselImageText6PropsForm from "@/app/cmsComponents/CarouselImageText6/docs/CarouselImageText6PropsForm";
import Drawer, { useDrawer } from "@/components/ui/Drawer";

export default function CarouselImageText6Examples({
  ctx,
  name = "CarouselImageText6",
}) {
  const { lang, dir, carouselImageText6Data } = ctx;
  const drawer = useDrawer();
  const [flags, setFlags] = useState({
    showTitle: true,
    showArrows: true,
    showDots: true,
  });

  const toggle = (key) => {
    setFlags((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <div>
      <CarouselImageText6Container lang={lang} dir={dir}>
        <CarouselImageText6
          lang={lang}
          data={carouselImageText6Data}
          showTitle={flags.showTitle}
          showArrows={flags.showArrows}
          showDots={flags.showDots}
        />
      </CarouselImageText6Container>

      <Drawer
        isOpen={drawer.isOpen}
        onClose={drawer.close}
        onOpen={drawer.open}
        triggerRef={drawer.triggerRef}
        panelRef={drawer.panelRef}
        titleId={drawer.titleId}
        title={name}
      >
        <CarouselImageText6PropsForm flags={flags} toggle={toggle} />
      </Drawer>
    </div>
  );
}
