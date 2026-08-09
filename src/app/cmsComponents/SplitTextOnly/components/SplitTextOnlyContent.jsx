import { typography } from "@/styles/typography";

export default function SplitTextOnlyContent({ title, description }) {
  if (!title && !description) {
    return null;
  }

  return (
    <div className="p-2">
      {title ? (
        <h1
          className={`${typography.sectionTitle} font-semibold text-secondary-100`}
        >
          {title}
        </h1>
      ) : null}

      {description ? (
        <p
          className={`${typography.sectionDescription} mt-2 p-1 leading-relaxed text-secondary-100`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
