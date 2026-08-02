import { typography } from "@/styles/typography";

export default function VerticalImageSliceText({
  firstPart,
  highlightPart,
  restPart,
  description,
}) {
  if (!firstPart && !highlightPart && !restPart && !description) {
    return null;
  }

  return (
    <div className="flex flex-col justify-center">
      {firstPart || highlightPart || restPart ? (
        <h2
          className={`${typography.sectionTitle} mb-4 font-semibold leading-snug tracking-tight sm:mb-5 sm:leading-tight md:mb-6`}
        >
          {firstPart ? (
            <span className="font-semibold text-secondary-2">{firstPart}</span>
          ) : null}
          {highlightPart ? (
            <span className="font-bold text-primary-2">{highlightPart}</span>
          ) : null}
          {restPart ? (
            <span className="font-semibold text-secondary-2">{restPart}</span>
          ) : null}
        </h2>
      ) : null}

      {description ? (
        <p
          className={`${typography.sectionDescription} max-w-xl leading-relaxed text-muted sm:leading-loose`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
