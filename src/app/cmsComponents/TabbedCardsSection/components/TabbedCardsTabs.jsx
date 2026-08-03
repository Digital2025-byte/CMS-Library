import { typography } from "@/styles/typography";

export default function TabbedCardsTabs({ tabs, activeTabIndex, onTabChange }) {
  const visibleTabs = tabs.filter((tab) => tab?.label);

  if (!visibleTabs.length) {
    return null;
  }

  return (
    <div className="mb-6 flex justify-center">
      <div className="inline-flex rounded-2xl bg-surface-2 p-2.5">
        {tabs.map((tab, index) =>
          tab?.label ? (
            <button
              key={`${tab.label}-${index}`}
              type="button"
              onClick={() => onTabChange(index)}
              className={`${typography.button} rounded-lg px-6 py-2.5 font-medium transition-colors ${
                activeTabIndex === index
                  ? "bg-primary-1 text-white"
                  : "bg-transparent text-primary-1"
              }`}
            >
              {tab.label}
            </button>
          ) : null
        )}
      </div>
    </div>
  );
}
