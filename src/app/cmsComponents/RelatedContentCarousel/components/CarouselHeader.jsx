import { typography } from "@/styles/typography";

export default function CarouselHeader({ title, description }) {
  if (!title && !description) {
    return null;
  }

  return (
    <div className="mb-5 sm:mb-6 md:mb-8">
      {title ? (
        <h2
          className={`${typography.sectionTitle} font-semibold text-primary-1`}
        >
          {title}
        </h2>
      ) : null}
      {description ? (
        <p
          className={`${typography.sectionDescription} mt-2 max-w-4xl text-700`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
