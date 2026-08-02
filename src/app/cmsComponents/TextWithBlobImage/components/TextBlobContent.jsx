import { typography } from "@/styles/typography";

export default function TextBlobContent({ title, description }) {
  if (!title && !description) {
    return null;
  }

  return (
    <div className="lg:max-w-lg xl:max-w-xl">
      {title ? (
        <h2
          className={`${typography.sectionTitle} font-semibold leading-snug text-primary-1`}
        >
          {title}
        </h2>
      ) : null}
      {description ? (
        <p
          className={`${typography.sectionDescription} mt-4 leading-relaxed text-700`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
