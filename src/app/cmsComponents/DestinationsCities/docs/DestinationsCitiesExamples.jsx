"use client";

import { useEffect, useState } from "react";
import DestinationsCities from "@/app/cmsComponents/DestinationsCities";
import DestinationsCitiesContainer from "@/app/cmsComponents/DestinationsCities/components/DestinationsCitiesContainer";
import DestinationsCitiesPropsForm from "@/app/cmsComponents/DestinationsCities/docs/DestinationsCitiesPropsForm";
import {
  getDestinationsCitiesEditorContent,
  wrapDestinationsCitiesContent,
} from "@/app/cmsComponents/DestinationsCities/utils/helpers";
import { DEFAULT_DESTINATIONS_CITIES_STYLE } from "@/app/cmsComponents/DestinationsCities/utils/style";
import {
  InspectorFooter,
  InspectorSubmitButton,
} from "@/components/inspector";
import Drawer, { useDrawer } from "@/components/ui/Drawer";

function toEditorContent(data, lang) {
  return getDestinationsCitiesEditorContent(data, lang);
}

export default function DestinationsCitiesExamples({
  ctx,
  name = "DestinationsCities",
}) {
  const { lang, dir, destinationsCitiesData } = ctx;
  const drawer = useDrawer();
  const [style, setStyle] = useState(DEFAULT_DESTINATIONS_CITIES_STYLE);
  const [content, setContent] = useState(() =>
    toEditorContent(destinationsCitiesData, lang)
  );

  useEffect(() => {
    setContent(toEditorContent(destinationsCitiesData, lang));
  }, [destinationsCitiesData, lang]);

  return (
    <div>
      <DestinationsCitiesContainer lang={lang} dir={dir}>
        <DestinationsCities
          lang={lang}
          data={wrapDestinationsCitiesContent(content, lang)}
          posParams="gb"
          showTitle={style.showTitle}
          showDescription={style.showDescription}
          showSectionBg={style.showSectionBg}
          showCardImage={style.showCardImage}
          showCity={style.showCity}
          showOrigin={style.showOrigin}
          showNew={style.showNew}
          showFlights={style.showFlights}
          showDuration={style.showDuration}
          showCardDescription={style.showCardDescription}
          showPanel={style.showPanel}
          showInactiveDim={style.showInactiveDim}
          showButton={style.showButton}
          sectionBg={style.sectionBg}
          sectionPadding={style.sectionPadding}
          titleAlign={style.titleAlign}
          titleColor={style.titleColor}
          descriptionColor={style.descriptionColor}
          cardRadius={style.cardRadius}
          cityColor={style.cityColor}
          originColor={style.originColor}
          originBg={style.originBg}
          metaColor={style.metaColor}
          bodyColor={style.bodyColor}
          panelBg={style.panelBg}
          overlayColor={style.overlayColor}
          buttonBg={style.buttonBg}
          buttonText={style.buttonText}
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
        footer={
          <InspectorFooter>
            <InspectorSubmitButton
              onClick={() =>
                console.log("DestinationsCities", { content, style })
              }
            />
          </InspectorFooter>
        }
      >
        <DestinationsCitiesPropsForm
          content={content}
          onContentChange={setContent}
          contentDefaults={toEditorContent(destinationsCitiesData, lang)}
          style={style}
          onStyleChange={setStyle}
        />
      </Drawer>
    </div>
  );
}
