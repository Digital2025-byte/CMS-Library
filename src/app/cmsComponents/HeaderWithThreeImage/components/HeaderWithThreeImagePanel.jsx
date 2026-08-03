import HeaderWithThreeImageBackground from "./HeaderWithThreeImageBackground";
import HeaderWithThreeImageContent from "./HeaderWithThreeImageContent";

export default function HeaderWithThreeImagePanel({
  lang = "en",
  title,
  description,
  imageOne,
  imageTwo,
  imageThree,
  mobileImageOne,
  mobileImageTwo,
  mobileImageThree,
}) {
  return (
    <section className="relative flex min-h-[50vh] w-full items-center justify-center overflow-hidden">
      <HeaderWithThreeImageBackground
        lang={lang}
        imageOne={imageOne}
        imageTwo={imageTwo}
        imageThree={imageThree}
        mobileImageOne={mobileImageOne}
        mobileImageTwo={mobileImageTwo}
        mobileImageThree={mobileImageThree}
      />

      <HeaderWithThreeImageContent
        lang={lang}
        title={title}
        description={description}
      />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-main/50 via-main/50 to-main/0" />
    </section>
  );
}
