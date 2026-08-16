"use client";

import { typography } from "@/styles/typography";
import CallUsIcon from "./components/CallUsIcon";
import CallUsPhone from "./components/CallUsPhone";
import { getCallUsContent } from "./utils/helpers";

const CallUs = ({ data }) => {
  const { upperText, mainText, bottomText, phoneHref, hasContent } =
    getCallUsContent(data);

  if (!hasContent) {
    return null;
  }

  return (
    <div className="flex w-full flex-col items-center rounded-2xl bg-main px-6 py-10 text-center sm:px-10 sm:py-12 lg:py-16">
      <CallUsIcon />

      {upperText ? (
        <p className={`${typography.body} mb-2 text-white`}>{upperText}</p>
      ) : null}

      <CallUsPhone phoneText={mainText} href={phoneHref} />

      {bottomText ? (
        <p
          className={`${typography.itemDescription} mx-auto mt-4 max-w-2xl text-white`}
        >
          {bottomText}
        </p>
      ) : null}
    </div>
  );
};

export default CallUs;
