export default function SubSectionBlock({ title, description }) {
  if (!title && !description) {
    return null;
  }

  return (
    <div className="min-w-0 flex-1">
      {title ? (
        <h3 className="mb-2 text-sm font-medium text-ink sm:text-base">
          {title}
        </h3>
      ) : null}
      {description ? (
        <p className="text-sm leading-6 text-muted">{description}</p>
      ) : null}
    </div>
  );
}
