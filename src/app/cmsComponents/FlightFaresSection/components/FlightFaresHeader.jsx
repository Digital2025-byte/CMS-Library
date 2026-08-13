import { typography } from "@/styles/typography";

export default function FlightFaresHeader({ title }) {
  if (!title) {
    return null;
  }

  return (
    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className={`${typography.sectionTitle} font-semibold text-primary-1`}>
        {title}
      </h2>
    </div>
  );
}
