import GridInfoCard from "./GridInfoCard";

export default function GridInfoGrid({ items, lang }) {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-4 px-2.5 sm:grid-cols-2 sm:gap-4.5 lg:grid-cols-4">
      {items.map((item, index) => (
        <GridInfoCard
          key={`${item.name}-${item.city}-${index}`}
          item={item}
          lang={lang}
        />
      ))}
    </div>
  );
}
