import CustomBackgroundImage from "@/components/ui/CustomBackgroundImage";
import PageContentContainer from "@/components/layout/PageContentContainer";
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
  showTitleDescription = true,
  showItems = true,
  showPrimaryButton = true,
  showSecondaryButton = true,
}) {
  return (
    <CustomBackgroundImage
      imageUrl={backgroundImage}
      desktopGradient
      lang={lang}
      className="w-full min-h-[52vh] sm:min-h-[48vh] lg:min-h-[56vh]"
    >
      <PageContentContainer className="flex min-h-[52vh] items-center sm:min-h-[48vh] lg:min-h-[56vh]">
        <BannerWithCTAsAndItemsContent
          title={title}
          description={description}
          items={items}
          primaryLabel={primaryLabel}
          primaryHref={primaryHref}
          secondaryLabel={secondaryLabel}
          secondaryHref={secondaryHref}
          showTitleDescription={showTitleDescription}
          showItems={showItems}
          showPrimaryButton={showPrimaryButton}
          showSecondaryButton={showSecondaryButton}
        />
      </PageContentContainer>
    </CustomBackgroundImage>
  );
}
