import { typography } from "@/styles/typography";

export default function TabbedCardsTabs({ tabs, activeTabIndex, onTabChange }) {
  const visibleTabs = tabs.filter((tab) => tab?.label);

  if (!visibleTabs.length) {
    return null;
  }

  return (
    <div className="mb-6 flex justify-center">
      <div
        role="tablist"
        className="cursor-pointer grid rounded-lg bg-200/50 px-3 py-1.5"
        style={{
          gridTemplateColumns: `repeat(${visibleTabs.length}, minmax(7.5rem, 1fr))`,
        }}
      >
        {tabs.map((tab, index) =>
          tab?.label ? (
            <button
              key={`${tab.label}-${index}`}
              type="button"
              role="tab"
              aria-selected={activeTabIndex === index}
              onClick={() => onTabChange(index)}
              className={`${typography.button} cursor-pointer  rounded-lg px-10 py-2 text-center font-semibold whitespace-nowrap transition-colors ${
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
