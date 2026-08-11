"use client";

import PageContentContainer from "@/components/layout/PageContentContainer";
import { typography } from "@/styles/typography";
import LegalAlert from "./LegalAlert";
import LegalBodySection from "./LegalBodySection";
import LegalChip from "./LegalChip";
import LegalContactCard from "./LegalContactCard";

export default function LegalBodyTermsPanel({ lang = "en", content }) {
  if (!content) {
    return null;
  }

  const {
    cover,
    acceptance,
    sections = [],
    contact,
    contactTitle,
    contactDescription,
    limitationTitle,
    effectiveDateLabel,
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
              <LegalChip label={effectiveDateLabel}>
                {cover.effectiveDate}
              </LegalChip>
            </div>
          ) : null}

          {acceptance ? (
            <div className="space-y-3">
              {acceptance.title ? (
                <h3
                  className={`${typography.itemTitle} font-semibold text-primary-1`}
                >
                  {acceptance.title}
                </h3>
              ) : null}
              <LegalAlert
                message={acceptance.message}
                variant="secondary"
              />
            </div>
          ) : null}

          {sections.length ? (
            <div className="mt-8 space-y-8">
              {sections.map((section, index) => (
                <LegalBodySection
                  key={section.title || index}
                  section={section}
                  limitationTitle={limitationTitle}
                />
              ))}
            </div>
          ) : null}

          {contact ? (
            <div className="mt-8">
              {contactTitle || contact.title ? (
                <h3
                  className={`${typography.itemTitle} mb-2 font-semibold text-primary-1`}
                >
                  {contactTitle || contact.title}
                </h3>
              ) : null}
              {contactDescription || contact.description ? (
                <p
                  className={`${typography.body} mb-4 leading-relaxed text-700`}
                >
                  {contactDescription || contact.description}
                </p>
              ) : null}
              <LegalContactCard contact={contact} lang={lang} />
            </div>
          ) : null}
        </div>
      </PageContentContainer>
    </section>
  );
}
