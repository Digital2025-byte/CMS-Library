"use client";

import SearchWithTabsAndGridPanel from "./components/SearchWithTabsAndGridPanel";
import { useSearchWithTabsAndGrid } from "./hooks/useSearchWithTabsAndGrid";
import { getSearchWithTabsAndGridContent } from "./utils/helpers";

const SearchWithTabsAndGrid = ({
  lang = "en",
  data,
  posParams = "gb",
  cId,
}) => {
  const content = getSearchWithTabsAndGridContent(data, lang);
  const search = useSearchWithTabsAndGrid({
    sights: content.sights,
    tags: content.tags,
    allLabel: content.allLabel,
  });

  if (!content.hasContent) {
    return null;
  }

  return (
    <SearchWithTabsAndGridPanel
      lang={lang}
      posParams={posParams}
      cId={cId}
      content={content}
      search={search}
    />
  );
};

export default SearchWithTabsAndGrid;
