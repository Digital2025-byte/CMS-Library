"use client";

import { useState } from "react";
import RelatedContentCarousel from "@/app/cmsComponents/RelatedContentCarousel";
import RelatedContentCarouselContainer from "@/app/cmsComponents/RelatedContentCarousel/components/RelatedContentCarouselContainer";
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

export default function RelatedContentCarouselExamples({
  ctx,
  name = "RelatedContentCarousel",
}) {
  const { lang, dir, relatedContentCarouselData } = ctx;
  const drawer = useDrawer();
  const [flags, setFlags] = useState({
    showTitleDescription: true,
    showArrows: true,
  });
  const toggle = (key) =>
    setFlags((current) => ({ ...current, [key]: !current[key] }));

  return (
    <div>
      <RelatedContentCarouselContainer lang={lang} dir={dir}>
        <RelatedContentCarousel
          lang={lang}
          data={relatedContentCarouselData}
          posParams="gb"
          showTitleDescription={flags.showTitleDescription}
          showArrows={flags.showArrows}
        />
      </RelatedContentCarouselContainer>
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
