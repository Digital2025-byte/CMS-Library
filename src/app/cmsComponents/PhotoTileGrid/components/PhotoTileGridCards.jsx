import CustomCard from "@/components/ui/CustomCard";
import {
  CARD_GAP_CLASS,
  CARD_RADIUS_CLASS,
  DEFAULT_PHOTO_TILE_GRID_STYLE,
} from "../utils/style";

export default function PhotoTileGridCards({
  lang = "en",
  destinations = [],
  cId,
  showCardImage = DEFAULT_PHOTO_TILE_GRID_STYLE.showCardImage,
  showCity = DEFAULT_PHOTO_TILE_GRID_STYLE.showCity,
  showIata = DEFAULT_PHOTO_TILE_GRID_STYLE.showIata,
  showCountry = DEFAULT_PHOTO_TILE_GRID_STYLE.showCountry,
  showOverlay = DEFAULT_PHOTO_TILE_GRID_STYLE.showOverlay,
  showHoverDim = DEFAULT_PHOTO_TILE_GRID_STYLE.showHoverDim,
  showButton = DEFAULT_PHOTO_TILE_GRID_STYLE.showButton,
  cardRadius = DEFAULT_PHOTO_TILE_GRID_STYLE.cardRadius,
  cardGap = DEFAULT_PHOTO_TILE_GRID_STYLE.cardGap,
  cityColor = DEFAULT_PHOTO_TILE_GRID_STYLE.cityColor,
  countryColor = DEFAULT_PHOTO_TILE_GRID_STYLE.countryColor,
  overlayColor = DEFAULT_PHOTO_TILE_GRID_STYLE.overlayColor,
  buttonBg = DEFAULT_PHOTO_TILE_GRID_STYLE.buttonBg,
  buttonText = DEFAULT_PHOTO_TILE_GRID_STYLE.buttonText,
}) {
  if (!destinations.length) {
    return null;
  }

  const gapClass = CARD_GAP_CLASS[cardGap] ?? CARD_GAP_CLASS.default;
  const radiusClass =
    CARD_RADIUS_CLASS[cardRadius] ?? CARD_RADIUS_CLASS.lg;

  return (
    <div className={`mt-4 grid w-full grid-cols-1 py-4 sm:grid-cols-2 lg:grid-cols-3 ${gapClass}`}>
      {destinations.map((card) => (
        <CustomCard
          key={`${card.cityName}-${card.iataCode}-${card.imageUrl}`}
          ImageUrl={card.imageUrl}
          IATACode={card.iataCode}
          CityName={card.cityName}
          CountryName={card.countryName}
          TakeUrl={card.takeATripUrl}
          discoverLabel={card.discoverLabel}
          imageAlt={card.imageAlt}
          lang={lang}
          cId={cId}
          showImage={showCardImage}
          showCity={showCity}
          showIata={showIata}
          showCountry={showCountry}
          showButton={showButton}
          gradient={showOverlay}
          showHoverDim={showHoverDim}
          cardRadiusClass={`${radiusClass} shadow-lg`}
          cityColor={cityColor}
          countryColor={countryColor}
          overlayColor={overlayColor}
          buttonBg={buttonBg}
          buttonText={buttonText}
        />
      ))}
    </div>
  );
}
