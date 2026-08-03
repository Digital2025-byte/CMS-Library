import { typography } from "@/styles/typography";
import PageContentContainer from "@/components/layout/PageContentContainer";

export default function OppositeScrollHeader({ title, description }) {
  if (!title && !description) {
    return null;
  }

  return (
    <PageContentContainer className="mb-8 flex flex-col items-center justify-center text-center">
      {title ? (
        <h2 className={`${typography.sectionTitle} font-bold text-white`}>
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className={`${typography.sectionDescription} mt-1 font-normal text-white`}>
          {description}
        </p>
      ) : null}
    </PageContentContainer>
  );
}
