import { getIconByName } from "@/constants/Icons";
import { getThemeColorCss } from "@/styles/themeColors";
import { typography } from "@/styles/typography";
import { DEFAULT_SEARCH_GRID_STYLE } from "../utils/style";

export default function FilterTabs({
  filterNames = [],
  filterIconMap = {},
  activeFilter,
  onFilterChange,
  allLabel = "All",
  chipColor = DEFAULT_SEARCH_GRID_STYLE.chipColor,
  chipActiveText = DEFAULT_SEARCH_GRID_STYLE.chipActiveText,
}) {
  const chipCss = getThemeColorCss(chipColor, "white");
  const activeTextCss = getThemeColorCss(chipActiveText, "main");

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
            className={`${typography.caption} flex items-center gap-2 rounded-xl border px-4 py-2 transition`}
            style={
              active
                ? {
                    backgroundColor: chipCss,
                    borderColor: chipCss,
                    color: activeTextCss,
                  }
                : {
                    backgroundColor: `color-mix(in srgb, ${chipCss} 10%, transparent)`,
                    borderColor: `color-mix(in srgb, ${chipCss} 20%, transparent)`,
                    color: chipCss,
                  }
            }
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
