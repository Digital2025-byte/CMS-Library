"use client";

import DestinationsCitiesIntro from "./DestinationsCitiesIntro";
import DestinationsCitiesStack from "./DestinationsCitiesStack";

export default function DestinationsCitiesPanel({
  lang = "en",
  title = "",
  description = "",
  cities = [],
  posParams = "gb",
}) {
  if (!title && !description && !cities.length) {
    return null;
  }

  return (
    <section
      className="overflow-hidden bg-primary-800 py-2 pt-8"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 lg:grid lg:grid-cols-[minmax(0,36%)_minmax(0,64%)] lg:items-center lg:gap-40 xl:grid-cols-[minmax(0,680px)_minmax(0,1fr)] xl:gap-40">
        <DestinationsCitiesIntro title={title} description={description} />
        <DestinationsCitiesStack
          cities={cities}
          lang={lang}
          posParams={posParams}
        />
      </div>
    </section>
  );
}
