"use client";

import { motion } from "framer-motion";

export const AnimatedLines = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
            {/* Horizontal Line 1 */}
            <motion.div
                className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"
                animate={{
                    x: ["-100%", "100%"],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            {/* Horizontal Line 2 - Glowing */}
            <motion.div
                className="absolute top-[45%] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent shadow-[0_0_15px_rgba(74,222,128,0.8)] opacity-60"
                animate={{
                    x: ["100%", "-100%"],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1,
                }}
            />
            {/* Horizontal Line 3 */}
            <motion.div
                className="absolute top-[75%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-40"
                animate={{
                    x: ["-100%", "100%"],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2,
                }}
            />

            {/* Vertical Line 1 */}
            <motion.div
                className="absolute left-[15%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-green-500 to-transparent opacity-40"
                animate={{
                    y: ["-100%", "100%"],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            {/* Vertical Line 2 - Glowing */}
            <motion.div
                className="absolute left-[80%] top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_rgba(52,211,153,0.5)] opacity-50"
                animate={{
                    y: ["100%", "-100%"],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1.5,
                }}
            />
            {/* Extra diagonal accent */}
            <motion.div
                className="absolute top-0 left-[-20%] w-[140%] h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent rotate-[15deg] transform-origin-center opacity-30"
                animate={{
                    y: ["-50vh", "150vh"]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        </div>
    );
};
