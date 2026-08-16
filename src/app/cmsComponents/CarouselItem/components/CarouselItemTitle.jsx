import { typography } from "@/styles/typography";

export default function CarouselItemTitle({ title = "" }) {
  if (!title) return null;

  return (
    <h1 className={` ${typography.sectionTitle} font-semibold text-white `}>
      {title}
    </h1>
  );
}
