import { typography } from "@/styles/typography";

export default function SearchFields({
  namePlaceholder = "",
  cityPlaceholder = "",
  searchName,
  onSearchNameChange,
  searchCity,
  onSearchCityChange,
}) {
  const inputClassName = `${typography.body} flex-1 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40`;

  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row">
      <input
        value={searchName}
        onChange={(event) => onSearchNameChange(event.target.value)}
        placeholder={namePlaceholder}
        className={inputClassName}
        aria-label={namePlaceholder}
      />
      <input
        value={searchCity}
        onChange={(event) => onSearchCityChange(event.target.value)}
        placeholder={cityPlaceholder}
        className={inputClassName}
        aria-label={cityPlaceholder}
      />
    </div>
  );
}
