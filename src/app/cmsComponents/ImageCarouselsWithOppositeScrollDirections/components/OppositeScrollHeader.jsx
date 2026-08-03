import { typography } from "@/styles/typography";

export default function OppositeScrollHeader({ title, description }) {
  if (!title && !description) {
    return null;
  }

  return (
    <div className="mb-8 flex flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-12">
      {title ? (
        <h2 className={`${typography.sectionTitle} font-bold text-white`}>
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className={`${typography.sectionDescription} mt-1 font-normal text-white`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
