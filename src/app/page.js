import AccordionWithContent from "@/app/cmsComponents/AccordionWithContent";
import AccordionContainer from "@/app/cmsComponents/AccordionWithContent/AccordionContainer";
import { accordionData } from "@/app/cmsComponents/AccordionWithContent/data";

export default function Home() {
  return (
    <main>
      <AccordionContainer lang="en">
        <AccordionWithContent data={accordionData} />
      </AccordionContainer>
    </main>
  );
}
