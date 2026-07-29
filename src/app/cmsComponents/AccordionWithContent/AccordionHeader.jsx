export default function AccordionHeader({ title, description }) {
  if (!title && !description) {
    return null;
  }

  return (
    <div className="mb-8">
      {title && (
        <h2 className="text-2xl font-semibold tracking-tight text-primary-1 lg:text-3xl">
          {title}
        </h2>
      )}
      {description ? (
        <p className="mt-2 text-sm text-gray-600 lg:text-base">{description}</p>
      ) : null}
    </div>
  );
}
