"use client";

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
    <div
      className="w-full rounded-xl px-6 py-12 text-center"
      style={{
        background: "linear-gradient(90deg, var(--color-primary-800) 0%, var(--color-main) 100%)",
      }}
    >
      <CallUsIcon />

      {upperText ? (
        <p className="mb-2 text-sm text-white/80">{upperText}</p>
      ) : null}

      <CallUsPhone phoneText={mainText} href={phoneHref} />

      {bottomText ? (
        <p className="mx-auto mt-4 max-w-xl text-sm text-white/60">
          {bottomText}
        </p>
      ) : null}
    </div>
  );
};

export default CallUs;
