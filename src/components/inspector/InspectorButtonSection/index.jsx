import InspectorField from "../InspectorField";
import InspectorLink from "../InspectorLink";
import InspectorSection from "../InspectorSection";

export default function InspectorButtonSection({
  idPrefix,
  label,
  href,
  linkType,
  pages,
  onLabelChange,
  onLinkChange,
  heading = "Button",
}) {
  return (
    <InspectorSection title={heading}>
      <InspectorField
        id={`${idPrefix}-label`}
        label="Label"
        value={label}
        onChange={onLabelChange}
      />
      <InspectorLink
        id={`${idPrefix}-link`}
        type={linkType}
        href={href}
        pages={pages}
        onChange={onLinkChange}
      />
    </InspectorSection>
  );
}
