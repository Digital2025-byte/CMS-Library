"use client";

import { useState } from "react";
import DualImageText from "@/app/cmsComponents/DualImageText";
import DualImageTextContainer from "@/app/cmsComponents/DualImageText/components/DualImageTextContainer";
import DualImageTextPropsForm from "@/app/cmsComponents/DualImageText/docs/DualImageTextPropsForm";
import Drawer, { useDrawer } from "@/components/ui/Drawer";

const DEFAULT_EXTRA_POSITIONS = [
  { bottom: -50, start: 0, horizontal: 60 },
  { bottom: -50, end: 0, horizontal: -60 },
];

export default function DualImageTextExamples({ ctx }) {
  const { lang, dir } = ctx;
  const drawer = useDrawer();
  const [flags, setFlags] = useState({
    underlineFirstWord: false,
    blueLayer: false,
    animate: false,
    showExploreButton: false,
    showFirstSection: false,
    showExtraImage: false,
    offsetExtraImage: false,
  });
  const [useTrainingData, setUseTrainingData] = useState(false);
  const [bgColor, setBgColor] = useState("bg-100");

  const toggle = (key) => {
    setFlags((current) => {
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

  const data = useTrainingData
    ? ctx.dualImageTrainingData
    : ctx.dualImageTextData;

  return (
    <div>
      <DualImageTextContainer lang={lang} dir={dir}>
        <DualImageText
          lang={lang}
          data={data}
          blueLayer={flags.blueLayer}
          animate={flags.animate}
          showExploreButton={flags.showExploreButton}
          showFirstSection={flags.showFirstSection}
          underlineFirstWord={flags.underlineFirstWord}
          showExtraImage={flags.showExtraImage}
          bgColor={bgColor}
          extraImagePositions={
            flags.offsetExtraImage ? DEFAULT_EXTRA_POSITIONS : undefined
          }
        />
      </DualImageTextContainer>

      <Drawer
        isOpen={drawer.isOpen}
        onClose={drawer.close}
        onOpen={drawer.open}
        triggerRef={drawer.triggerRef}
        panelRef={drawer.panelRef}
        titleId={drawer.titleId}
        title="Props"
      >
        <DualImageTextPropsForm
          flags={flags}
          toggle={toggle}
          useTrainingData={useTrainingData}
          setUseTrainingData={setUseTrainingData}
          bgColor={bgColor}
          setBgColor={setBgColor}
        />
      </Drawer>
    </div>
  );
}
