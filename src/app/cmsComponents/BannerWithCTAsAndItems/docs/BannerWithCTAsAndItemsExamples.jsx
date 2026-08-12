"use client";

import { useState } from "react";
import BannerWithCTAsAndItems from "@/app/cmsComponents/BannerWithCTAsAndItems";
import BannerWithCTAsAndItemsContainer from "@/app/cmsComponents/BannerWithCTAsAndItems/components/BannerWithCTAsAndItemsContainer";
import Drawer, { useDrawer } from "@/components/ui/Drawer";
import LayoutPropsForm from "@/components/demo/LayoutPropsForm";

const CONTROLS = [
  {
    key: "showTitleDescription",
    label: "showTitleDescription",
    hint: "Title and description",
  },
  {
    key: "showItems",
    label: "showItems",
    hint: "Feature items list block",
  },
  {
    key: "showPrimaryButton",
    label: "showPrimaryButton",
    hint: "Primary CTA",
  },
  {
    key: "showSecondaryButton",
    label: "showSecondaryButton",
    hint: "Secondary CTA",
  },
];

export default function BannerWithCTAsAndItemsExamples({
  ctx,
  name = "BannerWithCTAsAndItems",
}) {
  const { lang, dir, bannerWithCTAsAndItemsData } = ctx;
  const drawer = useDrawer();
  const [flags, setFlags] = useState({
    showTitleDescription: true,
    showItems: true,
    showPrimaryButton: true,
    showSecondaryButton: true,
  });
  const toggle = (key) =>
    setFlags((current) => ({ ...current, [key]: !current[key] }));

  return (
    <div>
      <BannerWithCTAsAndItemsContainer lang={lang} dir={dir}>
        <BannerWithCTAsAndItems
          lang={lang}
          data={bannerWithCTAsAndItemsData}
          posParams="gb"
          showTitleDescription={flags.showTitleDescription}
          showItems={flags.showItems}
          showPrimaryButton={flags.showPrimaryButton}
          showSecondaryButton={flags.showSecondaryButton}
        />
      </BannerWithCTAsAndItemsContainer>
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
