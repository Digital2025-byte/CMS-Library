import PageContentContainer from "@/components/layout/PageContentContainer";
import { typography } from "@/styles/typography";
import DataTable from "./DataTable";
import DataTableImage from "./DataTableImage";
import DataTableNote from "./DataTableNote";

export default function DataTableWithImagePanel({
  lang = "en",
  title = "",
  headers = [],
  rows = [],
  note = "",
  imageSrc = "",
  imageAlt = "",
}) {
  const isRtl = lang === "ar";

  return (
    <section
      className="w-full bg-100 py-8 lg:py-12"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <PageContentContainer>
        {title ? (
          <h2
            className={`${typography.sectionTitle} mb-8 font-semibold text-primary-1`}
          >
            {title}
          </h2>
        ) : null}

        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <DataTable headers={headers} rows={rows} isRtl={isRtl} />
            <DataTableNote note={note} />
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <DataTableImage imageSrc={imageSrc} imageAlt={imageAlt} />
          </div>
        </div>
      </PageContentContainer>
    </section>
  );
}
