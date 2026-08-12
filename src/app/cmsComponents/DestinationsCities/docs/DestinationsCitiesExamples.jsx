"use client";

import { useState } from "react";
import DestinationsCities from "@/app/cmsComponents/DestinationsCities";
import DestinationsCitiesContainer from "@/app/cmsComponents/DestinationsCities/components/DestinationsCitiesContainer";
import Drawer, { useDrawer } from "@/components/ui/Drawer";
import LayoutPropsForm from "@/components/demo/LayoutPropsForm";

const CONTROLS = [
  {
    key: "showTitleDescription",
    label: "showTitleDescription",
    hint: "Section title and description",
  },
];

export default function DestinationsCitiesExamples({
  ctx,
  name = "DestinationsCities",
}) {
  const { lang, dir, destinationsCitiesData } = ctx;
  const drawer = useDrawer();
  const [flags, setFlags] = useState({ showTitleDescription: true });
  const toggle = (key) =>
    setFlags((current) => ({ ...current, [key]: !current[key] }));

  return (
    <div>
      <DestinationsCitiesContainer lang={lang} dir={dir}>
        <DestinationsCities
          lang={lang}
          data={destinationsCitiesData}
          posParams="gb"
          showTitleDescription={flags.showTitleDescription}
        />
      </DestinationsCitiesContainer>
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
