import ph1 from "@/assets/ThreeDImageRingSection/ph1.png";
import ph2 from "@/assets/ThreeDImageRingSection/ph2.png";
import ph3 from "@/assets/ThreeDImageRingSection/ph3.png";

const toUrl = (asset) => (typeof asset === "string" ? asset : asset?.src || "");

const IMAGE_POOL = [ph1, ph2, ph3].map(toUrl);

/** Six portrait panels — matches the “On Board” reference arc. */
const PANEL_COUNT = 6;

/**
 * Builds CMS-shaped ThreeDImageRingSection demo data.
 * Images: assets/ThreeDImageRingSection/ph1–ph3 (cycled).
 */
export function buildThreeDImageRingSectionData(t, lang = "en") {
  const captions = t("threeDImageRingSection.captions", {
    returnObjects: true,
  });
  const safeCaptions = Array.isArray(captions) ? captions : [];

  const images = Array.from(
    { length: PANEL_COUNT },
    (_, index) => IMAGE_POOL[index % IMAGE_POOL.length]
  );

  const resolvedCaptions = Array.from(
    { length: PANEL_COUNT },
    (_, index) =>
      safeCaptions[index] ||
      safeCaptions[index % Math.max(safeCaptions.length, 1)] ||
      ""
  );

  return {
    translations: [
      {
        languageCode: lang,
        content: {
          title: t("threeDImageRingSection.title"),
          description: t("threeDImageRingSection.description"),
          images,
          captions: resolvedCaptions,
          config: {
            width: 260,
            perspective: 2000,
            // Ring clamps to packing; this is a soft hint only.
            imageDistance: 480,
            backgroundColor: "#01263B",
          },
          containerHeight:
            "h-[440px] sm:h-[540px] md:h-[640px] lg:h-[700px]",
        },
      },
    ],
  };
}
