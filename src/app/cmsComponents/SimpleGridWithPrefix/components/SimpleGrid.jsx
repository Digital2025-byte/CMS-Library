import SimpleGridCard from "./SimpleGridCard";

export default function SimpleGrid({ items, prefix, chip, lang, cId }) {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <SimpleGridCard
          key={`${item.title}-${item.userName}-${index}`}
          item={item}
          prefix={prefix}
          chip={item.chip || chip}
          lang={lang}
          cId={cId}
        />
      ))}
    </div>
  );
}
