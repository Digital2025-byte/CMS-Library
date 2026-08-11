export default function DestinationsCitiesIntro({
  title = "",
  description = "",
}) {
  return (
    <div className="w-full max-w-xl text-white md:max-w-2xl lg:max-w-none lg:pr-4 xl:w-3/4 xl:pr-0">
      {title ? (
        <h1 className="mt-4 text-xl leading-tight font-bold lg:text-3xl">
          {title}
        </h1>
      ) : null}
      {description ? (
        <p className="mt-6 text-lg text-white/80">{description}</p>
      ) : null}
    </div>
  );
}
