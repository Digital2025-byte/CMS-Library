import ExploreOverlay from "./ExploreOverlay";
import MarqueeRow from "./MarqueeRow";
import OppositeScrollHeader from "./OppositeScrollHeader";
import styles from "../ImageCarouselsWithOppositeScrollDirections.module.css";

export default function OppositeScrollPanel({
  title,
  description,
  exploreLabel,
  exploreHref,
  topRow,
  bottomRow,
  cId,
  showTitleDescription = true,
  showExploreButton = true,
}) {
  return (
    <section className={`bg-primary-800 ${styles.sectionContainer}`}>
      <div className="py-10 sm:py-12 lg:py-16">
        {showTitleDescription ? (
          <OppositeScrollHeader title={title} description={description} />
        ) : null}

        <div
          className={`flex flex-col gap-8 ${styles.carouselContainer}`}
          dir="ltr"
        >
          <MarqueeRow items={topRow} direction="right" duration={15} />
          <MarqueeRow items={bottomRow} direction="left" duration={15} />
          {showExploreButton ? (
            <ExploreOverlay label={exploreLabel} href={exploreHref} cId={cId} />
          ) : null}
        </div>
      </div>
    </section>
  );
}
