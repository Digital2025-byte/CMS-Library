import FlightFareCard from "./FlightFareCard";
import { getImageIndexForPosition } from "../utils/helpers";

export default function FlightFaresMobileSlider({ cities, lang }) {
  if (!Array.isArray(cities) || cities.length === 0) {
    return null;
  }

  return (
    <div className="md:hidden">
      <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 sm:-mx-6 sm:px-6 scrollbar-none [&::-webkit-scrollbar]:hidden">
        {cities.map((item, index) => (
          <div
            key={`${item.cityId || item.cityName}-${index}`}
            className="flex items-center justify-center"
          >
            <FlightFareCard
              lang={lang}
              item={item}
              imageIndex={getImageIndexForPosition(cities, index)}
              className="h-82.5 w-[78vw] max-w-85 shrink-0 snap-start"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
