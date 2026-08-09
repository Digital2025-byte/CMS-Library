import SliderTrack from "./SliderTrack";

export default function SliderPanel({
  lang = "en",
  posParams = "gb",
  cId,
  slides = [],
  settings = {},
  showArrows = true,
  arrowTheme,
}) {
  return (
    <section className="relative w-full" dir="ltr">
      <SliderTrack
        slides={slides}
        settings={settings}
        lang={lang}
        posParams={posParams}
        cId={cId}
        sliderKey={lang}
        showArrows={showArrows}
        arrowTheme={arrowTheme}
      />
    </section>
  );
}
