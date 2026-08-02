import { typography } from "@/styles/typography";

export default function AccordionButton({ label, href }) {
  if (!label) {
    return null;
  }

  return (
    <div className="mt-8 flex justify-center sm:mt-10">
      <a
        href={href || "#"}
        className={`${typography.button} inline-flex w-full max-w-xs items-center justify-center rounded-md bg-primary-2 px-6 py-3 font-medium leading-none text-white transition-opacity hover:opacity-90 sm:w-auto sm:max-w-none sm:px-10`}
      >
        {label}
      </a>
    </div>
  );
}
