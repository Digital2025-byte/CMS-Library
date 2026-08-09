export default function SliderContainer({ lang, children }) {
  // Always LTR shell — parent `dir=rtl` breaks react-slick track position.
  // Arabic text direction is applied inside each slide's content.
  return (
    <div className="w-full" lang={lang} dir="ltr">
      {children}
    </div>
  );
}
