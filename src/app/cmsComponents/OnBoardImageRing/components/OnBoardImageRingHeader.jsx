import { typography } from "@/styles/typography";
import PageContentContainer from "@/components/layout/PageContentContainer";

export default function OnBoardImageRingHeader({ title, description }) {
  if (!title && !description) return null;

  return (
    <PageContentContainer className="pt-8 sm:pt-12 lg:pt-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-12">
        {title ? (
          <h2
            className={`${typography.sectionTitle} shrink-0 font-semibold text-50`}
          >
            {title}
          </h2>
        ) : null}
        {description ? (
          <p
            className={`${typography.sectionDescription} max-w-2xl text-50/90 md:text-start`}
          >
            {description}
          </p>
        ) : null}
      </div>
    </PageContentContainer>
  );
}
