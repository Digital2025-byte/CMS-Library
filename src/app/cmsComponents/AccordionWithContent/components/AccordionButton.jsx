import Button from "@/components/ui/Button";

const POSITION_CLASS = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

export default function AccordionButton({
  label,
  href,
  icon,
  cId,
  position = "center",
}) {
  if (!label) {
    return null;
  }

  return (
    <div
      className={`mt-8 flex sm:mt-10 ${POSITION_CLASS[position] ?? POSITION_CLASS.center}`}
    >
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
