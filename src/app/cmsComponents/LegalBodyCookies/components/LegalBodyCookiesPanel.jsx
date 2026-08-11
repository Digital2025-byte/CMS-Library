"use client";

import PageContentContainer from "@/components/layout/PageContentContainer";
import { typography } from "@/styles/typography";
import LegalChip from "../../LegalBodyTerms/components/LegalChip";
import LegalContactCard from "../../LegalBodyTerms/components/LegalContactCard";
import LegalCardInfo from "../../LegalBodyTerms/components/LegalCardInfo";
import LegalCookiesIntroduction from "./LegalCookiesIntroduction";
import LifespanSection from "./LifespanSection";
import ManagePreferences from "./ManagePreferences";
import ThirdPartyCookies from "./ThirdPartyCookies";

export default function LegalBodyCookiesPanel({ lang = "en", content }) {
  if (!content) {
    return null;
  }

  const {
    cover,
    introduction,
    typesTitle,
    types = [],
    thirdParty,
    preferences,
    lifespan,
    updates,
    contact,
  } = content;

  return (
    <section
      className="py-12 md:py-16"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <PageContentContainer>
        <div className="rounded-[10px] border border-200 bg-50 p-6 md:p-8">
          {cover?.effectiveDate ? (
            <div className="mb-6">
              <LegalChip>{cover.effectiveDate}</LegalChip>
            </div>
          ) : null}

          {introduction ? (
            <LegalCookiesIntroduction title={introduction.title}>
              {introduction.content}
            </LegalCookiesIntroduction>
          ) : null}

          {types.length ? (
            <div className="mb-6">
              <h2
                className={`${typography.sectionTitle} mb-4 font-semibold text-primary-1`}
              >
                {typesTitle || "Types of Cookies We Use"}
              </h2>
              <div className="space-y-4">
                {types.map((item, index) => (
                  <LegalCardInfo
                    key={item.title || index}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          ) : null}

          <ThirdPartyCookies
            title={thirdParty?.title}
            description={thirdParty?.description}
            providers={thirdParty?.providers}
          />

          <ManagePreferences
            title={preferences?.title}
            intro={preferences?.intro}
            methods={preferences?.methods}
            note={preferences?.note}
          />

          <LifespanSection
            title={lifespan?.title}
            intro={lifespan?.intro}
            items={lifespan?.items}
          />

          {updates || contact ? (
            <div className="mt-8">
              {updates ? (
                <>
                  {updates.title ? (
                    <h3
                      className={`${typography.itemTitle} mb-2 font-semibold text-primary-1`}
                    >
                      {updates.title}
                    </h3>
                  ) : null}
                  {updates.description ? (
                    <p
                      className={`${typography.body} mb-4 leading-relaxed text-700`}
                    >
                      {updates.description}
                    </p>
                  ) : null}
                </>
              ) : null}
              {contact ? (
                <LegalContactCard contact={contact} lang={lang} />
              ) : null}
            </div>
          ) : null}
        </div>
      </PageContentContainer>
    </section>
  );
}
