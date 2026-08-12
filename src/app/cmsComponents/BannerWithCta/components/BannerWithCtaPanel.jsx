import BannerWithCtaContent from "./BannerWithCtaContent";

const TITLE_GRADIENT =
  "linear-gradient(90deg, rgba(var(--primary-1-rgb), 0.92) 0%, rgba(var(--primary-1-rgb), 0.85) 20%, rgba(var(--primary-1-rgb), 0.6) 45%, rgba(var(--primary-1-rgb), 0.2) 70%, rgba(var(--primary-1-rgb), 0) 100%)";

export default function BannerWithCtaPanel({
  title,
  description,
  ctaLabel,
  ctaHref,
  backgroundImage,
  showTitleDescription = true,
  showButton = true,
}) {
  const backgroundLayers = [
    title ? TITLE_GRADIENT : null,
    backgroundImage ? `url(${backgroundImage})` : null,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <div
      className="flex min-h-62.5 w-full items-center rounded-2xl md:min-h-80 lg:min-h-103.75"
      style={{
        backgroundImage: backgroundLayers || undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: backgroundImage ? undefined : "var(--color-main)",
      }}
    >
      <BannerWithCtaContent
        title={title}
        description={description}
        ctaLabel={ctaLabel}
        ctaHref={ctaHref}
        showTitleDescription={showTitleDescription}
        showButton={showButton}
      />
    </div>
  );
}
