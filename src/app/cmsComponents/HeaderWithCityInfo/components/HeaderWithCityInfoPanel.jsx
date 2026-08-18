import CustomBackgroundImage from "@/components/ui/CustomBackgroundImage";
import PageContentContainer from "@/components/layout/PageContentContainer";
import { getThemeColorCss } from "@/styles/themeColors";
import { typography } from "@/styles/typography";
import { isUsableImageSrc } from "../utils/helpers";
import {
  DEFAULT_HEADER_WITH_CITY_INFO_STYLE,
  TITLE_ALIGN_CLASS,
} from "../utils/style";
import CityInfoCard from "./CityInfoCard";

export default function HeaderWithCityInfoPanel({
  lang = "en",
  title,
  countryName,
  weatherTitle,
  description,
  weather,
  localTime,
  duration,
  numberOfFlightPerWeek,
  nextFlight,
  labels,
  backgroundImage,
  imageAlt = "",
  hasCityCard = false,
  showTitle = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.showTitle,
  showDescription = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.showDescription,
  showCityCard = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.showCityCard,
  showHeroImage = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.showHeroImage,
  showOverlay = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.showOverlay,
  showCardHeading = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.showCardHeading,
  showCardDescription = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.showCardDescription,
  showTiles = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.showTiles,
  showNextFlight = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.showNextFlight,
  titleAlign = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.titleAlign,
  titleColor = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.titleColor,
  descriptionColor = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.descriptionColor,
  overlayColor = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.overlayColor,
  cardRadius = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.cardRadius,
  cardHeadingColor = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.cardHeadingColor,
  cardBodyColor = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.cardBodyColor,
  tileLabelColor = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.tileLabelColor,
  tileValueColor = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.tileValueColor,
  nextFlightColor = DEFAULT_HEADER_WITH_CITY_INFO_STYLE.nextFlightColor,
}) {
  const isRtl = lang === "ar";
  const heroSrc =
    showHeroImage && isUsableImageSrc(backgroundImage) ? backgroundImage : "";
  const overlayCss = showOverlay
    ? getThemeColorCss(overlayColor, "main")
    : undefined;
  const alignClass = TITLE_ALIGN_CLASS[titleAlign] ?? TITLE_ALIGN_CLASS.left;
  const showHeading = showTitle && title;
  const showCountry = showDescription && countryName;

  return (
    <CustomBackgroundImage
      imageUrl={heroSrc}
      className="min-h-[75vh]"
      transition={{ duration: 5, ease: "easeInOut" }}
      specialGradient={showOverlay}
      overlayColor={overlayCss}
      lang={lang}
    >
      <section
        className="relative flex min-h-[75vh] w-full items-end"
        dir={isRtl ? "rtl" : "ltr"}
        aria-label={imageAlt || title || undefined}
        style={
          heroSrc
            ? undefined
            : { backgroundColor: getThemeColorCss(overlayColor, "main") }
        }
      >
        <PageContentContainer className="w-full pb-40 pt-20 lg:pb-16 lg:pt-28">
          <div className="flex w-full flex-col justify-between gap-10 md:flex-row md:items-center md:gap-8">
            {showHeading || showCountry ? (
              <div className={`flex max-w-xl flex-col justify-end ${alignClass}`}>
                {showHeading ? (
                  <h1
                    className={`${typography.sectionTitle} font-semibold leading-tight`}
                    style={{
                      color: getThemeColorCss(titleColor, "white"),
                    }}
                  >
                    {title}
                  </h1>
                ) : null}
                {showCountry ? (
                  <p
                    className={`${typography.sectionDescription} mt-2 font-normal`}
                    style={{
                      color: getThemeColorCss(descriptionColor, "white"),
                    }}
                  >
                    {countryName}
                  </p>
                ) : null}
              </div>
            ) : (
              <div className="hidden md:block" />
            )}

            {showCityCard && hasCityCard ? (
              <div className="hidden shrink-0 items-end justify-start md:flex md:justify-end">
                <CityInfoCard
                  lang={lang}
                  weatherTitle={weatherTitle}
                  description={description}
                  weather={weather}
                  localTime={localTime}
                  duration={duration}
                  numberOfFlightPerWeek={numberOfFlightPerWeek}
                  nextFlight={nextFlight}
                  labels={labels}
                  showHeading={showCardHeading}
                  showDescription={showCardDescription}
                  showTiles={showTiles}
                  showNextFlight={showNextFlight}
                  cardRadius={cardRadius}
                  headingColor={cardHeadingColor}
                  bodyColor={cardBodyColor}
                  tileLabelColor={tileLabelColor}
                  tileValueColor={tileValueColor}
                  nextFlightColor={nextFlightColor}
                />
              </div>
            ) : null}
          </div>
        </PageContentContainer>
      </section>
    </CustomBackgroundImage>
  );
}
