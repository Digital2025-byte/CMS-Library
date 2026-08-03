import Button from "@/components/ui/Button";

export default function AnimatedImagesCta({
  buttonText,
  buttonLink,
  iconType = "Instagram",
  cId,
}) {
  if (!buttonText || !buttonLink) {
    return null;
  }

  return (
    <Button
      label={buttonText}
      href={buttonLink}
      icon={iconType}
      iconPosition="end"
      cId={cId}
      external
      className="md:py-4"
    />
  );
}
