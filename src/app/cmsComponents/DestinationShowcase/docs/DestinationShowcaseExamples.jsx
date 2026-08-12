"use client";

import { useState } from "react";
import DestinationShowcase from "@/app/cmsComponents/DestinationShowcase";
import DestinationShowcaseContainer from "@/app/cmsComponents/DestinationShowcase/components/DestinationShowcaseContainer";
import DestinationShowcasePropsForm from "@/app/cmsComponents/DestinationShowcase/docs/DestinationShowcasePropsForm";
import Drawer, { useDrawer } from "@/components/ui/Drawer";

export default function DestinationShowcaseExamples({
  ctx,
  name = "DestinationShowcase",
}) {
  const { lang, dir, destinationShowcaseData } = ctx;
  const drawer = useDrawer();
  const [flags, setFlags] = useState({
    showTitleDescription: true,
    showViewAll: true,
    showButton: true,
    showSliderArrows: true,
  });

  const toggle = (key) => {
    setFlags((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <div>
      <DestinationShowcaseContainer lang={lang} dir={dir}>
        <DestinationShowcase
          lang={lang}
          data={destinationShowcaseData}
          posParams="gb"
          showTitleDescription={flags.showTitleDescription}
          showViewAll={flags.showViewAll}
          showButton={flags.showButton}
          showSliderArrows={flags.showSliderArrows}
        />
      </DestinationShowcaseContainer>

      <Drawer
        isOpen={drawer.isOpen}
        onClose={drawer.close}
        onOpen={drawer.open}
        triggerRef={drawer.triggerRef}
        panelRef={drawer.panelRef}
        titleId={drawer.titleId}
        title={name}
      >
        <DestinationShowcasePropsForm flags={flags} toggle={toggle} />
      </Drawer>
    </div>
  );
}
