"use client";

import Image from "next/image";
import PageContentContainer from "@/components/layout/PageContentContainer";
import { typography } from "@/styles/typography";

export default function FormFooterPanel({
  lang = "en",
  followTitle = "",
  followDescription = "",
  contactTitle = "",
  email = "",
  website = "",
  copyright = "",
  phone = "",
  phoneHref = "",
  socialLinks = [],
}) {
  const websiteLabel = String(website || "")
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

  return (
    <footer dir={lang === "ar" ? "rtl" : "ltr"} className="w-full">
      <div className="bg-main px-4 py-5 text-50">
        <PageContentContainer className="mx-auto max-w-[600px]">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="min-w-[200px] flex-1 px-2">
              {followTitle ? (
                <div className={`${typography.itemTitle} mb-1 font-semibold`}>
                  {followTitle}
                </div>
              ) : null}
              {followDescription ? (
                <p className={`${typography.caption} leading-5`}>
                  {followDescription}
                </p>
              ) : null}
              {socialLinks.length ? (
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {socialLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        alt={item.alt || ""}
                        src={item.src}
                        width={24}
                        height={24}
                      />
                    </a>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="min-w-[200px] flex-1 px-2">
              {contactTitle ? (
                <div className={`${typography.itemTitle} mb-1 font-semibold`}>
                  {contactTitle}
                </div>
              ) : null}
              <div className={`${typography.caption} leading-5`}>
                {phone ? (
                  <div>
                    <a href={phoneHref || `tel:${phone}`} className="text-50">
                      {phone}
                    </a>
                  </div>
                ) : null}
                {email ? (
                  <div>
                    <a
                      href={`mailto:${email}`}
                      className="text-50 underline"
                    >
                      {email}
                    </a>
                  </div>
                ) : null}
                {website ? (
                  <div>
                    <a
                      href={website}
                      target="_blank"
                      rel="noreferrer"
                      className="text-50 underline"
                    >
                      {websiteLabel}
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </PageContentContainer>
      </div>

      {copyright ? (
        <div className="px-4 py-2">
          <PageContentContainer className="mx-auto max-w-[600px] text-center">
            <strong className={`${typography.caption} text-main`}>
              {copyright}
            </strong>
          </PageContentContainer>
        </div>
      ) : null}
    </footer>
  );
}
