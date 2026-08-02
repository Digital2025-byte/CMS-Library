"use client";

import SubSectionsContent from "./components/SubSectionsContent";
import SubSectionsMedia from "./components/SubSectionsMedia";
import SubSectionsMobile from "./components/SubSectionsMobile";
import { getTwoColumnWithSubSectionsContent } from "./utils/helpers";

const TwoColumnWithSubSections = ({ lang = "en", data }) => {
  const {
    sectionLabel,
    title,
    description,
    mainImage,
    mainImageAlt,
    overlayImage,
    overlayImageAlt,
    firstSubSection,
    secondSubSection,
    ctaButton,
    ctaHref,
  } = getTwoColumnWithSubSectionsContent(data);

  if (!title && !description && !mainImage) {
    return null;
  }

  return (
    <>
      {/* Desktop: overlapping media + content with side-by-side subsections */}
      <section className="hidden overflow-visible lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-12 xl:gap-16">
        <SubSectionsMedia
          mainImage={mainImage}
          mainImageAlt={mainImageAlt}
          overlayImage={overlayImage}
          overlayImageAlt={overlayImageAlt}
        />
        <SubSectionsContent
          lang={lang}
          sectionLabel={sectionLabel}
          title={title}
          description={description}
          firstSubSection={firstSubSection}
          secondSubSection={secondSubSection}
          ctaButton={ctaButton}
          ctaHref={ctaHref}
        />
      </section>

      {/* Mobile: header → staggered image/text grid → CTA */}
      <SubSectionsMobile
        lang={lang}
        sectionLabel={sectionLabel}
        title={title}
        description={description}
        mainImage={mainImage}
        mainImageAlt={mainImageAlt}
        overlayImage={overlayImage}
        overlayImageAlt={overlayImageAlt}
        firstSubSection={firstSubSection}
        secondSubSection={secondSubSection}
        ctaButton={ctaButton}
        ctaHref={ctaHref}
      />
    </>
  );
};

export default TwoColumnWithSubSections;
