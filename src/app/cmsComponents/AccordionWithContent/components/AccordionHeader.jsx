import { typography } from "@/styles/typography";

export default function AccordionHeader({ title, description }) {
  if (!title && !description) {
    return null;
  }

  return (
    <div className="mb-5 sm:mb-7 lg:mb-8">
      {title ? (
        <h2
          className={`${typography.sectionTitle} font-semibold leading-snug text-primary-1`}
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
