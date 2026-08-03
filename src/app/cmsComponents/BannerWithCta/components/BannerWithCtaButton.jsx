import Button from "@/components/ui/Button";

export default function BannerWithCtaButton({ label, href, icon, cId }) {
  if (!label) {
    return null;
  }

  return (
    <Button
      label={label}
      href={href || "#"}
      icon={icon}
      cId={cId}
      className="mt-5"
    />
  );
}
