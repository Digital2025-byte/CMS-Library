"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { fallingCardEasing } from "../utils/easing";

export default function AnimatedFallingCards({ images = [] }) {
  const [activeCards, setActiveCards] = useState([]);
  const cardIdRef = useRef(0);
  const sectionRef = useRef(null);
  const spawnTimeoutRef = useRef(null);
  const imagesRef = useRef(images);
  imagesRef.current = images;

  const removeCard = (cardId) => {
    setActiveCards((prev) => prev.filter((card) => card.id !== cardId));
  };

  useEffect(() => {
    if (!images.length) return undefined;

    const spawnCards = () => {
      const currentImages = imagesRef.current;
      if (!currentImages.length) return;

      const numCards = Math.random() < 0.5 ? 1 : 2;
      const newCards = [];

      for (let i = 0; i < numCards; i += 1) {
        const randomImage =
          currentImages[Math.floor(Math.random() * currentImages.length)];
        const horizontalPosition = 5 + Math.random() * 90;
        const startDelay = numCards === 2 && i === 1 ? 0.8 : Math.random() * 0.3;

        newCards.push({
          id: cardIdRef.current++,
          image: randomImage,
          horizontalPosition,
          startDelay,
        });
      }

      setActiveCards((prev) => [...prev, ...newCards]);
    };

    spawnCards();

    const scheduleNext = () => {
      const nextDelay = 2500 + Math.random() * 1500;
      spawnTimeoutRef.current = setTimeout(() => {
        spawnCards();
        scheduleNext();
      }, nextDelay);
    };

    spawnTimeoutRef.current = setTimeout(
      scheduleNext,
      2500 + Math.random() * 1500
    );

    return () => {
      if (spawnTimeoutRef.current) {
        clearTimeout(spawnTimeoutRef.current);
      }
    };
  }, [images.length]);

  if (!images.length) {
    return null;
  }

  return (
    <div ref={sectionRef} className="pointer-events-none absolute inset-0 z-1">
      <AnimatePresence>
        {activeCards.map((card) => {
          const sectionHeight = sectionRef.current?.offsetHeight || 700;

          return (
            <motion.div
              key={card.id}
              initial={{ y: -150, opacity: 0 }}
              animate={{
                y: sectionHeight + 150,
                opacity: [0, 1, 1, 0.9, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 6,
                delay: card.startDelay || 0,
                ease: fallingCardEasing,
                times: [0, 0.1, 0.5, 0.9, 1],
              }}
              onAnimationComplete={() => removeCard(card.id)}
              className="absolute"
              style={{
                left: `${card.horizontalPosition}%`,
                transform: "translateX(-50%)",
              }}
            >
              <div className="h-36 w-28 overflow-hidden rounded-4xl bg-background shadow-xl md:h-48 md:w-36 lg:h-52 lg:w-40">
                <Image
                  src={card.image?.src}
                  alt={card.image?.alt || "Travel experience"}
                  width={160}
                  height={208}
                  className="h-full w-full object-cover"
                  sizes="160px"
                  quality={75}
                />
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
