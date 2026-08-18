import PageContentContainer from "@/components/layout/PageContentContainer";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  DEFAULT_PHOTO_TILE_GRID_STYLE,
  SECTION_PADDING_CLASS,
} from "../utils/style";
import PhotoTileGridCards from "./PhotoTileGridCards";
import PhotoTileGridHeader from "./PhotoTileGridHeader";

export default function PhotoTileGridPanel({
  lang = "en",
  title,
  destinations,
  cId,
  showTitle = DEFAULT_PHOTO_TILE_GRID_STYLE.showTitle,
  showSectionBg = DEFAULT_PHOTO_TILE_GRID_STYLE.showSectionBg,
  showCardImage = DEFAULT_PHOTO_TILE_GRID_STYLE.showCardImage,
  showCity = DEFAULT_PHOTO_TILE_GRID_STYLE.showCity,
  showIata = DEFAULT_PHOTO_TILE_GRID_STYLE.showIata,
  showCountry = DEFAULT_PHOTO_TILE_GRID_STYLE.showCountry,
  showOverlay = DEFAULT_PHOTO_TILE_GRID_STYLE.showOverlay,
  showHoverDim = DEFAULT_PHOTO_TILE_GRID_STYLE.showHoverDim,
  showButton = DEFAULT_PHOTO_TILE_GRID_STYLE.showButton,
  sectionBg = DEFAULT_PHOTO_TILE_GRID_STYLE.sectionBg,
  sectionPadding = DEFAULT_PHOTO_TILE_GRID_STYLE.sectionPadding,
  titleAlign = DEFAULT_PHOTO_TILE_GRID_STYLE.titleAlign,
  titleColor = DEFAULT_PHOTO_TILE_GRID_STYLE.titleColor,
  cardRadius = DEFAULT_PHOTO_TILE_GRID_STYLE.cardRadius,
  cardGap = DEFAULT_PHOTO_TILE_GRID_STYLE.cardGap,
  cityColor = DEFAULT_PHOTO_TILE_GRID_STYLE.cityColor,
  countryColor = DEFAULT_PHOTO_TILE_GRID_STYLE.countryColor,
  overlayColor = DEFAULT_PHOTO_TILE_GRID_STYLE.overlayColor,
  buttonBg = DEFAULT_PHOTO_TILE_GRID_STYLE.buttonBg,
  buttonText = DEFAULT_PHOTO_TILE_GRID_STYLE.buttonText,
}) {
  const paddingClass =
    SECTION_PADDING_CLASS[sectionPadding] ?? SECTION_PADDING_CLASS.default;

  return (
    <section
      className={`flex flex-col items-center justify-center ${paddingClass}`}
      style={
        showSectionBg
          ? { backgroundColor: getThemeColorCss(sectionBg, "primary-800") }
          : undefined
      }
    >
      <PageContentContainer>
        <PhotoTileGridHeader
          lang={lang}
          title={title}
          showTitle={showTitle}
          titleAlign={titleAlign}
          titleColor={titleColor}
        />
        <PhotoTileGridCards
          lang={lang}
          destinations={destinations}
          cId={cId}
          showCardImage={showCardImage}
          showCity={showCity}
          showIata={showIata}
          showCountry={showCountry}
          showOverlay={showOverlay}
          showHoverDim={showHoverDim}
          showButton={showButton}
          cardRadius={cardRadius}
          cardGap={cardGap}
          cityColor={cityColor}
          countryColor={countryColor}
          overlayColor={overlayColor}
          buttonBg={buttonBg}
          buttonText={buttonText}
        />
      </PageContentContainer>
    </section>
  );
}
