import { typography } from "@/styles/typography";

export default function LegalCardInfo({ title, description, className = "" }) {
  if (!title && !description) {
    return null;
  }

  return (
    <div
      className={`rounded-xl border border-200 bg-gradient-to-br from-100 via-50 to-secondary-100 p-6 md:p-8 ${className}`}
    >
      {title ? (
        <h3
          className={`${typography.itemTitle} mb-2 font-medium text-primary-1`}
        >
          {title}
        </h3>
      ) : null}
      {description ? (
        <p className={`${typography.body} leading-relaxed text-700`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
