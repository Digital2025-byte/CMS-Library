import {
  InspectorSection,
  InspectorSwitch,
  InspectorTabs,
} from "@/components/inspector";
import AccordionWithImagesContentForm from "./AccordionWithImagesContentForm";

function AccordionWithImagesStyleForm({ flags, toggle }) {
  return (
    <div>
      <InspectorSection title="Layout">
        <InspectorSwitch
          checked={flags.showTitleDescription}
          onChange={() => toggle("showTitleDescription")}
          label="Title"
          hint="Show section title and description"
        />
        <InspectorSwitch
          checked={flags.showImagePanel}
          onChange={() => toggle("showImagePanel")}
          label="Image panel"
          hint="Side image that follows the open item"
        />
      </InspectorSection>
    </div>
  );
}

export default function AccordionWithImagesPropsForm({
  content,
  onContentChange,
  flags,
  toggle,
}) {
  return (
    <InspectorTabs
      content={
        <AccordionWithImagesContentForm
          content={content}
          onChange={onContentChange}
        />
      }
      style={
        <AccordionWithImagesStyleForm flags={flags} toggle={toggle} />
      }
    />
  );
}
