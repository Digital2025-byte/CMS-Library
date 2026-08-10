import { UnderlinedFirstWord } from "@/utils/UnderlinedFirstWord";
import { typography } from "@/styles/typography";

export default function DualImageTextTitle({
  text = "",
  underlineFirstWord = false,
}) {
  if (!text) {
    return null;
  }

  if (underlineFirstWord) {
    return <UnderlinedFirstWord text={text} underline />;
  }

  return (
    <h2 className={`${typography.sectionTitle} font-semibold text-primary-1`}>
      {text}
    </h2>
  );
}
