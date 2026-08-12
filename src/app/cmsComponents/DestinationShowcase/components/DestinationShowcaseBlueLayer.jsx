/**
 * Teal wash over the hero photo — large blurred main blob + spread glow.
 * Matches Figma: bg main, box-shadow spread, blur(175px).
 */
export default function DestinationShowcaseBlueLayer() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -left-[8%] top-[38%] z-10 h-[78%] w-[125%] bg-main blur-[113px]  md:top-[36%] md:h-[83%]"
    />
  );
}
