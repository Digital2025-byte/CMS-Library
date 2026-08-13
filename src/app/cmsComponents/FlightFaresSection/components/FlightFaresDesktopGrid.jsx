import FlightFareCard from "./FlightFareCard";
import { getImageIndexForPosition } from "../utils/helpers";

const DESKTOP_LAYOUT = [
  { index: 0, size: "SMALL" },
  { index: 2, size: "TALL" },
  { index: 3, size: "WIDE" },
  { index: 1, size: "SMALL" },
  { index: 4, size: "SMALL" },
  { index: 5, size: "SMALL" },
];

export default function FlightFaresDesktopGrid({ cities, lang }) {
  if (!Array.isArray(cities) || cities.length === 0) {
    return null;
  }

  return (
    <div className="hidden min-h-147.5 gap-4 lg:grid lg:auto-rows-42.5 lg:grid-rows-2 lg:grid-cols-[1.4fr_1.7fr_1.1fr_1.1fr]">
      {DESKTOP_LAYOUT.map(({ index, size }) => {
        const item = cities[index];
        if (!item) return null;

        return (
          <FlightFareCard
            key={`${item.cityId || item.cityName}-${index}`}
            lang={lang}
            item={item}
            imageIndex={getImageIndexForPosition(cities, index)}
            size={size}
          />
        );
      })}
    </div>
  );
}
