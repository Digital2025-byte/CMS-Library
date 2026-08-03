import { typography } from "@/styles/typography";

export default function GridInfoCityFilter({
  cities,
  selectedCity,
  onCityChange,
}) {
  if (!Array.isArray(cities) || cities.length <= 1) {
    return null;
  }

  return (
    <div className="mb-6 flex flex-wrap gap-3 px-2.5">
      {cities.map((city) => {
        const isActive = selectedCity === city;

        return (
          <button
            key={city}
            type="button"
            onClick={() => onCityChange(city)}
            className={`${typography.button} rounded-lg border px-5 py-2 font-medium ${
              isActive
                ? "border-primary-1 bg-primary-1 text-white"
                : "border-primary-1 bg-white text-primary-1 hover:bg-primary-1/5"
            }`}
          >
            <span>{city}</span>
          </button>
        );
      })}
    </div>
  );
}
