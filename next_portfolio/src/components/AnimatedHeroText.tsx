"use client";

import { motion, Variants } from "framer-motion";

export const AnimatedHeroText = () => {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1,
            },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
        show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { type: "spring", stiffness: 300, damping: 24 }
        },
    };

    const line1 = "Engineering";
    const line2 = "the";
    const line3 = "Web.";

    // Helper to render words character by character
    const renderWord = (word: string) => {
        return (
            <span className="inline-block overflow-hidden">
                {word.split("").map((char, index) => (
                    <motion.span key={index} variants={item} className="inline-block">
                        {char}
                    </motion.span>
                ))}
            </span>
        );
    };

    return (
        <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1] text-foreground drop-shadow-sm flex flex-wrap gap-x-4 md:gap-x-6 items-baseline"
        >
            {renderWord(line1)}
            {renderWord(line2)}

            {/* Break line on small screens implicitly by Flex wrap or full w */}
            <div className="w-full content-[''] h-0 flex-none pb-2 md:pb-0 block md:hidden"></div>

            <span className="inline-flex overflow-visible pb-4 pr-4 -mb-4 -mr-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 drop-shadow-lg">
                {line3.split("").map((char, index) => (
                    <motion.span key={index} variants={item} className="inline-block">
                        {char}
                    </motion.span>
                ))}
            </span>
        </motion.h1>
    );
};
