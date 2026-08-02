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
    <section className="flex min-h-[52vh] items-end justify-center sm:min-h-[48vh] lg:min-h-[56vh] lg:items-center">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="w-full min-w-0 px-5 pb-8 pt-10 sm:px-8 sm:pb-10 sm:pt-12 lg:px-10 lg:py-14 xl:px-14">
          {title ? (
            <h1 className="text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
              {title}
            </h1>
          ) : null}

          {description ? (
            <p
              className={`${typography.sectionDescription} mt-3 max-w-xl leading-relaxed text-white sm:mt-4`}
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
      </div>
    </section>
  );
}
