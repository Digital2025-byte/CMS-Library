import HeaderWithThreeImageSlice from "./HeaderWithThreeImageSlice";
import { getHeaderClipPaths } from "../utils/clipPaths";

export default function HeaderWithThreeImageBackground({
  lang = "en",
  imageOne,
  imageTwo,
  imageThree,
  mobileImageOne,
  mobileImageTwo,
  mobileImageThree,
}) {
  const {
    LEFT_W,
    MID_W,
    RIGHT_W,
    leftClipPath,
    midClipPath,
    rightClipPath,
    overlapStyle,
  } = getHeaderClipPaths(lang);

  return (
    <div className="absolute inset-0 flex w-full">
      <HeaderWithThreeImageSlice
        width={LEFT_W}
        clipPath={leftClipPath}
        desktopImage={imageOne}
        mobileImage={mobileImageOne}
        priority
      />
      <HeaderWithThreeImageSlice
        width={MID_W}
        overlapStyle={overlapStyle}
        clipPath={midClipPath}
        desktopImage={imageTwo}
        mobileImage={mobileImageTwo}
      />
      <HeaderWithThreeImageSlice
        width={RIGHT_W}
        overlapStyle={overlapStyle}
        clipPath={rightClipPath}
        desktopImage={imageThree}
        mobileImage={mobileImageThree}
      />
    </div>
  );
}
