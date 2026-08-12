"use client";

import { useState } from "react";
import ImageCarouselsWithOppositeScrollDirections from "@/app/cmsComponents/ImageCarouselsWithOppositeScrollDirections";
import OppositeScrollContainer from "@/app/cmsComponents/ImageCarouselsWithOppositeScrollDirections/components/OppositeScrollContainer";
import OppositeScrollPropsForm from "@/app/cmsComponents/ImageCarouselsWithOppositeScrollDirections/docs/OppositeScrollPropsForm";
import Drawer, { useDrawer } from "@/components/ui/Drawer";

export default function OppositeScrollExamples({
  ctx,
  name = "ImageCarouselsWithOppositeScrollDirections",
}) {
  const { lang, dir, imageCarouselsWithOppositeScrollData } = ctx;
  const drawer = useDrawer();
  const [flags, setFlags] = useState({
    showTitleDescription: true,
    showExploreButton: true,
  });

  const toggle = (key) => {
    setFlags((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <div>
      <OppositeScrollContainer lang={lang} dir={dir}>
        <ImageCarouselsWithOppositeScrollDirections
          lang={lang}
          data={imageCarouselsWithOppositeScrollData}
          showTitleDescription={flags.showTitleDescription}
          showExploreButton={flags.showExploreButton}
        />
      </OppositeScrollContainer>

      <Drawer
        isOpen={drawer.isOpen}
        onClose={drawer.close}
        onOpen={drawer.open}
        triggerRef={drawer.triggerRef}
        panelRef={drawer.panelRef}
        titleId={drawer.titleId}
        title={name}
      >
        <OppositeScrollPropsForm flags={flags} toggle={toggle} />
      </Drawer>
    </div>
  );
}
