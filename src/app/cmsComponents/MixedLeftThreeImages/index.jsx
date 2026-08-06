"use client";

/**
 * @deprecated Use MixedRightThreeImages with side="left" instead.
 * Kept as a thin wrapper for existing imports.
 */
import MixedRightThreeImages from "@/app/cmsComponents/MixedRightThreeImages";

const MixedLeftThreeImages = ({ lang = "en", data }) => (
  <MixedRightThreeImages lang={lang} data={data} side="left" />
);

export default MixedLeftThreeImages;
