"use client";

import { useEffect, useState } from "react";
import FlightFaresSection from "@/app/cmsComponents/FlightFaresSection";
import FlightFaresContainer from "@/app/cmsComponents/FlightFaresSection/components/FlightFaresContainer";
import FlightFaresSectionPropsForm from "@/app/cmsComponents/FlightFaresSection/docs/FlightFaresSectionPropsForm";
import {
  getFlightFaresEditorContent,
  wrapFlightFaresContent,
} from "@/app/cmsComponents/FlightFaresSection/utils/helpers";
import { DEFAULT_FLIGHT_FARES_STYLE } from "@/app/cmsComponents/FlightFaresSection/utils/style";
import {
  InspectorFooter,
  InspectorSubmitButton,
} from "@/components/inspector";
import Drawer, { useDrawer } from "@/components/ui/Drawer";

function toEditorContent(data, lang) {
  return getFlightFaresEditorContent(data, lang);
}

export default function FlightFaresSectionExamples({
  ctx,
  name = "FlightFaresSection",
}) {
  const { lang, dir, flightFaresData } = ctx;
  const drawer = useDrawer();
  const [style, setStyle] = useState(DEFAULT_FLIGHT_FARES_STYLE);
  const [content, setContent] = useState(() =>
    toEditorContent(flightFaresData, lang)
  );

  useEffect(() => {
    setContent(toEditorContent(flightFaresData, lang));
  }, [flightFaresData, lang]);

  return (
    <div>
      <FlightFaresContainer
        lang={lang}
        dir={dir}
        background={style.sectionBg}
        showBackground={style.showSectionBg}
        padding={style.sectionPadding}
      >
        <FlightFaresSection
          lang={lang}
          data={wrapFlightFaresContent(content, lang)}
          showTitle={style.showTitle}
          showImage={style.showImage}
          showOverlay={style.showOverlay}
          showOneWay={style.showOneWay}
          showNew={style.showNew}
          showCity={style.showCity}
          showPrice={style.showPrice}
          titleAlign={style.titleAlign}
          titleColor={style.titleColor}
          cardRadius={style.cardRadius}
          overlayColor={style.overlayColor}
          cityColor={style.cityColor}
          priceColor={style.priceColor}
          badgeColor={style.badgeColor}
          badgeText={style.badgeText}
        />
      </FlightFaresContainer>

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
                console.log("FlightFaresSection", { content, style })
              }
            />
          </InspectorFooter>
        }
      >
        <FlightFaresSectionPropsForm
          content={content}
          onContentChange={setContent}
          contentDefaults={toEditorContent(flightFaresData, lang)}
          style={style}
          onStyleChange={setStyle}
        />
      </Drawer>
    </div>
  );
}
