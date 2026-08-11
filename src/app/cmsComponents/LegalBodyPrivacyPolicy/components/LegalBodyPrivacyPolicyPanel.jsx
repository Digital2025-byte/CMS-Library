"use client";

import PageContentContainer from "@/components/layout/PageContentContainer";
import LegalChip from "../../LegalBodyTerms/components/LegalChip";
import Introduction from "./Introduction";
import PrivacyCollectSection from "./PrivacyCollectSection";
import PrivacyContactSection from "./PrivacyContactSection";
import PrivacyRightsSection from "./PrivacyRightsSection";
import PrivacyShareSection from "./PrivacyShareSection";
import PrivacySimpleSection from "./PrivacySimpleSection";
import PrivacySummary from "./PrivacySummary";
import UsageGrid from "./UsageGrid";

export default function LegalBodyPrivacyPolicyPanel({ lang = "en", content }) {
  if (!content) {
    return null;
  }

  const {
    effectiveDate,
    introduction,
    summaryPoints = [],
    sections,
    tocTitle,
    infoCollectedLabel,
    shareSituationsLabel,
  } = content;

  return (
    <section
      className="py-12 md:py-16"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <PageContentContainer>
        <div className="rounded-[10px] border border-200 bg-50 p-6 md:p-8">
          {effectiveDate ? (
            <div className="mb-6">
              <LegalChip>{effectiveDate}</LegalChip>
            </div>
          ) : null}

          {introduction ? (
            <Introduction title={introduction.title}>
              {introduction.content}
            </Introduction>
          ) : null}

          <PrivacySummary title={tocTitle} points={summaryPoints} />

          <PrivacyCollectSection
            section={sections?.whatInformationDoWeCollect}
            infoCollectedLabel={infoCollectedLabel}
          />

          {sections?.howDoWeProcessYourInformation ? (
            <PrivacySimpleSection
              title={sections.howDoWeProcessYourInformation.title}
              subtitle={sections.howDoWeProcessYourInformation.subtitle}
              description={sections.howDoWeProcessYourInformation.description}
            >
              <div className="mt-6">
                <UsageGrid
                  items={sections.howDoWeProcessYourInformation.items}
                />
              </div>
            </PrivacySimpleSection>
          ) : null}

          <PrivacyShareSection
            section={sections?.whenAndWithWhomDoWeShare}
            shareSituationsLabel={shareSituationsLabel}
          />

          <PrivacySimpleSection
            title={sections?.doWeUseCookies?.title}
            subtitle={sections?.doWeUseCookies?.subtitle}
            description={sections?.doWeUseCookies?.description}
          />

          <PrivacySimpleSection
            title={sections?.howDoWeHandleSocialLogins?.title}
            subtitle={sections?.howDoWeHandleSocialLogins?.subtitle}
            description={sections?.howDoWeHandleSocialLogins?.description}
          />

          <PrivacySimpleSection
            title={sections?.howLongDoWeKeepYourInformation?.title}
            subtitle={sections?.howLongDoWeKeepYourInformation?.subtitle}
            description={sections?.howLongDoWeKeepYourInformation?.description}
          />

          <PrivacySimpleSection
            title={sections?.doWeCollectInformationFromMinors?.title}
            subtitle={sections?.doWeCollectInformationFromMinors?.subtitle}
            description={sections?.doWeCollectInformationFromMinors?.description}
          />

          <PrivacyRightsSection section={sections?.whatAreYourPrivacyRights} />

          <PrivacySimpleSection
            title={sections?.controlsForDoNotTrack?.title}
            description={sections?.controlsForDoNotTrack?.description}
          />

          <PrivacySimpleSection
            title={sections?.generalInformationRetention?.title}
            description={sections?.generalInformationRetention?.description}
          />

          <PrivacySimpleSection
            title={sections?.doWeMakeUpdates?.title}
            subtitle={sections?.doWeMakeUpdates?.subtitle}
            description={sections?.doWeMakeUpdates?.description}
          />

          <PrivacyContactSection section={sections?.howCanYouContactUs} />

          <PrivacySimpleSection
            title={sections?.howCanYouReviewUpdateOrDelete?.title}
            description={sections?.howCanYouReviewUpdateOrDelete?.description}
          />
        </div>
      </PageContentContainer>
    </section>
  );
}
