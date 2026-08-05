import { typography } from "@/styles/typography";

export default function MealsDescriptionItem({
  item,
  striped = false,
  titleClassName = "text-primary-1",
}) {
  if (!item?.title && !item?.description) {
    return null;
  }

  return (
    <div className={`px-4 py-4 ${striped ? "bg-primary-2/10" : "bg-white"}`}>
      {item.title ? (
        <h4
          className={`${typography.itemDescription} font-medium ${titleClassName}`}
        >
          {item.title}
        </h4>
      ) : null}
      {item.description ? (
        <p className={`${typography.body} mt-1 leading-relaxed text-600`}>
          {item.description}
        </p>
      ) : null}
    </div>
  );
}
