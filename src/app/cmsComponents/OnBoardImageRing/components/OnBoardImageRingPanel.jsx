"use client";

import OnBoardImageRingHeader from "./OnBoardImageRingHeader";
import OnBoardImageRingTrack from "./OnBoardImageRingTrack";
import { RING_HEIGHT, SECTION_BG } from "../utils/constants";

export default function OnBoardImageRingPanel({
  lang = "en",
  title,
  description,
  images,
  captions,
}) {
  return (
    <section
      className="w-full overflow-hidden"
      style={{ backgroundColor: SECTION_BG }}
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <OnBoardImageRingHeader title={title} description={description} />

      <div className={`w-full ${RING_HEIGHT}`}>
        <OnBoardImageRingTrack
          images={images}
          captions={captions}
          lang={lang}
        />
      </div>
    </section>
  );
}
