"use client";

import PageContentContainer from "@/components/layout/PageContentContainer";
import DestinationsCitiesIntro from "./DestinationsCitiesIntro";
import DestinationsCitiesStack from "./DestinationsCitiesStack";

export default function DestinationsCitiesPanel({
  lang = "en",
  title = "",
  description = "",
  cities = [],
  posParams = "gb",
  showTitleDescription = true,
}) {
  if (!title && !description && !cities.length) {
    return null;
  }

  return (
    <section
      className="overflow-hidden bg-primary-800 py-2 pt-8"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <PageContentContainer className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,32%)_minmax(0,68%)] lg:items-center lg:gap-10 xl:gap-16">
        {showTitleDescription ? (
          <DestinationsCitiesIntro title={title} description={description} />
        ) : (
          <div className="hidden lg:block" />
        )}
        <DestinationsCitiesStack
          cities={cities}
          lang={lang}
          posParams={posParams}
        />
      </PageContentContainer>
    </section>
  );
}
