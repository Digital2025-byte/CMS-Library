export default function CarouselHeader({ title, description }) {
  if (!title && !description) {
    return null;
  }

  return (
    <div className="mb-4 text-start sm:mb-6 md:mb-8">
      {title ? (
        <h2 className="mb-2 text-base font-semibold text-primary-1 sm:mb-2 md:mb-3 md:text-3xl">
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="max-w-4xl text-sm text-primary-1 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
