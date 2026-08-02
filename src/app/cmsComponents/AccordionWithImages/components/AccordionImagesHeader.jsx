import { typography } from "@/styles/typography";

export default function AccordionImagesHeader({ title, description }) {
  if (!title && !description) {
    return null;
  }

  return (
    <div className="mb-5 sm:mb-7 lg:mb-8">
      {title ? (
        <h2
          className={`${typography.sectionTitle} border-b border-200 py-2 font-semibold leading-snug text-primary-1 lg:py-4`}
        >
          {title}
        </h2>
      ) : null}
      {description ? (
        <p
          className={`${typography.sectionDescription} mt-2 max-w-2xl leading-relaxed text-700`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
