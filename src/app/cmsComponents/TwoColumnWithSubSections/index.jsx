"use client";

import SubSectionsContent from "./components/SubSectionsContent";
import SubSectionsMedia from "./components/SubSectionsMedia";
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
    <section className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-10">
      <SubSectionsMedia
        lang={lang}
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
  );
};

export default TwoColumnWithSubSections;
