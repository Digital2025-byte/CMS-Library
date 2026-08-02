export default function AccordionImagesToggle({ isOpen, onToggle }) {
  return (
    <button
      type="button"
      aria-expanded={isOpen}
      className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-secondary-1 bg-primary-1 text-white transition-colors duration-300 hover:bg-[#004d66] sm:h-10 sm:w-10"
      onClick={(event) => {
        event.stopPropagation();
        onToggle();
      }}
    >
      <span className="text-xl leading-none sm:text-2xl">+</span>
    </button>
  );
}
