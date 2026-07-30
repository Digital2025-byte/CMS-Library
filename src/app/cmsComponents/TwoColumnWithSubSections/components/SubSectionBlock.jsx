import { typography } from "@/styles/typography";

export default function SubSectionBlock({ title, description }) {
  if (!title && !description) {
    return null;
  }

  return (
    <div className="flex-1">
      {title ? (
        <h3
          className={`${typography.itemTitle} mb-3 font-medium text-ink`}
        >
          {title}
        </h3>
      ) : null}
      {description ? (
        <p
          className={`${typography.itemDescription} leading-6 text-muted`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
