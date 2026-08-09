/**
 * Control themes for slider arrows and dots.
 * Each uses the named color as the base, and a lighter token for arrow hover.
 * Active dots use the same base color (`bg`).
 *
 * primary-1   → hover: primary-400
 * primary-2   → hover: secondary-900
 * secondary-1 → hover: primary-500
 * secondary-2 → hover: primary-700
 */
export const ARROW_THEMES = {
  "primary-1": {
    bg: "var(--color-primary-1)",
    hoverBg: "var(--color-primary-400)",
    icon: "#ffffff",
  },
  "primary-2": {
    bg: "var(--color-primary-2)",
    hoverBg: "var(--color-secondary-900)",
    icon: "#ffffff",
  },
  "secondary-1": {
    bg: "var(--color-secondary-1)",
    hoverBg: "var(--color-primary-500)",
    icon: "#ffffff",
  },
  "secondary-2": {
    bg: "var(--color-secondary-2)",
    hoverBg: "var(--color-primary-700)",
    icon: "#ffffff",
  },
};

export const DEFAULT_ARROW_THEME = "primary-1";

export function resolveArrowTheme(theme = DEFAULT_ARROW_THEME) {
  const key = String(theme || "").trim();
  return ARROW_THEMES[key] || ARROW_THEMES[DEFAULT_ARROW_THEME];
}
