import { typography } from "@/styles/typography";

export default function MealsDescriptionTabs({
  tabs = [],
  activeTabIndex = 0,
  onTabChange,
}) {
  if (!tabs.length) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 border-b border-surface-2">
      {tabs.map((tab, index) => {
        const isActive = index === activeTabIndex;

        return (
          <button
            key={`${tab?.label || "tab"}-${index}`}
            type="button"
            onClick={() => onTabChange?.(index)}
            className={`${typography.button} font-medium -mb-px border-b-2 py-3 transition-colors ${
              isActive
                ? "border-primary-1 font-medium text-primary-1"
                : "border-transparent text-500 hover:text-primary-1"
            }`}
          >
            {tab?.label || `Tab ${index + 1}`}
          </button>
        );
      })}
    </div>
  );
}
