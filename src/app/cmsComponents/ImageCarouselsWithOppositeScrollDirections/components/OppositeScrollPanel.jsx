import ExploreOverlay from "./ExploreOverlay";
import MarqueeRow from "./MarqueeRow";
import OppositeScrollHeader from "./OppositeScrollHeader";
import { getThemeColorCss } from "@/styles/themeColors";
import {
  CARD_GAP_VALUE,
  CARD_RADIUS_VALUE,
  DEFAULT_OPPOSITE_SCROLL_STYLE,
  ROW_GAP_CLASS,
  SECTION_PADDING_CLASS,
} from "../utils/style";
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
  showDescription = true,
  showExploreButton = true,
  showSectionBg = DEFAULT_OPPOSITE_SCROLL_STYLE.showSectionBg,
  showCardTitles = true,
  showOverlay = true,
  dimOnHover = true,
  pauseOnHover = false,
  reverseRows = false,
  sectionBg = DEFAULT_OPPOSITE_SCROLL_STYLE.sectionBg,
  sectionPadding = DEFAULT_OPPOSITE_SCROLL_STYLE.sectionPadding,
  titleAlign = DEFAULT_OPPOSITE_SCROLL_STYLE.titleAlign,
  titleColor = DEFAULT_OPPOSITE_SCROLL_STYLE.titleColor,
  descriptionColor = DEFAULT_OPPOSITE_SCROLL_STYLE.descriptionColor,
  cardSize = DEFAULT_OPPOSITE_SCROLL_STYLE.cardSize,
  cardRadius = DEFAULT_OPPOSITE_SCROLL_STYLE.cardRadius,
  cardGap = DEFAULT_OPPOSITE_SCROLL_STYLE.cardGap,
  rowGap = DEFAULT_OPPOSITE_SCROLL_STYLE.rowGap,
  cardTitleColor = DEFAULT_OPPOSITE_SCROLL_STYLE.cardTitleColor,
  overlayColor = DEFAULT_OPPOSITE_SCROLL_STYLE.overlayColor,
  speed = DEFAULT_OPPOSITE_SCROLL_STYLE.speed,
  buttonBg = DEFAULT_OPPOSITE_SCROLL_STYLE.buttonBg,
  buttonColor = DEFAULT_OPPOSITE_SCROLL_STYLE.buttonColor,
}) {
  const duration = Number(speed) || 15;
  const paddingClass =
    SECTION_PADDING_CLASS[sectionPadding] ?? SECTION_PADDING_CLASS.default;
  const gapClass = ROW_GAP_CLASS[rowGap] ?? ROW_GAP_CLASS.default;
  const topDirection = reverseRows ? "left" : "right";
  const bottomDirection = reverseRows ? "right" : "left";

  return (
    <section
      className={styles.sectionContainer}
      style={{
        backgroundColor: showSectionBg
          ? getThemeColorCss(sectionBg, "primary-800")
          : "transparent",
        "--card-radius":
          CARD_RADIUS_VALUE[cardRadius] ?? CARD_RADIUS_VALUE.lg,
        "--card-gap": CARD_GAP_VALUE[cardGap] ?? CARD_GAP_VALUE.default,
        "--card-overlay": getThemeColorCss(overlayColor, "foreground"),
        "--explore-bg": getThemeColorCss(buttonBg, "white"),
        "--explore-fg": getThemeColorCss(buttonColor, "white"),
      }}
    >
      <div className={paddingClass}>
        <OppositeScrollHeader
          title={title}
          description={description}
          align={titleAlign}
          titleColor={titleColor}
          descriptionColor={descriptionColor}
          showTitle={showTitleDescription}
          showDescription={showDescription}
        />

        <div
          className={[
            "flex flex-col",
            gapClass,
            styles.carouselContainer,
            dimOnHover ? styles.dimOnHover : "",
            pauseOnHover ? styles.pauseOnHover : "",
            showExploreButton ? styles.showExplore : "",
          ]
            .filter(Boolean)
            .join(" ")}
          dir="ltr"
        >
          <MarqueeRow
            items={topRow}
            direction={topDirection}
            duration={duration}
            cardSize={cardSize}
            showCardTitles={showCardTitles}
            showOverlay={showOverlay}
            cardTitleColor={cardTitleColor}
          />
          <MarqueeRow
            items={bottomRow}
            direction={bottomDirection}
            duration={duration}
            cardSize={cardSize}
            showCardTitles={showCardTitles}
            showOverlay={showOverlay}
            cardTitleColor={cardTitleColor}
          />
          {showExploreButton ? (
            <ExploreOverlay label={exploreLabel} href={exploreHref} cId={cId} />
          ) : null}
        </div>
      </div>
    </section>
  );
}
