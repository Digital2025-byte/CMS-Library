import Link from "next/link";

function CtaButton({ label, href, variant = "primary" }) {
  if (!label) {
    return null;
  }

  const className =
    variant === "primary"
      ? "w-full min-h-12 rounded-lg border-2 border-primary-2 bg-primary-2 px-6 py-3 text-center text-sm font-semibold text-white sm:w-auto sm:min-w-40 sm:px-8 sm:text-base lg:px-10"
      : "w-full min-h-12 rounded-lg border-2 border-white bg-transparent px-6 py-3 text-center text-sm font-semibold text-white sm:w-auto sm:min-w-40 sm:px-8 sm:text-base lg:px-10";

  if (href) {
    return (
      <Link href={href} className="block w-full sm:w-auto">
        <button type="button" className={className}>
          {label}
        </button>
      </Link>
    );
  }

  return (
    <button type="button" className={className}>
      {label}
    </button>
  );
}

export default function BannerWithCTAsAndItemsButtons({
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}) {
  if (!primaryLabel && !secondaryLabel) {
    return null;
  }

  return (
    <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
      <CtaButton label={primaryLabel} href={primaryHref} variant="primary" />
      <CtaButton
        label={secondaryLabel}
        href={secondaryHref}
        variant="secondary"
      />
    </div>
  );
}
