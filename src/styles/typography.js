/**
 * Shared semantic typography roles (sizes only).
 * Use with the correct HTML tag for meaning (h1–h6, p, a, etc.).
 *
 * mobile → sm (≥640) → md (≥768) → lg (≥1024)
 */
export const typography = {
  /** Page-level title — typically one h1 per page */
  pageTitle: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",

  /** Section heading — typically h2 */
  sectionTitle: "text-xl sm:text-2xl md:text-3xl",

  /** Supporting text under a section title — typically p */
  sectionDescription: "text-sm sm:text-base md:text-lg",

  /** Item / card / accordion question — typically h3 */
  itemTitle: "text-sm sm:text-base md:text-lg",

  /** Body under an item — typically p */
  itemDescription: "text-sm sm:text-base",

  /** General paragraph body — typically p */
  body: "text-sm sm:text-base",

  /** CTA / button label */
  button: "text-sm sm:text-base",

  /** Small helper / caption text */
  caption: "text-xs sm:text-sm",
};
