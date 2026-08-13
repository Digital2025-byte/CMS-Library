import { typography } from "@/styles/typography";

export default function TabbedCardsHeader({ title, subtitle }) {
  if (!title && !subtitle) {
    return null;
  }

  return (
    <div className="mb-5 flex flex-col items-center justify-center text-center">
      <div className="max-w-2xl">
        {title ? (
          <h2
            className={`${typography.sectionTitle} font-semibold text-primary-1`}
          >
            {title}
          </h2>
        ) : null}
        {subtitle ? (
          <p
            className={`${typography.sectionDescription} mt-2 text-primary-1`}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
