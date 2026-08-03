import { typography } from "@/styles/typography";
import AnimatedImagesCta from "./AnimatedImagesCta";
import PageContentContainer from "@/components/layout/PageContentContainer";

export default function AnimatedImagesContent({
  preTitle,
  title,
  buttonText,
  buttonLink,
  iconType,
  cId,
}) {
  return (
    <PageContentContainer className="relative z-10 flex flex-1 flex-col items-center justify-center py-16 text-center md:py-20 lg:py-24">
      {preTitle ? (
        <p className={`${typography.sectionDescription} mb-2 text-primary-1 md:mb-3`}>
          {preTitle}
        </p>
      ) : null}

      {title ? (
        <h2 className={`${typography.pageTitle} mb-8 font-bold text-primary-1 md:mb-10`}>
          {title}
        </h2>
      ) : null}

      <AnimatedImagesCta
        buttonText={buttonText}
        buttonLink={buttonLink}
        iconType={iconType}
        cId={cId}
      />
    </PageContentContainer>
  );
}
