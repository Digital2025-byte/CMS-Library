export default function MapInfoOfficeTabs({
  offices,
  selectedOfficeIndex,
  onOfficeChange,
}) {
  if (!Array.isArray(offices) || offices.length <= 1) {
    return null;
  }

  return (
    <div className="mx-auto mb-6 max-w-7xl px-2">
      <div className="-mb-px border-b border-gray-200">
        <div className="flex flex-wrap gap-6">
          {offices.map((office, index) => {
            const isActive = selectedOfficeIndex === index;
            const label =
              office.name || `${office.city} - Branch ${index + 1}`;

            return (
              <button
                key={`${office.id || office.name || index}-${index}`}
                type="button"
                onClick={() => onOfficeChange(index)}
                className={`cursor-pointer py-2 text-xs font-medium transition-colors md:text-sm ${
                  isActive
                    ? "border-b-2 border-main text-primary-1"
                    : "border-b-2 border-transparent text-muted hover:text-primary-1"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
