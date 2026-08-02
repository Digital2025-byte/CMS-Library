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
      className="w-full min-h-[52vh] sm:min-h-[48vh] lg:min-h-[56vh]"
    >
      {/* Same horizontal shell as AccordionContainer (inlined for Tailwind detection) */}
      <div className="mx-auto flex min-h-[52vh] w-full max-w-7xl items-center px-4 sm:min-h-[48vh] sm:px-6 lg:min-h-[56vh] lg:px-12">
        <BannerWithCTAsAndItemsContent
          title={title}
          description={description}
          items={items}
          primaryLabel={primaryLabel}
          primaryHref={primaryHref}
          secondaryLabel={secondaryLabel}
          secondaryHref={secondaryHref}
        />
      </div>
    </CustomBackgroundImage>
  );
}
