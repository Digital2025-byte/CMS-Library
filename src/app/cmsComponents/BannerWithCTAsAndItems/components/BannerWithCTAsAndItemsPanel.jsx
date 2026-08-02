import CustomBackgroundImage from "@/components/ui/CustomBackgroundImage";
import BannerWithCTAsAndItemsContent from "./BannerWithCTAsAndItemsContent";

export default function BannerWithCTAsAndItemsPanel({
  lang = "en",
  title,
  description,
  backgroundImage,
  items,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}) {
  return (
    <CustomBackgroundImage
      imageUrl={backgroundImage}
      desktopGradient
      lang={lang}
      className="min-h-[52vh] sm:min-h-[48vh] lg:min-h-[56vh]"
    >
      <BannerWithCTAsAndItemsContent
        title={title}
        description={description}
        items={items}
        primaryLabel={primaryLabel}
        primaryHref={primaryHref}
        secondaryLabel={secondaryLabel}
        secondaryHref={secondaryHref}
      />
    </CustomBackgroundImage>
  );
}
