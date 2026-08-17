"use client";

import { useEffect, useState } from "react";
import Slider from "@/app/cmsComponents/Slider";
import SliderContainer from "@/app/cmsComponents/Slider/components/SliderContainer";
import SliderPropsForm from "@/app/cmsComponents/Slider/docs/SliderPropsForm";
import {
  getSliderContent,
  wrapSliderContent,
} from "@/app/cmsComponents/Slider/utils/helpers";
import { DEFAULT_SLIDER_STYLE } from "@/app/cmsComponents/Slider/utils/style";
import {
  InspectorFooter,
  InspectorSubmitButton,
  resolveEditorLink,
} from "@/components/inspector";
import Drawer, { useDrawer } from "@/components/ui/Drawer";

function toEditorContent(data, lang) {
  const { slides } = getSliderContent(data, lang);

  return {
    slides: slides.map((slide) => {
      const link = resolveEditorLink(slide.ctaHref);

      return {
        id: slide.id,
        title: slide.title,
        subtitle: slide.subtitle,
        description: slide.description,
        imageUrl: slide.image,
        videoUrl: slide.video,
        imageAlt: slide.alt,
        buttonText: slide.buttonText,
        buttonHref: link.href,
        buttonLinkType: link.type,
      };
    }),
  };
}

export default function SliderExamples({ ctx, name = "Slider" }) {
  const { lang, sliderData } = ctx;
  const drawer = useDrawer();
  const [style, setStyle] = useState(DEFAULT_SLIDER_STYLE);
  const [content, setContent] = useState(() =>
    toEditorContent(sliderData, lang)
  );

  useEffect(() => {
    setContent(toEditorContent(sliderData, lang));
  }, [sliderData, lang]);

  return (
    <div>
      <SliderContainer lang={lang}>
        <Slider
          lang={lang}
          data={wrapSliderContent(content, lang)}
          posParams="gb"
          theme={style.theme}
          imageOverlay={{
            enabled: style.overlayEnabled,
            color: style.overlayColor,
            fromOpacity: Number(style.overlayFromOpacity),
            viaOpacity: Number(style.overlayViaOpacity),
            to: "transparent",
            direction: style.overlayDirection,
          }}
          settings={{
            autoplay: style.autoplay,
            autoplaySpeed: Number(style.autoplaySpeed),
            fade: style.fade,
            infinite: style.infinite,
            speed: Number(style.speed),
            pauseOnHover: style.pauseOnHover,
          }}
          showSlideText={style.showSlideText}
          showButton={style.showButton}
          showArrows={style.showArrows}
          showProgress={style.showProgress}
          titleAlign={style.titleAlign}
          titleColor={style.titleColor}
          subtitleColor={style.subtitleColor}
          descriptionColor={style.descriptionColor}
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
        footer={
          <InspectorFooter>
            <InspectorSubmitButton
              onClick={() => console.log("Slider", { content, style })}
            />
          </InspectorFooter>
        }
      >
        <SliderPropsForm
          content={content}
          onContentChange={setContent}
          contentDefaults={toEditorContent(sliderData, lang)}
          style={style}
          onStyleChange={setStyle}
        />
      </Drawer>
    </div>
  );
}
