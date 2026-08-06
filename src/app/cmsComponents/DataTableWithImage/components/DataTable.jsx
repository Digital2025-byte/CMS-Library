import { typography } from "@/styles/typography";

export default function DataTable({ headers = [], rows = [], isRtl = false }) {
  if (!rows.length) {
    return null;
  }

  return (
    <div className="overflow-hidden rounded-xl border border-[#E6EBF0] bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[320px] border-collapse text-center">
          {headers.length ? (
            <thead>
              <tr className="bg-white">
                {headers.map((header, index) => (
                  <th
                    key={`${header || "header"}-${index}`}
                    className={`${typography.body} px-4 py-5 font-medium text-700 lg:px-6`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
          ) : null}
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={`row-${rowIndex}`}
                className={
                  rowIndex % 2 === 0 ? "bg-primary-2/20" : "bg-white"
                }
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={`row-${rowIndex}-cell-${cellIndex}`}
                    className={`${typography.body} px-4 py-5 text-700 lg:px-6`}
                    dir={isRtl ? "rtl" : undefined}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
