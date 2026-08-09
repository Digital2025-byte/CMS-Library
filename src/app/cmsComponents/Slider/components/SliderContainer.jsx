export default function SliderContainer({ lang, children }) {
  // Always LTR shell — parent `dir=rtl` breaks react-slick track position.
  // Arabic text direction is applied inside each slide's content.
  return (
    <div
      className="relative w-full overflow-hidden leading-none"
      lang={lang}
      dir="ltr"
    >
      {children}
    </div>
  );
}
