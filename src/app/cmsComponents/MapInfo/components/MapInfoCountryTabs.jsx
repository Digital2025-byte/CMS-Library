import { typography } from "@/styles/typography";

export default function MapInfoCountryTabs({
  countries,
  selectedCountry,
  onCountryChange,
}) {
  if (!Array.isArray(countries) || countries.length === 0) {
    return null;
  }

  return (
    <div className="mb-6 flex flex-wrap gap-3 px-2">
      {countries.map((country) => {
        const isActive = selectedCountry === country;

        return (
          <button
            key={country}
            type="button"
            onClick={() => onCountryChange(country)}
            className={`${typography.button} rounded-lg px-5 py-2 font-medium transition-all ${
              isActive
                ? "bg-primary-1 text-white"
                : "border border-primary-1 bg-white text-primary-1 hover:bg-primary-1/5"
            }`}
          >
            {country}
          </button>
        );
      })}
    </div>
  );
}
