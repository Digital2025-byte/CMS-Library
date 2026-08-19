"use client";

import { useEffect, useState } from "react";
import { Draggable3DImageRingSection } from "@/app/cmsComponents/Draggable3DImageRing";
import Draggable3DImageRingPropsForm from "@/app/cmsComponents/Draggable3DImageRing/docs/Draggable3DImageRingPropsForm";
import {
  getDraggable3DImageRingEditorContent,
  wrapDraggable3DImageRingContent,
} from "@/app/cmsComponents/Draggable3DImageRing/utils/helpers";
import { DEFAULT_DRAGGABLE_3D_IMAGE_RING_STYLE } from "@/app/cmsComponents/Draggable3DImageRing/utils/style";
import { InspectorFooter, InspectorSubmitButton } from "@/components/inspector";
import Drawer, { useDrawer } from "@/components/ui/Drawer";

function toEditorContent(lang) {
  return getDraggable3DImageRingEditorContent(undefined, lang);
}

export default function Draggable3DImageRingExamples({
  ctx,
  name = "Draggable3DImageRing",
}) {
  const { lang } = ctx;
  const drawer = useDrawer();
  const [style, setStyle] = useState(DEFAULT_DRAGGABLE_3D_IMAGE_RING_STYLE);
  const [content, setContent] = useState(() => toEditorContent(lang));

  useEffect(() => {
    setContent(toEditorContent(lang));
  }, [lang]);

  return (
    <div>
      <Draggable3DImageRingSection
        lang={lang}
        data={wrapDraggable3DImageRingContent(content, lang)}
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
                console.log("Draggable3DImageRing", { content, style })
              }
            />
          </InspectorFooter>
        }
      >
        <Draggable3DImageRingPropsForm
          content={content}
          onContentChange={setContent}
          contentDefaults={toEditorContent(lang)}
          style={style}
          onStyleChange={setStyle}
        />
      </Drawer>
    </div>
  );
}
