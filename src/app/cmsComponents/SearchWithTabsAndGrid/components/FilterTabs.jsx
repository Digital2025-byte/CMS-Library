import { getIconByName } from "@/constants/Icons";
import { typography } from "@/styles/typography";

export default function FilterTabs({
  filterNames = [],
  filterIconMap = {},
  activeFilter,
  onFilterChange,
  allLabel = "All",
}) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Sight filters">
      {filterNames.map((name) => {
        const active = activeFilter === name;
        const IconComponent =
          name !== "All" ? getIconByName(filterIconMap[name]) : null;
        const label = name === "All" || name === allLabel ? allLabel : name;

        return (
          <button
            key={name}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onFilterChange(name)}
            className={`${typography.caption} flex items-center gap-2 rounded-xl border px-4 py-2 transition ${
              active
                ? "border-white bg-white text-main"
                : "border-white/20 bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {IconComponent ? (
              <IconComponent size={18} weight="regular" aria-hidden />
            ) : null}
            {label}
          </button>
        );
      })}
    </div>
  );
}
