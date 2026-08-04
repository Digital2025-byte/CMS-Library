import { typography } from "@/styles/typography";
import MixedRightThreeImagesCtas from "./MixedRightThreeImagesCtas";

export default function MixedRightThreeImagesContent({
  lang = "en",
  title,
  description,
  primaryCta,
  secondaryCta,
}) {
  return (
    <div className="order-1 flex flex-col justify-center lg:col-start-1 lg:row-start-1">
      {title ? (
        <h2 className={`${typography.sectionTitle} font-semibold text-white`}>
          {title}
        </h2>
      ) : null}

      {description ? (
        <p
          className={`${typography.sectionDescription} mt-3 max-w-xl leading-relaxed text-white/90 sm:mt-4`}
        >
          {description}
        </p>
      ) : null}

      <MixedRightThreeImagesCtas
        lang={lang}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
      />
    </div>
  );
}
