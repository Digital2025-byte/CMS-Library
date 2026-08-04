export default function FlightFaresHeader({ title }) {
  if (!title) {
    return null;
  }

  return (
    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-3xl font-semibold tracking-tight text-primary-1">
        {title}
      </h2>
    </div>
  );
}
