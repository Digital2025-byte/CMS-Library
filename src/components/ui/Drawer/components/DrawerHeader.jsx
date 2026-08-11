import { typography } from "@/styles/typography";

export default function DrawerHeader({ titleId, title, onClose }) {
  return (
    <div className="flex items-center justify-between border-b border-200 px-4 py-4">
      <h2
        id={titleId}
        className={`${typography.itemTitle} font-semibold text-main`}
      >
        {title}
      </h2>
      <button
        type="button"
        onClick={onClose}
        className={`${typography.button} rounded-md px-2 py-1 text-700 hover:bg-200 hover:text-main`}
      >
        Close
      </button>
    </div>
  );
}
