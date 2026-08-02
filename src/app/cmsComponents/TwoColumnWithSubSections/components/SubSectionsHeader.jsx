import { typography } from "@/styles/typography";

export default function SubSectionsHeader({ sectionLabel, title, description }) {
  return (
    <div className="space-y-3 sm:space-y-4">
      {sectionLabel ? (
        <p className={`${typography.caption} font-medium text-secondary-2`}>
          {sectionLabel}
        </p>
      ) : null}

      {title ? (
        <h2
          className={`${typography.sectionTitle} font-medium italic  text-primary-1`}
        >
          {title}
        </h2>
      ) : null}

      {description ? (
        <p
          className={`${typography.sectionDescription} font-normal  text-muted`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
