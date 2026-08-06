"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CARDS_PER_PAGE } from "../utils/constants";

export function useSearchWithTabsAndGrid({
  sights = [],
  tags = [],
  allLabel = "All",
}) {
  const [searchName, setSearchName] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [activePageIndex, setActivePageIndex] = useState(0);
  const componentTopRef = useRef(null);
  const hasMountedRef = useRef(false);

  const filterNames = useMemo(() => {
    const names = tags.map((tag) => tag?.name).filter(Boolean);
    return [
      "All",
      ...names.filter((name) => name !== "All" && name !== allLabel),
    ];
  }, [tags, allLabel]);

  const filterIconMap = useMemo(() => {
    const map = {};
    tags.forEach((tag) => {
      if (tag?.name && tag?.icon) {
        map[tag.name] = tag.icon;
      }
    });
    return map;
  }, [tags]);

  const filteredCards = useMemo(() => {
    return sights.filter((card) => {
      const city = String(card?.cityName || "").toLowerCase();
      const title = String(card?.name || "").toLowerCase();
      const matchesFilter =
        activeFilter === "All" || card?.tag === activeFilter;
      const nameTerm = searchName.trim().toLowerCase();
      const matchesName = !nameTerm || title.includes(nameTerm);
      const cityTerm = searchCity.trim().toLowerCase();
      const matchesCity = !cityTerm || city.includes(cityTerm);
      return matchesFilter && matchesName && matchesCity;
    });
  }, [sights, searchName, searchCity, activeFilter]);

  const pageCount = Math.ceil(filteredCards.length / CARDS_PER_PAGE) || 0;

  const paginatedCards = useMemo(() => {
    const start = activePageIndex * CARDS_PER_PAGE;
    return filteredCards.slice(start, start + CARDS_PER_PAGE);
  }, [filteredCards, activePageIndex]);

  useEffect(() => {
    setActivePageIndex(0);
  }, [searchName, searchCity, activeFilter]);

  useEffect(() => {
    if (pageCount === 0 && activePageIndex !== 0) {
      setActivePageIndex(0);
      return;
    }
    if (pageCount > 0 && activePageIndex > pageCount - 1) {
      setActivePageIndex(pageCount - 1);
    }
  }, [activePageIndex, pageCount]);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }
    componentTopRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [activePageIndex]);

  return {
    searchName,
    setSearchName,
    searchCity,
    setSearchCity,
    activeFilter,
    setActiveFilter,
    activePageIndex,
    setActivePageIndex,
    componentTopRef,
    filterNames,
    filterIconMap,
    filteredCards,
    paginatedCards,
    pageCount,
    handlePrevPage: () => setActivePageIndex((prev) => Math.max(prev - 1, 0)),
    handleNextPage: () =>
      setActivePageIndex((prev) =>
        Math.min(prev + 1, Math.max(pageCount - 1, 0))
      ),
  };
}
