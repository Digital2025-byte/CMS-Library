import { typography } from "@/styles/typography";
import { CITY_TABS_LIMIT } from "../utils/helpers";

export default function MapInfoCitySelector({
  cities,
  selectedCity,
  onCityChange,
  cityLabel,
}) {
  if (!Array.isArray(cities) || cities.length <= 1) {
    return null;
  }

  if (cities.length > CITY_TABS_LIMIT) {
    return (
      <div className="mx-auto mb-2 max-w-7xl px-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className={`${typography.caption} font-medium text-muted`}>
            {cityLabel}
          </span>
          <select
            value={selectedCity || ""}
            onChange={(event) => onCityChange(event.target.value)}
            className={`${typography.button} min-w-[220px] rounded-lg border border-gray-200 bg-white px-4 py-2 text-primary-1 focus:outline-none focus:ring-2 focus:ring-primary-1/20`}
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto mb-2 max-w-7xl px-3">
      <div className="-mb-px border-b border-gray-200">
        <div className="flex flex-wrap gap-6">
          {cities.map((city) => {
            const isActive = selectedCity === city;

            return (
              <button
                key={city}
                type="button"
                onClick={() => onCityChange(city)}
                className={`py-2 text-xs font-medium transition-colors md:text-sm ${
                  isActive
                    ? "border-b-2 border-[#054E72] text-primary-1"
                    : "border-b-2 border-transparent text-muted hover:text-primary-1"
                }`}
              >
                {city}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
