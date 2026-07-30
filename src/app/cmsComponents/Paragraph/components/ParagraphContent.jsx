import { typography } from "@/styles/typography";

export default function ParagraphContent({ title, description }) {
  if (!title && !description) {
    return null;
  }

  return (
    <>
      {title ? (
        <h2
          className={`${typography.sectionTitle} wrap-break-word font-semibold leading-snug text-primary-1 md:leading-loose`}
        >
          {title}
        </h2>
      ) : null}
      {description ? (
        <p
          className={`${typography.sectionDescription} mt-2 wrap-break-word leading-relaxed text-body md:leading-loose`}
        >
          {description}
        </p>
      ) : null}
    </>
  );
}
