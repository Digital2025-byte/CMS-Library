import { typography } from "@/styles/typography";
import { getThemeColorCss } from "@/styles/themeColors";
import { DEFAULT_GRID_INFO_STYLE } from "../utils/style";

export default function GridInfoCityFilter({
  cities,
  selectedCity,
  onCityChange,
  chipColor = DEFAULT_GRID_INFO_STYLE.chipColor,
  chipActiveText = DEFAULT_GRID_INFO_STYLE.chipActiveText,
  chipIdleBg = DEFAULT_GRID_INFO_STYLE.chipIdleBg,
}) {
  if (!Array.isArray(cities) || cities.length <= 1) {
    return null;
  }

  const brandCss = getThemeColorCss(chipColor, "primary-1");
  const activeTextCss = getThemeColorCss(chipActiveText, "white");
  const idleBgCss = getThemeColorCss(chipIdleBg, "white");

  return (
    <div className="mb-6 flex flex-wrap gap-3">
      {cities.map((city) => {
        const isActive = selectedCity === city;

        return (
          <button
            key={city}
            type="button"
            onClick={() => onCityChange(city)}
            className={`${typography.button} rounded-lg border px-5 py-2 font-medium`}
            style={
              isActive
                ? {
                    backgroundColor: brandCss,
                    borderColor: brandCss,
                    color: activeTextCss,
                  }
                : {
                    backgroundColor: idleBgCss,
                    borderColor: brandCss,
                    color: brandCss,
                  }
            }
          >
            <span>{city}</span>
          </button>
        );
      })}
    </div>
  );
}
