import { typography } from "@/styles/typography";

export default function MapInfoHeader({ title, description }) {
  if (!title && !description) {
    return null;
  }

  return (
    <div className="p-2 pt-4">
      {title ? (
        <h2 className={`${typography.sectionTitle} font-bold text-main`}>
          {title}
        </h2>
      ) : null}
      {description ? (
        <p
          className={`${typography.sectionDescription} mb-3 mt-2 px-0.5 text-main`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
