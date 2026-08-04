import { typography } from "@/styles/typography";
import MixedThreeImagesCtas from "./MixedThreeImagesCtas";

export default function MixedThreeImagesContent({
  lang = "en",
  title,
  description,
  primaryCta,
  secondaryCta,
  className = "",
  showDesktopCtas = true,
}) {
  return (
    <div className={`flex flex-col justify-center ${className}`.trim()}>
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

      {showDesktopCtas ? (
        <MixedThreeImagesCtas
          lang={lang}
          primaryCta={primaryCta}
          secondaryCta={secondaryCta}
          className="hidden lg:flex"
        />
      ) : null}
    </div>
  );
}
