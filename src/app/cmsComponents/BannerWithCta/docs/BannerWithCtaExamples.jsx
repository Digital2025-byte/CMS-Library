"use client";

import { useState } from "react";
import BannerWithCta from "@/app/cmsComponents/BannerWithCta";
import BannerWithCtaContainer from "@/app/cmsComponents/BannerWithCta/components/BannerWithCtaContainer";
import Drawer, { useDrawer } from "@/components/ui/Drawer";
import LayoutPropsForm from "@/components/demo/LayoutPropsForm";

const CONTROLS = [
  {
    key: "showTitleDescription",
    label: "showTitleDescription",
    hint: "Title and description",
  },
  {
    key: "showButton",
    label: "showButton",
    hint: "CTA button",
  },
];

export default function BannerWithCtaExamples({
  ctx,
  name = "BannerWithCta",
}) {
  const { lang, dir, bannerWithCtaData } = ctx;
  const drawer = useDrawer();
  const [flags, setFlags] = useState({
    showTitleDescription: true,
    showButton: true,
  });
  const toggle = (key) =>
    setFlags((current) => ({ ...current, [key]: !current[key] }));

  return (
    <div>
      <BannerWithCtaContainer lang={lang} dir={dir}>
        <BannerWithCta
          lang={lang}
          data={bannerWithCtaData}
          posParams="gb"
          showTitleDescription={flags.showTitleDescription}
          showButton={flags.showButton}
        />
      </BannerWithCtaContainer>
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
