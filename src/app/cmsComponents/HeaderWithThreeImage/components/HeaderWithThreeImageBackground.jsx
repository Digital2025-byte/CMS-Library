import HeaderWithThreeImageSlice from "./HeaderWithThreeImageSlice";
import { getHeaderClipPaths } from "../utils/clipPaths";
import { HEIGHT_CLASS } from "../utils/style";

export default function HeaderWithThreeImageBackground({
  content,
  heightClass = HEIGHT_CLASS.default,
  direction = "right",
}) {
  const {
    LEFT_W,
    MID_W,
    RIGHT_W,
    leftClipPath,
    midClipPath,
    rightClipPath,
    overlapStyle,
  } = getHeaderClipPaths(direction);

  return (
    <div className={`absolute inset-0 flex w-full ${heightClass}`}>
      <HeaderWithThreeImageSlice
        width={LEFT_W}
        clipPath={leftClipPath}
        desktopImage={content.imageOne}
        mobileImage={content.mobileImageOne}
        heightClass={heightClass}
        priority
      />
      <HeaderWithThreeImageSlice
        width={MID_W}
        overlapStyle={overlapStyle}
        clipPath={midClipPath}
        desktopImage={content.imageTwo}
        mobileImage={content.mobileImageTwo}
        heightClass={heightClass}
      />
      <HeaderWithThreeImageSlice
        width={RIGHT_W}
        overlapStyle={overlapStyle}
        clipPath={rightClipPath}
        desktopImage={content.imageThree}
        mobileImage={content.mobileImageThree}
        heightClass={heightClass}
      />
    </div>
  );
}
