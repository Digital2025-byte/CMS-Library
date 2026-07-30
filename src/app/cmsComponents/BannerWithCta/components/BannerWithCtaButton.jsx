import Link from "next/link";
import { typography } from "@/styles/typography";

export default function BannerWithCtaButton({ label, href }) {
  if (!label) {
    return null;
  }

  return (
    <Link
      href={href || "#"}
      className={`${typography.button} mt-5 inline-flex items-center justify-center rounded-md bg-primary-2 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-primary-2/90`}
    >
      {label}
    </Link>
  );
}
