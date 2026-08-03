import PageContentContainer from "@/components/layout/PageContentContainer";
import PhotoTileGridCards from "./PhotoTileGridCards";
import PhotoTileGridHeader from "./PhotoTileGridHeader";

export default function PhotoTileGridPanel({
  lang = "en",
  title,
  destinations,
  cId,
}) {
  return (
    <section className="flex flex-col items-center justify-center bg-primary-800 py-8 sm:py-10 lg:py-12">
      <PageContentContainer>
        <PhotoTileGridHeader lang={lang} title={title} />
        <PhotoTileGridCards
          lang={lang}
          destinations={destinations}
          cId={cId}
        />
      </PageContentContainer>
    </section>
  );
}
