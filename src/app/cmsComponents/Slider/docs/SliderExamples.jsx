"use client";

import { useState } from "react";
import Slider from "@/app/cmsComponents/Slider";
import SliderContainer from "@/app/cmsComponents/Slider/components/SliderContainer";
import SliderPropsForm from "@/app/cmsComponents/Slider/docs/SliderPropsForm";
import Drawer, { useDrawer } from "@/components/ui/Drawer";

const DEMO_SETTINGS = {
  autoplay: true,
  autoplaySpeed: 5000,
  fade: false,
  infinite: true,
  speed: 700,
  pauseOnHover: true,
};

const DEMO_OVERLAY = {
  color: "main",
  fromOpacity: 0.7,
  viaOpacity: 0.2,
  to: "transparent",
  direction: "to bottom",
};

export default function SliderExamples({ ctx, name = "Slider" }) {
  const { lang, sliderData } = ctx;
  const drawer = useDrawer();
  const [flags, setFlags] = useState({
    showSlideText: true,
    showButton: true,
    showArrows: true,
    showProgress: true,
  });

  const toggle = (key) => {
    setFlags((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <div>
      <SliderContainer lang={lang}>
        <Slider
          lang={lang}
          data={sliderData}
          posParams="gb"
          theme="secondary-2"
          imageOverlay={DEMO_OVERLAY}
          settings={DEMO_SETTINGS}
          showSlideText={flags.showSlideText}
          showButton={flags.showButton}
          showArrows={flags.showArrows}
          showProgress={flags.showProgress}
        />
      </SliderContainer>

      <Drawer
        isOpen={drawer.isOpen}
        onClose={drawer.close}
        onOpen={drawer.open}
        triggerRef={drawer.triggerRef}
        panelRef={drawer.panelRef}
        titleId={drawer.titleId}
        title={name}
      >
        <SliderPropsForm flags={flags} toggle={toggle} />
      </Drawer>
    </div>
  );
}
