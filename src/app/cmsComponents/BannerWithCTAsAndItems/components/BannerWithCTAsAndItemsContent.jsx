import { typography } from "@/styles/typography";
import BannerWithCTAsAndItemsButtons from "./BannerWithCTAsAndItemsButtons";
import BannerWithCTAsAndItemsList from "./BannerWithCTAsAndItemsList";

export default function BannerWithCTAsAndItemsContent({
  title,
  description,
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
    <div className="mx-auto w-full max-w-md py-10 text-start sm:mx-0 sm:max-w-none sm:py-12 lg:w-1/2 lg:py-14">
      {showTitleDescription && title ? (
        <h1
          className={`${typography.sectionTitle} font-semibold leading-tight text-white`}
        >
          {title}
        </h1>
      ) : null}

      {showTitleDescription && description ? (
        <p
          className={`${typography.sectionDescription} mt-3 leading-relaxed text-white sm:mt-4`}
        >
          {description}
        </p>
      ) : null}

      {showItems ? <BannerWithCTAsAndItemsList items={items} /> : null}

      <BannerWithCTAsAndItemsButtons
        primaryLabel={showPrimaryButton ? primaryLabel : ""}
        primaryHref={primaryHref}
        secondaryLabel={showSecondaryButton ? secondaryLabel : ""}
        secondaryHref={secondaryHref}
      />
    </div>
  );
}
