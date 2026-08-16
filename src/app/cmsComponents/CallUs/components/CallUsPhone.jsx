import { typography } from "@/styles/typography";

export default function CallUsPhone({ phoneText, href }) {
  if (!phoneText) {
    return null;
  }

  return (
    <a
      dir="ltr"
      href={href || "#"}
      className={`${typography.pageTitle} tracking-wide text-white no-underline hover:opacity-90`}
    >
      +{phoneText}
    </a>
  );
}
