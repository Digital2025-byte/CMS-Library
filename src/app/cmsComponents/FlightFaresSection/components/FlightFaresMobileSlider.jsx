import FlightFareCard from "./FlightFareCard";
import { getImageIndexForPosition } from "../utils/helpers";

export default function FlightFaresMobileSlider({ cities, lang, ...cardProps }) {
  if (!Array.isArray(cities) || cities.length === 0) {
    return null;
  }

  return (
    <div className="lg:hidden">
      <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 sm:-mx-6 sm:px-6 scrollbar-none [&::-webkit-scrollbar]:hidden">
        {cities.map((item, index) => (
          <FlightFareCard
            key={`${item.cityId || item.cityName}-${index}`}
            lang={lang}
            item={item}
            imageIndex={getImageIndexForPosition(cities, index)}
            className="h-72 w-[78vw] max-w-80 shrink-0 snap-start sm:h-80 sm:w-[46vw] sm:max-w-none md:h-85 md:w-[42vw]"
            {...cardProps}
          />
        ))}
      </div>
    </div>
  );
}
