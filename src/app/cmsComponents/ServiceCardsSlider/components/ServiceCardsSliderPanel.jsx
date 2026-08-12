import PageContentContainer from "@/components/layout/PageContentContainer";
import { typography } from "@/styles/typography";
import ServiceCard from "./ServiceCard";

export default function ServiceCardsSliderPanel({
  lang = "en",
  title,
  description,
  services = [],
  showTitleDescription = true,
}) {
  const isRtl = lang === "ar";

  if (!services.length) {
    return null;
  }

  return (
    <section
      className="w-full bg-white py-8 md:py-12"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <PageContentContainer>
        {showTitleDescription && (title || description) ? (
          <div className="mb-6 md:mb-8">
            {title ? (
              <h2
                className={`${typography.sectionTitle} font-semibold text-primary-1`}
              >
                {title}
              </h2>
            ) : null}
            {description ? (
              <p
                className={`${typography.sectionDescription} mt-2 text-secondary-2`}
              >
                {description}
              </p>
            ) : null}
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((service, index) => (
            <ServiceCard
              key={`${service.title}-${index}`}
              service={service}
              isRtl={isRtl}
            />
          ))}
        </div>
      </PageContentContainer>
    </section>
  );
}
