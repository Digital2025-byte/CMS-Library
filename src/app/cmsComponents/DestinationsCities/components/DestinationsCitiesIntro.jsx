import { typography } from "@/styles/typography";

export default function DestinationsCitiesIntro({
  title = "",
  description = "",
}) {
  return (
    <div className="w-full max-w-xl text-50 md:max-w-2xl lg:max-w-none lg:pr-4 xl:w-3/4 xl:pr-0">
      {title ? (
        <h2
          className={`${typography.sectionTitle} mt-4 font-semibold whitespace-pre-line`}
        >
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className={`${typography.sectionDescription} mt-6 text-50/80`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
