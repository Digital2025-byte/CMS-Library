import Image from "next/image";
import { typography } from "@/styles/typography";
import styles from "../ImageCarouselsWithOppositeScrollDirections.module.css";

export default function DestinationImageCard({ item, w, h }) {
  if (!item?.fileUrl) {
    return null;
  }

  return (
    <div
      className={styles.card}
      style={{ "--w": `${w}px`, "--h": `${h}px` }}
    >
      <Image
        src={item.fileUrl}
        alt={item.alt || item.title || "Destination image"}
        fill
        className={styles.image}
        sizes={`${w}px`}
        quality={75}
      />

      <div className={styles.overlay} />

      {item.title ? (
        <div className={styles.titleWrap}>
          <p className={`${typography.itemTitle} font-semibold text-white`}>
            {item.title}
          </p>
        </div>
      ) : null}
    </div>
  );
}
