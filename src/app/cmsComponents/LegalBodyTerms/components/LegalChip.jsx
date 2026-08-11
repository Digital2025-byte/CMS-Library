import { typography } from "@/styles/typography";

export default function LegalChip({
  children,
  label = "",
  className = "",
}) {
  if (!children) {
    return null;
  }

  return (
    <span
      className={`inline-block rounded-full bg-main/12 px-4 py-2 ${className}`}
    >
      {label ? (
        <span className={`${typography.caption} font-bold text-primary-1`}>
          {label}{" "}
        </span>
      ) : null}
      <span className={`${typography.caption} font-medium text-primary-1`}>
        {children}
      </span>
    </span>
  );
}
