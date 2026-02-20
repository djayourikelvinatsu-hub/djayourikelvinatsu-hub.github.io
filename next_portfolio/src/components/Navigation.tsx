"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center mx-auto px-4 sm:px-8">
                <div className="mr-4 flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="font-bold sm:inline-block">KAD.</span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link href="/experience" className="transition-colors hover:text-foreground/80 text-foreground/60">Experience</Link>
                        <Link href="/projects" className="transition-colors hover:text-foreground/80 text-foreground/60">Projects</Link>
                        <Link href="/blog" className="transition-colors hover:text-foreground/80 text-foreground/60">Blog</Link>
                        <Link href="/showcase" className="transition-colors hover:text-foreground/80 text-foreground/60">Showcase</Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-2">
                    <nav className="flex items-center relative">
                        <ThemeToggle />
                    </nav>
                </div>
            </div>
        </header>
    );
}
