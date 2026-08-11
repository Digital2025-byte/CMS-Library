"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPONENT_NAV_ITEMS } from "@/components/ui/ComponentNav";
import { getDocsHref, IDEA_GROUPS } from "./ideaGroups";

const HOME = { href: "/", label: "Home" };

function getSectionLabel(id) {
  return COMPONENT_NAV_ITEMS.find((item) => item.id === id)?.label || id;
}

export default function IdeaNav({ tone = "light" }) {
  const pathname = usePathname() || "/";
  const isLight = tone === "light";
  const [openSlug, setOpenSlug] = useState(null);

  const linkClass = (isActive) =>
    `shrink-0 rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors ${
      isActive
        ? "bg-primary-1 text-white"
        : isLight
          ? "text-50 hover:bg-white/10"
          : "text-700 hover:bg-100"
    }`;

  return (
    <nav
      aria-label="Component ideas"
      className="flex min-w-0 flex-1 items-center gap-1 overflow-visible"
    >
      <Link
        href={HOME.href}
        className={linkClass(pathname === "/")}
      >
        {HOME.label}
      </Link>

      {IDEA_GROUPS.map((group) => {
        const href = `/ideas/${group.slug}`;
        const isActive =
          pathname === href ||
          pathname.startsWith(`${href}/`) ||
          group.sectionIds.some((id) => pathname === getDocsHref(id));
        const isOpen = openSlug === group.slug;

        return (
          <div
            key={group.slug}
            className="relative shrink-0"
            onMouseEnter={() => setOpenSlug(group.slug)}
            onMouseLeave={() => setOpenSlug(null)}
          >
            <Link
              href={href}
              className={linkClass(isActive)}
              aria-expanded={isOpen}
              aria-haspopup="menu"
            >
              {group.label}
            </Link>

            {isOpen ? (
              <div
                role="menu"
                aria-label={group.label}
                className="absolute start-0 top-full z-[80] mt-1 max-h-[min(70vh,24rem)] w-[min(92vw,16rem)] overflow-y-auto rounded-lg border border-200 bg-background py-1 shadow-lg"
              >
                {group.sectionIds.map((id) => {
                  const docsHref = getDocsHref(id);
                  const itemActive = pathname === docsHref;

                  return (
                    <Link
                      key={id}
                      href={docsHref}
                      role="menuitem"
                      className={`block px-3 py-2 text-sm transition-colors ${
                        itemActive
                          ? "bg-primary-1/10 font-medium text-primary-1"
                          : "text-700 hover:bg-100 hover:text-primary-1"
                      }`}
                    >
                      {getSectionLabel(id)}
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}
