import Button from "@/components/ui/Button";

export default function AccordionButton({ label, href, icon, cId }) {
  if (!label) {
    return null;
  }

  return (
    <div className="mt-8 flex justify-center sm:mt-10">
      <Button
        label={label}
        href={href || "#"}
        icon={icon}
        cId={cId}
        className="w-full max-w-xs leading-none sm:w-auto sm:max-w-none sm:px-10"
      />
    </div>
  );
}
