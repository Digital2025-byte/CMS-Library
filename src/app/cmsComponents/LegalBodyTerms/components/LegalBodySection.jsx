import { typography } from "@/styles/typography";
import { isLimitationSection } from "../utils/helpers";
import LegalAlert from "./LegalAlert";
import LegalCardInfo from "./LegalCardInfo";

export default function LegalBodySection({ section, limitationTitle }) {
  if (!section) {
    return null;
  }

  const items = Array.isArray(section.items) ? section.items : [];
  const useAlerts = isLimitationSection(section, limitationTitle);

  return (
    <div className="space-y-3">
      <div className="space-y-2">
        {section.title ? (
          <h3 className={`${typography.itemTitle} font-semibold text-primary-1`}>
            {section.title}
          </h3>
        ) : null}
        {section.intro ? (
          <p className={`${typography.body} leading-relaxed text-700`}>
            {section.intro}
          </p>
        ) : null}
      </div>

      {useAlerts ? (
        <div className="space-y-4">
          {items.map((item, index) => (
            <LegalAlert
              key={item.title || index}
              message={item.description}
              variant="secondary"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 md:gap-4">
          {items.map((item, index) => (
            <LegalCardInfo
              key={item.title || index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      )}
    </div>
  );
}
