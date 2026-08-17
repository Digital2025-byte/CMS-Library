import SliderTrack from "./SliderTrack";

export default function SliderPanel({
  lang = "en",
  posParams = "gb",
  cId,
  slides = [],
  settings = {},
  showArrows = true,
  showSlideText = true,
  showButton = true,
  theme,
  imageOverlay,
  titleAlign = "left",
  titleColor = "white",
  subtitleColor = "white",
  descriptionColor = "white",
}) {
  return (
    <section className="relative w-full overflow-hidden leading-none" dir="ltr">
      <SliderTrack
        slides={slides}
        settings={settings}
        lang={lang}
        posParams={posParams}
        cId={cId}
        sliderKey={`${lang}-${settings.fade}-${settings.infinite}-${settings.speed}-${settings.autoplay}`}
        showArrows={showArrows}
        showSlideText={showSlideText}
        showButton={showButton}
        theme={theme}
        imageOverlay={imageOverlay}
        titleAlign={titleAlign}
        titleColor={titleColor}
        subtitleColor={subtitleColor}
        descriptionColor={descriptionColor}
      />
    </section>
  );
}
