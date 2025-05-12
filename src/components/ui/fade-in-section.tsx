"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

interface FadeInSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export function FadeInSection({ 
    children, 
    className = "", 
    delay = 0,
    direction = "up"
}: FadeInSectionProps) {
    const ref = useRef<HTMLDivElement>(null);

    const getInitialPosition = () => {
        switch (direction) {
            case "up":
                return { y: 50, opacity: 0 };
            case "down":
                return { y: -50, opacity: 0 };
            case "left":
                return { x: 50, opacity: 0 };
            case "right":
                return { x: -50, opacity: 0 };
            default:
                return { y: 50, opacity: 0 };
        }
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={getInitialPosition()}
            whileInView={{ 
                y: 0, 
                x: 0, 
                opacity: 1,
                transition: {
                    duration: 0.8,
                    delay: delay,
                    ease: "easeOut"
                }
            }}
            viewport={{ once: true, margin: "-100px" }}
        >
            {children}
        </motion.div>
    );
} 