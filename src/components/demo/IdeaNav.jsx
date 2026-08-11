"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IDEA_GROUPS } from "./ideaGroups";

const HOME = { href: "/", label: "Home" };

export default function IdeaNav({ tone = "light" }) {
  const pathname = usePathname() || "/";
  const isLight = tone === "light";

  const links = [
    HOME,
    ...IDEA_GROUPS.map((group) => ({
      href: `/ideas/${group.slug}`,
      label: group.label,
    })),
  ];

  return (
    <nav
      aria-label="Component ideas"
      className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {links.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname === link.href || pathname.startsWith(`${link.href}/`);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`shrink-0 rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? "bg-primary-1 text-white"
                : isLight
                  ? "text-50 hover:bg-white/10"
                  : "text-700 hover:bg-100"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
