export default function CarouselItemTitle({ title = "" }) {
  if (!title) return null;

  return (
    <h1 className="px-4 text-base font-semibold text-white lg:text-[28px] lg:text-4xl">
      {title}
    </h1>
  );
}
