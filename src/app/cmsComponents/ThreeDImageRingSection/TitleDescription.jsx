"use client";

import React from "react";

/**
 * TitleDescription Component
 * Displays title and description for the 3D Image Ring section
 * 
 * @param {Object} props
 * @param {string} props.title - Section title
 * @param {string} props.description - Section description
 * @param {string} props.backgroundColor - Background color
 */
const TitleDescription = ({ title, description, backgroundColor }) => {
  if (!title && !description) {
    return null;
  }

  return (
    <div className="w-full" style={{ backgroundColor: backgroundColor }}>
      <div className="w-full px-4 md:px-6 lg:px-8 pt-8 md:pt-12 lg:pt-16 z-20">
        <div className="flex flex-col md:flex-row md:justify-evenly md:items-center gap-4 md:gap-8">
          {title && (
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center md:text-start md:whitespace-nowrap">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-start text-base md:text-base text-white/90 max-w-3xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TitleDescription;
