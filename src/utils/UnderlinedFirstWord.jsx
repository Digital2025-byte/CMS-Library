import { typography } from "@/styles/typography";

/**
 * Renders text with the first word underlined (desktop only).
 */
export function UnderlinedFirstWord({ text = "", isMobile = false }) {
  const safeText = String(text || "");
  const firstSpaceIndex = safeText.indexOf(" ");

  if (firstSpaceIndex === -1) {
    return (
      <span className={`${typography.sectionTitle} font-semibold text-primary-1`}>
        <span className="relative inline-block">
          {safeText}
          {!isMobile && safeText ? (
            <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-primary-2" />
          ) : null}
        </span>
      </span>
    );
  }

  const firstWord = safeText.substring(0, firstSpaceIndex);
  const remainingText = safeText.substring(firstSpaceIndex);

  return (
    <span className={`${typography.sectionTitle} font-semibold text-primary-1`}>
      <span className="relative inline-block">
        {firstWord}
        {!isMobile ? (
          <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-primary-2" />
        ) : null}
      </span>
      {remainingText}
    </span>
  );
}
