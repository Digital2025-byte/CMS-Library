import SliderTrack from "./SliderTrack";

export default function SliderPanel({
  lang = "en",
  posParams = "gb",
  cId,
  slides = [],
  settings = {},
  showArrows = true,
  theme,
  imageOverlay,
}) {
  return (
    <section className="relative w-full overflow-hidden leading-none" dir="ltr">
      <SliderTrack
        slides={slides}
        settings={settings}
        lang={lang}
        posParams={posParams}
        cId={cId}
        sliderKey={lang}
        showArrows={showArrows}
        theme={theme}
        imageOverlay={imageOverlay}
      />
    </section>
  );
}
