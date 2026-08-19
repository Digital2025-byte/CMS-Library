"use client";

import { useState } from "react";
import { DualImageTextSection } from "@/app/cmsComponents/DualImageText";
import DualImageTextPropsForm from "@/app/cmsComponents/DualImageText/docs/DualImageTextPropsForm";
import { DEFAULT_DUAL_IMAGE_TEXT_STYLE } from "@/app/cmsComponents/DualImageText/utils/style";
import Drawer, { useDrawer } from "@/components/ui/Drawer";

const OFFSET_EXTRA_POSITIONS = [
  { bottom: -50, start: 0, horizontal: 60 },
  { bottom: -50, end: 0, horizontal: -60 },
];

export default function DualImageTextExamples({
  ctx,
  name = "DualImageText",
  variant = "towards",
}) {
  const { lang, dir } = ctx;
  const drawer = useDrawer();
  const [style, setStyle] = useState({
    ...DEFAULT_DUAL_IMAGE_TEXT_STYLE,
    offsetExtraImage: false,
  });

  const toggle = (key) => {
    setStyle((current) => {
      const next = { ...current, [key]: !current[key] };
      if (key === "showExtraImage" && !next.showExtraImage) {
        next.offsetExtraImage = false;
      }
      if (key === "offsetExtraImage" && next.offsetExtraImage) {
        next.showExtraImage = true;
      }
      return next;
    });
  };

  const data =
    variant === "training" ? ctx.dualImageTrainingData : ctx.dualImageTextData;

  return (
    <div>
      <DualImageTextSection
        lang={lang}
        dir={dir}
        data={data}
        style={style}
        extraImagePositions={
          style.offsetExtraImage ? OFFSET_EXTRA_POSITIONS : undefined
        }
      />

      <Drawer
        isOpen={drawer.isOpen}
        onClose={drawer.close}
        onOpen={drawer.open}
        triggerRef={drawer.triggerRef}
        panelRef={drawer.panelRef}
        titleId={drawer.titleId}
        title={name}
      >
        <DualImageTextPropsForm
          flags={style}
          toggle={toggle}
          bgColor={style.bgColor}
          setBgColor={(bgColor) => setStyle((current) => ({ ...current, bgColor }))}
        />
      </Drawer>
    </div>
  );
}
