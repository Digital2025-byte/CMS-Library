export default function AccordionButton({ label, href }) {
  if (!label) {
    return null;
  }

  return (
    <div className="mt-10 flex justify-center">
      <a
        href={href || "#"}
        className="inline-flex items-center justify-center rounded-md bg-accent-1 px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:px-10 sm:text-base"
      >
        {label}
      </a>
    </div>
  );
}
