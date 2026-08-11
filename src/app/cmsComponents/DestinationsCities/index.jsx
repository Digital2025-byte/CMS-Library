"use client";

import DestinationsCitiesPanel from "./components/DestinationsCitiesPanel";
import { getDestinationsCitiesContent } from "./utils/helpers";

/**
 * DestinationsCities — stacked destination cards with drag / tap navigation.
 */
export default function DestinationsCities({
  lang = "en",
  data,
  posParams = "gb",
}) {
  const { title, description, cities, hasContent } =
    getDestinationsCitiesContent(data, lang);

  if (!hasContent) {
    return null;
  }

  return (
    <DestinationsCitiesPanel
      lang={lang}
      title={title}
      description={description}
      cities={cities}
      posParams={posParams}
    />
  );
}
