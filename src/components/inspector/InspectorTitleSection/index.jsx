import InspectorField from "../InspectorField";
import InspectorSection from "../InspectorSection";

export default function InspectorTitleSection({
  idPrefix,
  title,
  description,
  onTitleChange,
  onDescriptionChange,
  heading = "Title",
}) {
  return (
    <InspectorSection title={heading}>
      <InspectorField
        id={`${idPrefix}-title`}
        label="Title"
        value={title}
        onChange={onTitleChange}
      />
      <InspectorField
        id={`${idPrefix}-description`}
        label="Description"
        value={description}
        onChange={onDescriptionChange}
        multiline
      />
    </InspectorSection>
  );
}
