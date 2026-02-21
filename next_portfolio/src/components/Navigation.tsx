"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center justify-between mx-auto px-4 sm:px-8">
                <div className="flex items-center">
                    <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                        <span className="font-bold sm:inline-block tracking-widest">KAD.</span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                        <Link href="/experience" className="transition-colors hover:text-foreground/80 text-foreground/60">Experience</Link>
                        <Link href="/projects" className="transition-colors hover:text-foreground/80 text-foreground/60">Projects</Link>
                        <Link href="/blog" className="transition-colors hover:text-foreground/80 text-foreground/60">Blog</Link>
                        <Link href="/showcase" className="transition-colors hover:text-foreground/80 text-foreground/60">Showcase</Link>
                    </nav>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="hidden md:block">
                        <ThemeToggle />
                    </div>
                    <button
                        className="md:hidden p-2 -mr-2 text-foreground/60 hover:text-foreground focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 py-6 space-y-4 shadow-xl absolute w-full">
                    <nav className="flex flex-col space-y-6 text-sm font-medium">
                        <Link href="/experience" onClick={() => setIsOpen(false)} className="transition-colors hover:text-foreground text-foreground/70">Experience</Link>
                        <Link href="/projects" onClick={() => setIsOpen(false)} className="transition-colors hover:text-foreground text-foreground/70">Projects</Link>
                        <Link href="/blog" onClick={() => setIsOpen(false)} className="transition-colors hover:text-foreground text-foreground/70">Blog</Link>
                        <Link href="/showcase" onClick={() => setIsOpen(false)} className="transition-colors hover:text-foreground text-foreground/70">Showcase</Link>
                        <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                            <span className="text-foreground/70">Toggle Theme</span>
                            <ThemeToggle />
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
