import { typography } from "@/styles/typography";

export default function GridInfoHeader({ title, description }) {
  if (!title && !description) {
    return null;
  }

  return (
    <div className="mb-4">
      {title ? (
        <h2
          className={`${typography.sectionTitle} mb-4 font-bold text-primary-1`}
        >
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className={`${typography.sectionDescription} text-primary-1`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
