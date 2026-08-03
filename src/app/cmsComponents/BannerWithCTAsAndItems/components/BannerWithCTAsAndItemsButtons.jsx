import Button from "@/components/ui/Button";

export default function BannerWithCTAsAndItemsButtons({
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  primaryIcon,
  secondaryIcon,
  cId,
}) {
  if (!primaryLabel && !secondaryLabel) {
    return null;
  }

  return (
    <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
      {primaryLabel ? (
        <Button
          label={primaryLabel}
          href={primaryHref}
          icon={primaryIcon}
          cId={cId}
          variant="primary"
          className="min-h-12 w-full font-semibold sm:w-auto sm:min-w-40 lg:px-10"
        />
      ) : null}
      {secondaryLabel ? (
        <Button
          label={secondaryLabel}
          href={secondaryHref}
          icon={secondaryIcon}
          cId={cId}
          variant="secondary"
          className="min-h-12 w-full font-semibold sm:w-auto sm:min-w-40 lg:px-10"
        />
      ) : null}
    </div>
  );
}
