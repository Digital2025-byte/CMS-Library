export default function CallUsPhone({ phoneText, href }) {
  if (!phoneText) {
    return null;
  }

  return (
    <a
      dir="ltr"
      href={href || "#"}
      className="text-3xl font-bold tracking-wide text-white transition-colors hover:text-accent-1 md:text-4xl"
    >
      +{phoneText}
    </a>
  );
}
