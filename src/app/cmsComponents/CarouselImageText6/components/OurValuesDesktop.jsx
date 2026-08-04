"use client";

import { useState } from "react";
import { typography } from "@/styles/typography";

export default function OurValuesDesktop({ lang = "en", items = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items.length) {
    return null;
  }

  return (
    <div
      className="flex gap-0 overflow-hidden"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {items.map((item, index) => {
        const isActive = activeIndex === index;
        const otherIndexes = items
          .map((_, i) => i)
          .filter((i) => i !== activeIndex);
        const nonActiveOrder = otherIndexes.indexOf(index);

        const flexClass = isActive
          ? "flex-[3]"
          : nonActiveOrder === 0
            ? "flex-[1.1]"
            : "flex-[1.6]";

        return (
          <div
            key={`${item.title}-${index}`}
            onClick={() => setActiveIndex(index)}
            className={`relative mt-4 h-[90vh] flex-shrink-0 cursor-pointer overflow-hidden transition-all duration-700 ${flexClass}`}
          >
            {item.imageUrl ? (
              <img
                src={item.imageUrl}
                alt={item.imageAlt || item.title || ""}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${
                  isActive ? "grayscale-0" : "grayscale"
                }`}
              />
            ) : null}

            <div className="absolute inset-0 z-10 bg-secondary-2/10" />

            {isActive ? (
              <div className="absolute top-10 z-20 m-3 rounded-xl p-3 text-white opacity-90 transition-opacity duration-500">
                <h3
                  className={`${typography.itemTitle} font-bold`}
                  style={{ textShadow: "0 4px 8px rgb(0 0 0 / 0.45)" }}
                >
                  {item.title}
                </h3>
              </div>
            ) : null}

            <div
              className={`absolute bottom-20 z-20 m-3 ml-12 max-w-lg rounded-[10px] bg-[#054E72]/50 px-8 py-4 text-white backdrop-blur-[20px] transition-opacity ${
                isActive
                  ? "opacity-100 delay-300 duration-600"
                  : "pointer-events-none opacity-0 duration-100"
              }`}
            >
              <p
                className={`${typography.body} text-start leading-relaxed text-white`}
              >
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
