"use client";

import HeaderWithThreeImagePanel from "./components/HeaderWithThreeImagePanel";
import { getHeaderWithThreeImageContent } from "./utils/helpers";

const HeaderWithThreeImage = ({ lang = "en", data }) => {
  const {
    title,
    description,
    imageOne,
    imageTwo,
    imageThree,
    mobileImageOne,
    mobileImageTwo,
    mobileImageThree,
    hasContent,
  } = getHeaderWithThreeImageContent(data, lang);

  if (!hasContent) {
    return null;
  }

  return (
    <HeaderWithThreeImagePanel
      lang={lang}
      title={title}
      description={description}
      imageOne={imageOne}
      imageTwo={imageTwo}
      imageThree={imageThree}
      mobileImageOne={mobileImageOne}
      mobileImageTwo={mobileImageTwo}
      mobileImageThree={mobileImageThree}
    />
  );
};

export default HeaderWithThreeImage;
