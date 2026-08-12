"use client";

import { useState } from "react";
import HeaderWithCityInfo from "@/app/cmsComponents/HeaderWithCityInfo";
import HeaderWithCityInfoContainer from "@/app/cmsComponents/HeaderWithCityInfo/components/HeaderWithCityInfoContainer";
import Drawer, { useDrawer } from "@/components/ui/Drawer";
import LayoutPropsForm from "@/components/demo/LayoutPropsForm";

const CONTROLS = [
  {
    key: "showTitleDescription",
    label: "showTitleDescription",
    hint: "City title and country name",
  },
  {
    key: "showCityCard",
    label: "showCityCard",
    hint: "City info card panel",
  },
];

export default function HeaderWithCityInfoExamples({
  ctx,
  name = "HeaderWithCityInfo",
}) {
  const { lang, dir, headerWithCityInfoData } = ctx;
  const drawer = useDrawer();
  const [flags, setFlags] = useState({
    showTitleDescription: true,
    showCityCard: true,
  });
  const toggle = (key) =>
    setFlags((current) => ({ ...current, [key]: !current[key] }));

  return (
    <div>
      <HeaderWithCityInfoContainer lang={lang} dir={dir}>
        <HeaderWithCityInfo
          lang={lang}
          data={headerWithCityInfoData}
          showTitleDescription={flags.showTitleDescription}
          showCityCard={flags.showCityCard}
        />
      </HeaderWithCityInfoContainer>
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
