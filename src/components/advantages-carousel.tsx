"use client";

import { whatWeCanDo } from "@/app/whatwecando_section";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon, PauseIcon, PlayIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function AdvantagesCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [key, setKey] = useState(0);

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
                duration: 0,
            },
        },
        exit: (direction: number) => ({
            x: direction > 0 ? "-100%" : "100%",
            opacity: 0,
            transition: {
                duration: 0.25,
            },
        }),
    };

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % whatWeCanDo.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + whatWeCanDo.length) % whatWeCanDo.length);
    };

    const goToSlide = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const togglePause = () => {
        setIsPaused(!isPaused);
        if (!isPaused && timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        } else {
            startAutoplay();
        }
    };

    const startAutoplay = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        if (!isPaused) {
            setKey(prev => prev + 1);
            timeoutRef.current = setTimeout(() => {
                nextSlide();
            }, 10 * 1000);
        }
    };

    useEffect(() => {
        startAutoplay();
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [currentIndex, isPaused]);

    const currentFeature = whatWeCanDo[currentIndex];

    return (
        <div className="mx-auto w-full px-4 py-12">
            <div className="relative w-full max-w-[1200px] mx-auto h-[600px] overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 p-4 sm:p-6 md:p-8 shadow-lg">
                {!isPaused && (
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gray-100">
                        <div 
                            key={key}
                            className="h-full bg-primary/25 origin-left"
                            style={{
                                animation: 'progress 10s linear forwards',
                                width: '100%',
                                transform: 'scaleX(0)'
                            }}
                        />
                    </div>
                )}
                <style jsx global>{`
                    @keyframes progress {
                        from { transform: scaleX(0); }
                        to { transform: scaleX(1); }
                    }
                `}</style>
                <div className="flex justify-end mb-4 sm:mb-6 md:mb-8 space-x-2 sm:space-x-4">
                    <button
                        onClick={prevSlide}
                        className="rounded-full bg-white/80 p-1.5 sm:p-2 text-gray-800 shadow-md hover:bg-white transition-colors"
                        aria-label="Previous slide"
                    >
                        <ArrowLeftIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                    <button
                        onClick={togglePause}
                        className="rounded-full bg-white/80 p-1.5 sm:p-2 text-gray-800 shadow-md hover:bg-white transition-colors"
                        aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
                    >
                        {isPaused ? (
                            <PlayIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                        ) : (
                            <PauseIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                        )}
                    </button>
                    <button
                        onClick={nextSlide}
                        className="rounded-full bg-white/80 p-1.5 sm:p-2 text-gray-800 shadow-md hover:bg-white transition-colors"
                        aria-label="Next slide"
                    >
                        <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 items-center w-full h-[calc(600px-4rem)] sm:h-[calc(600px-6rem)] md:h-[calc(600px-8rem)]">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
                            animate="visible"
                            exit="exit"
                            className="w-full lg:w-1/2 flex flex-col justify-center h-full"
                        >
                            <div className="h-full flex flex-col justify-center px-2 sm:px-4">
                                <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">{currentFeature.title}</h3>
                                <p className="text-lg sm:text-xl font-light mb-4 sm:mb-6">{currentFeature.subtitle}</p>
                                <div className="py-4 sm:py-6">
                                    {currentFeature.subtitleItems}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
                            animate="visible"
                            exit="exit"
                            className="w-full lg:w-1/2 flex items-center justify-center h-full"
                        >
                            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md w-full h-[calc(100%-1rem)] sm:h-[calc(100%-1.5rem)] md:h-[calc(100%-2rem)]">
                                {currentFeature.explainer}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation dots */}
                <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
                    {whatWeCanDo.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={cn(
                                "h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all",
                                index === currentIndex ? "bg-primary w-4 sm:w-6" : "bg-gray-300 hover:bg-gray-400"
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
} 