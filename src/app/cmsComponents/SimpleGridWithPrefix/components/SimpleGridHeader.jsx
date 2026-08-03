import { typography } from "@/styles/typography";

export default function SimpleGridHeader({ title, description }) {
  if (!title && !description) {
    return null;
  }

  return (
    <div className="mb-4">
      {title ? (
        <h2
          className={`${typography.sectionTitle} mb-2 font-bold text-primary-1`}
        >
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className={`${typography.sectionDescription} px-1 text-primary-1`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
