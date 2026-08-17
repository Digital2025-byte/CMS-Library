import DestinationImageCard from "./DestinationImageCard";
import { getCardSizeByIndex } from "../utils/cardSizes";
import styles from "../ImageCarouselsWithOppositeScrollDirections.module.css";

export default function MarqueeRow({
  items,
  direction = "left",
  duration = 15,
  cardSize = "mixed",
  showCardTitles = true,
  showOverlay = true,
  cardTitleColor = "white",
}) {
  const safeItems = Array.isArray(items) ? items : [];

  if (!safeItems.length) {
    return null;
  }

  const loopItems = [...safeItems, ...safeItems];

  return (
    <div className={styles.viewport}>
      <div
        className={`${styles.track} ${
          direction === "left" ? styles.left : styles.right
        }`}
        style={{ "--duration": `${duration}s` }}
      >
        {loopItems.map((item, idx) => {
          const originalIndex = idx % safeItems.length;
          const { w, h } = getCardSizeByIndex(originalIndex, cardSize);

          return (
            <DestinationImageCard
              key={`${item.fileUrl}-${item.title}-${idx}`}
              item={item}
              w={w}
              h={h}
              showTitle={showCardTitles}
              showOverlay={showOverlay}
              titleColor={cardTitleColor}
            />
          );
        })}
      </div>
    </div>
  );
}
