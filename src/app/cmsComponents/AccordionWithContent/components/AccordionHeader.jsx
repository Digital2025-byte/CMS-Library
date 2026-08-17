import { typography } from "@/styles/typography";
import { TEXT_COLOR_CLASS, TITLE_ALIGN_CLASS } from "../utils/style";

export default function AccordionHeader({
  title,
  description,
  align = "left",
  titleColor = "primary-1",
  descriptionColor = "700",
  showDescription = true,
}) {
  if (!title && !(showDescription && description)) {
    return null;
  }

  const alignClass = TITLE_ALIGN_CLASS[align] ?? TITLE_ALIGN_CLASS.left;
  const titleClass = TEXT_COLOR_CLASS[titleColor] ?? TEXT_COLOR_CLASS["primary-1"];
  const descriptionClass =
    TEXT_COLOR_CLASS[descriptionColor] ?? TEXT_COLOR_CLASS["700"];

  return (
    <div className={`mb-5 sm:mb-7 lg:mb-8 ${alignClass}`}>
      {title ? (
        <h2
          className={`${typography.sectionTitle} font-semibold leading-snug ${titleClass}`}
        >
          {title}
        </h2>
      ) : null}
      {showDescription && description ? (
        <p
          className={`${typography.sectionDescription} mt-2 leading-relaxed ${descriptionClass} ${
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
