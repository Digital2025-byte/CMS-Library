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
}) {
  return (
    /*
      <640: centered column, text stays start-aligned.
      ≥640 (sm/tablet+): full shell width — same start edge as FAQ.
      ≥1024 (lg): left half only, still on that same start edge.
    */
    <div className="mx-auto w-full max-w-md py-10 text-start sm:mx-0 sm:max-w-none sm:py-12 lg:w-1/2 lg:py-14">
      {title ? (
        <h1
          className={`${typography.sectionTitle} font-semibold leading-tight text-white`}
        >
          {title}
        </h1>
      ) : null}

      {description ? (
        <p
          className={`${typography.sectionDescription} mt-3 leading-relaxed text-white sm:mt-4`}
        >
          {description}
        </p>
      ) : null}

      <BannerWithCTAsAndItemsList items={items} />

      <BannerWithCTAsAndItemsButtons
        primaryLabel={primaryLabel}
        primaryHref={primaryHref}
        secondaryLabel={secondaryLabel}
        secondaryHref={secondaryHref}
      />
    </div>
  );
}
