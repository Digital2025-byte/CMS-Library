import { accordionTypography } from "./typography";

export default function AccordionHeader({ title, description }) {
  if (!title && !description) {
    return null;
  }

  return (
    <div className="mb-5 sm:mb-7 lg:mb-8">
      {title && (
        <h2
          className={`${accordionTypography.sectionTitle} font-semibold leading-tight tracking-tight text-primary-1 sm:leading-snug`}
        >
          {title}
        </h2>
      )}
      {description ? (
        <p
          className={`${accordionTypography.sectionDescription} mt-2 max-w-2xl leading-relaxed text-gray-600`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
