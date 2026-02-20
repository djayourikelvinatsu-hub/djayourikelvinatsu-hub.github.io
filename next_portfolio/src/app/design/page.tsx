export default function DesignSystemPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-5xl">
            <div className="mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight mb-4">Design System</h1>
                <p className="text-xl text-muted-foreground">
                    The core tokens, components, and patterns that power this portfolio.
                </p>
            </div>

            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 border-b border-border pb-2">Dark Color Palette</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="flex flex-col gap-3">
                        <div className="h-32 rounded-xl bg-background border border-border shadow-md"></div>
                        <div>
                            <p className="font-semibold text-sm">Background (True Black)</p>
                            <p className="text-xs text-muted-foreground font-mono bg-muted inline-block px-1 rounded">var(--background)</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="h-32 rounded-xl bg-foreground border border-border shadow-md"></div>
                        <div>
                            <p className="font-semibold text-sm">Foreground (Pure White)</p>
                            <p className="text-xs text-muted-foreground font-mono bg-muted inline-block px-1 rounded">var(--foreground)</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="h-32 rounded-xl bg-primary shadow-[0_0_15px_rgba(59,130,246,0.3)] border border-primary/20"></div>
                        <div>
                            <p className="font-semibold text-sm">Primary (Deep Blue)</p>
                            <p className="text-xs text-muted-foreground font-mono bg-muted inline-block px-1 rounded">var(--primary)</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="h-32 rounded-xl bg-card border border-border shadow-md"></div>
                        <div>
                            <p className="font-semibold text-sm">Card (Dark Gray Elev)</p>
                            <p className="text-xs text-muted-foreground font-mono bg-muted inline-block px-1 rounded">var(--card)</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 border-b border-border pb-2">Typography Hierarchy</h2>
                <div className="flex flex-col gap-10 bg-card p-8 rounded-2xl border border-border">
                    <div>
                        <h1 className="text-5xl font-extrabold tracking-tight text-foreground">Heading 1</h1>
                        <p className="text-sm text-primary mt-2 font-mono">text-5xl font-extrabold tracking-tight</p>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold tracking-tight text-foreground">Heading 2</h2>
                        <p className="text-sm text-primary mt-2 font-mono">text-4xl font-bold tracking-tight</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold tracking-tight text-foreground">Heading 3</h3>
                        <p className="text-sm text-primary mt-2 font-mono">text-3xl font-semibold tracking-tight</p>
                    </div>
                    <div className="pt-4 border-t border-border/50">
                        <p className="leading-7 text-muted-foreground text-lg">
                            Paragraph. The quick brown fox jumps over the lazy dog. This text is styled to be slightly larger
                            and muted to reduce eye strain against the true black background.
                        </p>
                        <p className="text-sm text-primary mt-3 font-mono">leading-7 text-muted-foreground text-lg</p>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 border-b border-border pb-2">Interactive Components (Buttons)</h2>
                <div className="flex flex-wrap gap-6 items-center p-8 bg-card rounded-2xl border border-border">
                    <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-primary/25 cursor-pointer">
                        Primary Button
                    </button>
                    <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-lg font-semibold transition-all border border-border/50 cursor-pointer">
                        Secondary Button
                    </button>
                    <button className="border-2 border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg font-semibold transition-all cursor-pointer">
                        Outline Button
                    </button>
                    <button className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer">
                        Ghost Link
                    </button>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 border-b border-border pb-2">Layout & Spacing Tokens</h2>
                <div className="space-y-6">
                    <div className="flex items-center gap-6 bg-card p-4 rounded-xl border border-border">
                        <div className="w-8 h-8 bg-primary/20 border border-primary/50 flex items-center justify-center font-mono text-xs text-primary rounded">8</div>
                        <span className="text-sm font-medium text-foreground">spacing-2 (0.5rem) - Internal component padding</span>
                    </div>
                    <div className="flex items-center gap-6 bg-card p-4 rounded-xl border border-border">
                        <div className="w-16 h-8 bg-primary/20 border border-primary/50 flex items-center justify-center font-mono text-xs text-primary rounded">16</div>
                        <span className="text-sm font-medium text-foreground">spacing-4 (1rem) - Standard margins</span>
                    </div>
                    <div className="flex items-center gap-6 bg-card p-4 rounded-xl border border-border">
                        <div className="w-32 h-8 bg-primary/20 border border-primary/50 flex items-center justify-center font-mono text-xs text-primary rounded">32</div>
                        <span className="text-sm font-medium text-foreground">spacing-8 (2rem) - Section separation</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
