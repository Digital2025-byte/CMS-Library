import Image from "next/image";
import { typography } from "@/styles/typography";
import ServiceBenefitItem from "./ServiceBenefitItem";

export default function ServiceBenefitsPanel({
  mainTitle,
  backgroundImage,
  benefits = [],
}) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl md:min-h-64 lg:min-h-72">
      {backgroundImage ? (
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          quality={75}
          className="object-cover object-center"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
      ) : null}

      <div
        className="absolute inset-0"
        style={{ backgroundColor: "color-mix(in srgb, var(--color-secondary-2) 70%, transparent)" }}
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col justify-center px-5 py-8 text-white sm:px-8 sm:py-10 md:px-8 md:py-12 lg:px-14 lg:py-14 mb-4 md:mb-0">
        {mainTitle ? (
          <h2
            className={`${typography.sectionTitle} text-center font-semibold text-white`}
          >
            {mainTitle}
          </h2>
        ) : null}

        {benefits.length ? (
          <div className="mt-8 flex flex-col gap-8 sm:mt-9 sm:gap-9 md:mt-10 md:grid md:grid-cols-3 md:items-start md:gap-5 lg:mt-12 lg:gap-10 xl:gap-12">
            {benefits.map((benefit, index) => (
              <ServiceBenefitItem
                key={`${benefit?.title || "benefit"}-${index}`}
                title={benefit?.title}
                description={benefit?.description}
                icon={benefit?.icon}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
