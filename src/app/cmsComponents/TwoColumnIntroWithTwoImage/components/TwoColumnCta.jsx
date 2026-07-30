import Link from "next/link";
import { typography } from "@/styles/typography";

export default function TwoColumnCta({ label, href }) {
  if (!label) {
    return null;
  }

  const className = `${typography.button} inline-flex items-center justify-center rounded-lg bg-primary-2 px-6 py-2.5 font-medium text-white transition-all duration-300 hover:bg-primary-2/90`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }

  return (
    <button type="button" className={className}>
      {label}
    </button>
  );
}
