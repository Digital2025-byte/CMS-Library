import AnimatedFallingCards from "./AnimatedFallingCards";
import AnimatedImagesContent from "./AnimatedImagesContent";

export default function AnimatedImagesPanel({
  preTitle,
  title,
  buttonText,
  buttonLink,
  iconType,
  images,
  cId,
}) {
  return (
    <section className="relative flex min-h-[700px] w-full flex-col overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-100/50 to-background" />

      <AnimatedFallingCards images={images} />

      <AnimatedImagesContent
        preTitle={preTitle}
        title={title}
        buttonText={buttonText}
        buttonLink={buttonLink}
        iconType={iconType}
        cId={cId}
      />
    </section>
  );
}
