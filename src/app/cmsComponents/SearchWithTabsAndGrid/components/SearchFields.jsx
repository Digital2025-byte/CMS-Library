import { typography } from "@/styles/typography";

export default function SearchFields({
  placeholder = "",
  searchQuery = "",
  onSearchQueryChange,
}) {
  return (
    <div className="w-full">
      <input
        value={searchQuery}
        onChange={(event) => onSearchQueryChange(event.target.value)}
        placeholder={placeholder}
        className={`${typography.body} w-full rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40`}
        aria-label={placeholder}
      />
    </div>
  );
}
