import Link from "next/link";
import { getIconByName } from "@/constants/Icons";
import { typography } from "@/styles/typography";
import { withCampaignPath } from "@/utils/withCampaignPath";

export default function AnimatedImagesCta({
  buttonText,
  buttonLink,
  iconType = "Instagram",
  cId,
}) {
  if (!buttonText || !buttonLink) {
    return null;
  }

  const Icon = getIconByName(iconType) || getIconByName("Instagram");

  return (
    <Link
      href={withCampaignPath(buttonLink, cId)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${typography.button} inline-flex items-center gap-2 rounded-lg bg-primary-2 px-6 py-3 font-medium text-white transition-opacity hover:opacity-90 md:px-8 md:py-4`}
    >
      <span>{buttonText}</span>
      {Icon ? <Icon size={20}  /> : null}
    </Link>
  );
}
