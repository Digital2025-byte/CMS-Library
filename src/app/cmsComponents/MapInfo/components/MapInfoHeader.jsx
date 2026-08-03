export default function MapInfoHeader({ title, description }) {
  if (!title && !description) {
    return null;
  }

  return (
    <div className="p-2 pt-4">
      {title ? (
        <h2 className="text-2xl font-bold text-primary-1 md:text-3xl">
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="mb-3 mt-2 px-0.5 text-primary-1">
          {description}
        </p>
      ) : null}
    </div>
  );
}
