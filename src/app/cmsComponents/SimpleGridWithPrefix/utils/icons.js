import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  PinterestLogoIcon,
  SnapchatLogoIcon,
  TelegramLogoIcon,
  ThreadsLogoIcon,
  TiktokLogoIcon,
  WhatsappLogoIcon,
  XLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";

export const ICON_MAP = {
  facebook: FacebookLogoIcon,
  instagram: InstagramLogoIcon,
  linkedin: LinkedinLogoIcon,
  telegram: TelegramLogoIcon,
  threeds: ThreadsLogoIcon,
  threads: ThreadsLogoIcon,
  tik_tok: TiktokLogoIcon,
  tiktok: TiktokLogoIcon,
  whatsapp: WhatsappLogoIcon,
  x: XLogoIcon,
  youtube: YoutubeLogoIcon,
  snapchat: SnapchatLogoIcon,
  pinterest: PinterestLogoIcon,
};

/**
 * Map icon values from API to ICON_MAP keys.
 * Handle special cases: 'twitter' -> 'x', 'tiktok' -> 'tik_tok'
 */
export function mapIconToKey(icon) {
  if (!icon) return null;

  const normalizedIcon = String(icon).toLowerCase().trim();

  if (normalizedIcon === "twitter") return "x";
  if (normalizedIcon === "tiktok") return "tik_tok";

  return normalizedIcon;
}

export function getIconComponent(icon) {
  const iconKey = mapIconToKey(icon);
  return iconKey && ICON_MAP[iconKey] ? ICON_MAP[iconKey] : null;
}
