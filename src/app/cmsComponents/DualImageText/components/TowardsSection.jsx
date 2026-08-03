"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { typography } from "@/styles/typography";

export default function TowardsSection({ lang = "en", items = [] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });

  const first = items[0] || {};
  const second = items[1] || {};

  return (
    <section
      ref={ref}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="flex min-h-screen items-center justify-center bg-200"
    >
      <motion.div
        className="mb-12 mt-8 grid w-full max-w-[1430px] grid-cols-1 lg:grid-cols-2"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 2, ease: "easeIn" }}
      >
        <div className="order-2 max-w-xl p-4 lg:order-1">
          {first.title ? (
            <h2
              className={`${typography.sectionTitle} mt-0 font-semibold text-primary-1 lg:mt-10`}
            >
              {first.title}
            </h2>
          ) : null}
          {first.description ? (
            <p className={`${typography.body} mt-2 leading-relaxed text-700`}>
              {first.description}
            </p>
          ) : null}
        </div>

        <div className="order-1 flex max-w-xl justify-center p-6 lg:order-2">
          {first.imageUrl ? (
            <Image
              src={encodeURI(first.imageUrl)}
              alt={first.imageAlt}
              width={1000}
              height={1000}
              className="h-auto w-full object-cover shadow-[10px_10px_0_0_var(--color-main)]"
              priority
              quality={75}
            />
          ) : null}
        </div>

        <div className="order-3 flex max-w-xl justify-center p-6 lg:order-3">
          {second.imageUrl ? (
            <Image
              src={encodeURI(second.imageUrl)}
              alt={second.imageAlt}
              width={1000}
              height={1000}
              className="h-auto w-full object-cover shadow-[-10px_-10px_0_0_var(--color-main)]"
              priority
              quality={75}
            />
          ) : null}
        </div>

        <div className="order-4 mb-8 max-w-xl p-4 lg:order-4">
          {second.title ? (
            <h2
              className={`${typography.sectionTitle} mt-0 font-semibold text-primary-1 lg:mt-10`}
            >
              {second.title}
            </h2>
          ) : null}
          {second.description ? (
            <p className={`${typography.body} mt-2 leading-relaxed text-700`}>
              {second.description}
            </p>
          ) : null}
        </div>
      </motion.div>
    </section>
  );
}
