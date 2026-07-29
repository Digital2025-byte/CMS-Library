import AccordionWithContent from "@/app/cmsComponents/AccordionWithContent";
import { accordionData } from "@/app/cmsComponents/AccordionWithContent/data";

export default function Home() {
  return (
    <main>
      <AccordionWithContent lang="en" data={accordionData} />
    </main>
  );
}
