"use client";

import PhotoTileGridPanel from "./components/PhotoTileGridPanel";
import { getPhotoTileGridContent } from "./utils/helpers";
import { DEFAULT_PHOTO_TILE_GRID_STYLE } from "./utils/style";

const PhotoTileGrid = ({
  lang = "en",
  data,
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
}) => {
  const { title, destinations, hasContent } = getPhotoTileGridContent(
    data,
    lang
  );

  if (!hasContent) {
    return null;
  }

  return (
    <PhotoTileGridPanel
      lang={lang}
      title={title}
      destinations={destinations}
      cId={cId}
      showTitle={showTitle}
      showSectionBg={showSectionBg}
      showCardImage={showCardImage}
      showCity={showCity}
      showIata={showIata}
      showCountry={showCountry}
      showOverlay={showOverlay}
      showHoverDim={showHoverDim}
      showButton={showButton}
      sectionBg={sectionBg}
      sectionPadding={sectionPadding}
      titleAlign={titleAlign}
      titleColor={titleColor}
      cardRadius={cardRadius}
      cardGap={cardGap}
      cityColor={cityColor}
      countryColor={countryColor}
      overlayColor={overlayColor}
      buttonBg={buttonBg}
      buttonText={buttonText}
    />
  );
};

export default PhotoTileGrid;
