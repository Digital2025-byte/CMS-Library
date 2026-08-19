"use client";

import { useEffect, useState } from "react";
import { ThreeDImageRingSection } from "@/app/cmsComponents/ThreeDImageRingSection";
import ThreeDImageRingPropsForm from "@/app/cmsComponents/ThreeDImageRingSection/docs/ThreeDImageRingPropsForm";
import {
  getThreeDImageRingEditorContent,
  wrapThreeDImageRingContent,
} from "@/app/cmsComponents/ThreeDImageRingSection/utils/helpers";
import { DEFAULT_THREE_D_IMAGE_RING_STYLE } from "@/app/cmsComponents/ThreeDImageRingSection/utils/style";
import { InspectorFooter, InspectorSubmitButton } from "@/components/inspector";
import Drawer, { useDrawer } from "@/components/ui/Drawer";

function toEditorContent(data, lang) {
  return getThreeDImageRingEditorContent(data, lang);
}

export default function ThreeDImageRingSectionExamples({
  ctx,
  name = "ThreeDImageRingSection",
}) {
  const { lang, dir, threeDImageRingSectionData } = ctx;
  const drawer = useDrawer();
  const [style, setStyle] = useState(DEFAULT_THREE_D_IMAGE_RING_STYLE);
  const [content, setContent] = useState(() =>
    toEditorContent(threeDImageRingSectionData, lang)
  );

  useEffect(() => {
    setContent(toEditorContent(threeDImageRingSectionData, lang));
  }, [threeDImageRingSectionData, lang]);

  return (
    <div>
      <ThreeDImageRingSection
        lang={lang}
        dir={dir}
        data={wrapThreeDImageRingContent(content, lang)}
        style={style}
      />

      <Drawer
        isOpen={drawer.isOpen}
        onClose={drawer.close}
        onOpen={drawer.open}
        triggerRef={drawer.triggerRef}
        panelRef={drawer.panelRef}
        titleId={drawer.titleId}
        title={name}
        footer={
          <InspectorFooter>
            <InspectorSubmitButton
              onClick={() =>
                console.log("ThreeDImageRingSection", { content, style })
              }
            />
          </InspectorFooter>
        }
      >
        <ThreeDImageRingPropsForm
          content={content}
          onContentChange={setContent}
          contentDefaults={toEditorContent(threeDImageRingSectionData, lang)}
          style={style}
          onStyleChange={setStyle}
        />
      </Drawer>
    </div>
  );
}
