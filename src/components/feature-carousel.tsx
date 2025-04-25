"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { features } from "@/app/features_section";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export function FeatureCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const startAutoplay = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 5000);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  const feature = features[currentIndex];

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-12">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 p-8 shadow-lg">
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            onClick={prevSlide}
            className="rounded-full bg-white/80 p-2 text-gray-800 shadow-md hover:bg-white"
            aria-label="Previous slide"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="rounded-full bg-white/80 p-2 text-gray-800 shadow-md hover:bg-white"
            aria-label="Next slide"
          >
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 h-[500px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit="exit"
              className="w-full lg:w-1/2 flex flex-col justify-center"
            >
              <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
              <p className="text-xl font-light mb-6">{feature.subtitle}</p>
              <Link 
                href={feature.href} 
                className="inline-flex items-center text-primary hover:text-primary/80 font-semibold"
              >
                Learn More
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </AnimatePresence>

          <div className="w-full lg:w-1/2 h-full flex items-center justify-center relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
                animate="visible"
                exit="exit"
                className="w-full h-full flex items-center justify-center"
              >
                {feature.imgSrc ? (
                  <img
                    src={feature.imgSrc}
                    alt={feature.title}
                    className="rounded-lg shadow-lg max-h-[400px] object-contain"
                  />
                ) : feature.videoSrc ? (
                  <iframe
                    className="rounded-lg shadow-lg w-full aspect-video"
                    src={feature.videoSrc}
                    allow="fullscreen"
                  ></iframe>
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-3 w-3 rounded-full transition-all",
                index === currentIndex ? "bg-primary w-6" : "bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 