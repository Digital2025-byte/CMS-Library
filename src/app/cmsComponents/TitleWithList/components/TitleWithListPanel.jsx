import { InfoIcon } from "@phosphor-icons/react";
import PageContentContainer from "@/components/layout/PageContentContainer";
import { typography } from "@/styles/typography";

export default function TitleWithListPanel({
  lang = "en",
  title,
  items = [],
}) {
  const isRtl = lang === "ar";

  return (
    <section
      className="w-full bg-100 py-8 lg:py-10"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <PageContentContainer>
        <div className="text-primary-1">
          {title ? (
            <h2
              className={`${typography.itemTitle} flex items-center gap-2 font-medium text-primary-1`}
            >
              <InfoIcon size={24} weight="regular" aria-hidden className="shrink-0" />
              <span>{title}</span>
            </h2>
          ) : null}

          {items.length ? (
            <ul
              className={`${typography.body} mt-3 space-y-3 leading-relaxed text-primary-1`}
            >
              {items.map((item, index) => (
                <li
                  key={`${String(item).slice(0, 32)}-${index}`}
                  className="flex items-start gap-2.5"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-2"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </PageContentContainer>
    </section>
  );
}
