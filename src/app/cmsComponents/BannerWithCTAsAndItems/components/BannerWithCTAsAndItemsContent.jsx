import { typography } from "@/styles/typography";
import BannerWithCTAsAndItemsButtons from "./BannerWithCTAsAndItemsButtons";
import BannerWithCTAsAndItemsList from "./BannerWithCTAsAndItemsList";

/** Same content shell as AccordionContainer / other page sections */
const CONTENT_SHELL =
  "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12";

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
    <section className={`flex min-h-[52vh] items-center sm:min-h-[48vh] lg:min-h-[56vh] ${CONTENT_SHELL}`}>
      {/*
        Mobile: centered column, text stays start-aligned.
        md+: full shell width so left edge matches FAQ / other sections.
        lg+: half width (left column) on the same start edge.
      */}
      <div className="mx-auto w-full max-w-md py-10 text-start sm:py-12 md:mx-0 md:max-w-none lg:w-1/2 lg:py-14">
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
    </section>
  );
}
