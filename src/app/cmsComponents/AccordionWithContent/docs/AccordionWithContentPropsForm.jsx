import { PaintBrushIcon, PencilSimpleIcon } from "@phosphor-icons/react";
import Tabs, { Tab, TabsList, TabsPanel } from "@/components/ui/Tabs";
import { InspectorChoose, InspectorSection, InspectorSwitch } from "@/components/ui/Inspector";
import AccordionWithContentContentForm from "./AccordionWithContentContentForm";

const BUTTON_POSITIONS = ["left", "center", "right"];

function AccordionWithContentStylingForm({
  flags,
  toggle,
  buttonPosition,
  setButtonPosition,
}) {
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
          checked={flags.showButton}
          onChange={() => toggle("showButton")}
          label="Button"
          hint="Show CTA under the items"
        />
      </InspectorSection>

      {flags.showButton ? (
        <InspectorSection title="Button">
          <InspectorChoose
            label="Alignment"
            name="buttonPosition"
            value={buttonPosition}
            options={BUTTON_POSITIONS}
            onChange={setButtonPosition}
          />
        </InspectorSection>
      ) : null}
    </div>
  );
}

export default function AccordionWithContentPropsForm({
  content,
  onContentChange,
  flags,
  toggle,
  buttonPosition,
  setButtonPosition,
}) {
  return (
    <Tabs defaultValue="content">
      <TabsList>
        <Tab value="content">
          <PencilSimpleIcon size={18} weight="regular" aria-hidden />
          Content
        </Tab>
        <Tab value="styling">
          <PaintBrushIcon size={18} weight="regular" aria-hidden />
          Style
        </Tab>
      </TabsList>

      <TabsPanel value="content">
        <AccordionWithContentContentForm
          content={content}
          onChange={onContentChange}
        />
      </TabsPanel>

      <TabsPanel value="styling">
        <AccordionWithContentStylingForm
          flags={flags}
          toggle={toggle}
          buttonPosition={buttonPosition}
          setButtonPosition={setButtonPosition}
        />
      </TabsPanel>
    </Tabs>
  );
}
