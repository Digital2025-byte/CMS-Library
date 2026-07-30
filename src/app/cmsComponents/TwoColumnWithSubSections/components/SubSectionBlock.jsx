export default function SubSectionBlock({ title, description }) {
  if (!title && !description) {
    return null;
  }

  return (
    <div className="flex-1">
      {title ? (
        <h3 className="mb-2 text-base font-semibold text-ink">{title}</h3>
      ) : null}
      {description ? (
        <p className="text-sm leading-5 text-muted">{description}</p>
      ) : null}
    </div>
  );
}
