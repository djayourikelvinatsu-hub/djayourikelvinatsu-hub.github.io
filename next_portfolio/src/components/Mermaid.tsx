"use client";

import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";
import { useTheme } from "next-themes";

export interface MermaidProps {
    chart: string;
}

export function Mermaid({ chart }: MermaidProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        // Configure Mermaid to use a dark theme matching our portfolio when in dark mode
        mermaid.initialize({
            startOnLoad: true,
            theme: theme === "dark" ? "dark" : "default",
            securityLevel: "loose",
            fontFamily: "var(--font-geist-sans), sans-serif",
        });

        if (ref.current) {
            mermaid.render("mermaid-diagram", chart).then((result) => {
                if (ref.current) {
                    ref.current.innerHTML = result.svg;
                }
            });
        }
    }, [chart, theme]);

    return <div className="mermaid-wrapper flex justify-center my-10 p-6 bg-card border border-border rounded-xl shadow-sm" ref={ref} />;
}
