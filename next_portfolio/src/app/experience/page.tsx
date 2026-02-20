import { Briefcase, GraduationCap, Code2, Database, Wrench, Server } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export default function ExperiencePage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-5xl">
            <div className="mb-16">
                <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-foreground">Journey & Skills</h1>
                <p className="text-xl text-muted-foreground w-full md:w-3/4 leading-relaxed">
                    My professional timeline and the technical skills I've acquired over my career.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Left Column: Experience and Education */}
                <div className="lg:col-span-2 space-y-16">

                    <section>
                        <Reveal direction="left">
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 border-b border-border pb-4 text-foreground">
                                <Briefcase className="w-8 h-8 text-primary" /> Experience
                            </h2>
                        </Reveal>

                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                            {/* Job 1 */}
                            <Reveal delay={0.2} direction="up">
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-primary group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/50 transition-all z-10">
                                        <Briefcase className="w-4 h-4" />
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card border border-border p-6 rounded-2xl shadow-sm hover:border-primary/30 transition-colors">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-bold text-xl text-foreground">Frontend Developer Intern</h3>
                                            <time className="text-sm font-semibold text-primary/80 uppercase tracking-widest bg-primary/10 px-3 py-1 rounded">2025 - Present</time>
                                        </div>
                                        <div className="text-muted-foreground font-medium text-sm mb-4 uppercase tracking-wider">J&A · Remote</div>
                                        <ul className="text-muted-foreground space-y-2 list-disc ml-4 text-sm leading-relaxed mb-4">
                                            <li>Built responsive websites and collaborated with design team to implement pixel-perfect interfaces.</li>
                                            <li>Improved website performance by optimizing images and implementing lazy loading.</li>
                                            <li>Collaborated with senior developers to learn best practices and modern development workflows.</li>
                                        </ul>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            <span className="text-xs font-semibold bg-secondary text-secondary-foreground px-2 py-1 rounded">React</span>
                                            <span className="text-xs font-semibold bg-secondary text-secondary-foreground px-2 py-1 rounded">TypeScript</span>
                                            <span className="text-xs font-semibold bg-secondary text-secondary-foreground px-2 py-1 rounded">Tailwind</span>
                                            <span className="text-xs font-semibold bg-secondary text-secondary-foreground px-2 py-1 rounded">Git</span>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>

                            {/* Job 2 */}
                            <Reveal delay={0.4} direction="up">
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-muted-foreground group-hover:scale-110 transition-all z-10">
                                        <Briefcase className="w-4 h-4" />
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card border border-border p-6 rounded-2xl shadow-sm">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-bold text-xl text-foreground">Freelance Web Developer</h3>
                                            <time className="text-sm font-semibold text-muted-foreground uppercase tracking-widest bg-muted px-3 py-1 rounded">2024 - 2025</time>
                                        </div>
                                        <div className="text-muted-foreground font-medium text-sm mb-4 uppercase tracking-wider">Self-employed · Remote</div>
                                        <ul className="text-muted-foreground space-y-2 list-disc ml-4 text-sm leading-relaxed mb-4">
                                            <li>Created custom websites for small businesses and local clients, delivering responsive designs.</li>
                                            <li>Managed full project lifecycle from requirements gathering to deployment.</li>
                                            <li>Provided ongoing maintenance and support, ensuring client satisfaction.</li>
                                        </ul>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            <span className="text-xs font-semibold bg-secondary text-secondary-foreground px-2 py-1 rounded">HTML5</span>
                                            <span className="text-xs font-semibold bg-secondary text-secondary-foreground px-2 py-1 rounded">CSS3</span>
                                            <span className="text-xs font-semibold bg-secondary text-secondary-foreground px-2 py-1 rounded">JavaScript</span>
                                            <span className="text-xs font-semibold bg-secondary text-secondary-foreground px-2 py-1 rounded">WordPress</span>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </section>

                    <Reveal direction="left">
                        <section>
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 border-b border-border pb-4 text-foreground mt-20">
                                <GraduationCap className="w-8 h-8 text-purple-500" /> Education
                            </h2>
                            <div className="space-y-6">
                                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div>
                                        <h3 className="font-bold text-xl text-foreground">Information Technology</h3>
                                        <p className="text-muted-foreground mt-1 font-medium">Accra Technical University</p>
                                    </div>
                                    <span className="text-sm font-bold text-purple-500 bg-purple-500/10 px-4 py-2 rounded-full uppercase tracking-widest whitespace-nowrap">2024 - Present</span>
                                </div>

                                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl pointer-events-none"></div>
                                    <div className="relative z-10">
                                        <h3 className="font-bold text-xl text-foreground">Web Development Bootcamp</h3>
                                        <p className="text-muted-foreground mt-1 font-medium">Self-directed Learning</p>
                                    </div>
                                    <span className="text-sm font-bold text-muted-foreground bg-muted border border-border/50 px-4 py-2 rounded-full uppercase tracking-widest whitespace-nowrap relative z-10">2023 - 2024</span>
                                </div>
                            </div>
                        </section>
                    </Reveal>
                </div>

                {/* Right Column: Skills */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24">
                        <Reveal direction="right" delay={0.3}>
                            <h2 className="text-3xl font-bold mb-8 border-b border-border pb-4 text-foreground">Skills</h2>

                            <div className="space-y-6">
                                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
                                    <h3 className="flex items-center gap-2 font-bold mb-4 text-primary">
                                        <Code2 className="w-5 h-5" /> Frontend
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="bg-background border border-border px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm hover:border-primary/50 transition-colors">
                                            <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#61DAFB]" fill="currentColor"><path d="M11.955 7.15c-3.13 0-5.83.69-7.46 1.76-1.63 1.06-2.22 2.37-2.22 3.69 0 1.32.59 2.63 2.22 3.69 1.63 1.07 4.33 1.76 7.46 1.76 3.13 0 5.83-.69 7.46-1.76 1.63-1.06 2.22-2.37 2.22-3.69 0-1.32-.59-2.63-2.22-3.69-1.63-1.07-4.33-1.76-7.46-1.76z" opacity=".2" /><path d="M22.25 12c0-1.28-.56-2.58-2.09-3.65-1.57-1.1-4.22-1.85-7.53-1.85-3.3 0-5.96.75-7.53 1.85-1.53 1.07-2.09 2.37-2.09 3.65 0 1.28.56 2.58 2.09 3.65 1.57 1.1 4.22 1.85 7.53 1.85 3.3 0 5.96-.75 7.53-1.85 1.53-1.07 2.09-2.37 2.09-3.65zM12.63 16.5c-2.82 0-5.22-.61-6.7-1.65-1.42-.99-1.85-2.09-1.85-2.85 0-.76.43-1.87 1.85-2.85 1.48-1.04 3.88-1.65 6.7-1.65 2.81 0 5.22.61 6.7 1.65 1.42.98 1.85 2.09 1.85 2.85 0 .76-.43 1.86-1.85 2.85-1.48 1.04-3.89 1.65-6.7 1.65z" /><circle cx="12.63" cy="12" r="2.25" /></svg>
                                            React
                                        </span>
                                        <span className="bg-background border border-border px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm hover:border-[#3178C6]/50 transition-colors">
                                            <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#3178C6]" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM13.197 19.4a1.88 1.88 0 0 1-1.353-.559 1.95 1.95 0 0 1-.586-1.411H9.863A3.333 3.333 0 0 0 10.932 20a3.298 3.298 0 0 0 2.265.815 3.486 3.486 0 0 0 2.646-1.026 3.738 3.738 0 0 0 .97-2.684v-7.39h-1.39v7.352c0 1.109-.597 1.666-1.782 1.666zm5.836.425a3.812 3.812 0 0 1-2.073-.55 3.161 3.161 0 0 1-1.272-1.564 5.923 5.923 0 0 1-.444-2.33 5.4 5.4 0 0 1 .452-2.222 3.109 3.109 0 0 1 1.258-1.47 3.834 3.834 0 0 1 1.921-.482 3.916 3.916 0 0 1 1.932.478 3.018 3.018 0 0 1 1.24 1.458 5.485 5.485 0 0 1 .432 2.223 5.703 5.703 0 0 1-.444 2.296 3.17 3.17 0 0 1-1.278 1.565 3.957 3.957 0 0 1-2.147.538zm.052-1.31c.677 0 1.205-.285 1.583-.854.379-.572.569-1.378.569-2.435 0-.962-.191-1.71-.573-2.253-.383-.546-.917-.816-1.606-.816-.689 0-1.218.272-1.588.816-.369.544-.555 1.294-.555 2.257 0 1.037.185 1.834.555 2.395.373.56.902.84 1.587.84z" /></svg>
                                            TypeScript
                                        </span>
                                        <span className="bg-background border border-border px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm hover:border-white/50 transition-colors">
                                            <svg viewBox="0 0 24 24" className="w-4 h-4 text-foreground text-white" fill="currentColor"><path d="M14.438 10L14.438 10c-2.348 0-4.25-1.902-4.25-4.25S12.09 1.5 14.438 1.5c2.348 0 4.25 1.902 4.25 4.25s-1.902 4.25-4.25 4.25zM14.438 3c-1.517 0-2.75 1.233-2.75 2.75s1.233 2.75 2.75 2.75 2.75-1.233 2.75-2.75S15.955 3 14.438 3zM9.563 10L9.563 10C7.214 10 5.313 8.098 5.313 5.75S7.215 1.5 9.563 1.5c2.348 0 4.25 1.902 4.25 4.25s-1.902 4.25-4.25 4.25zM9.563 3C8.045 3 6.812 4.233 6.812 5.75S8.045 8.5 9.563 8.5s2.75-1.233 2.75-2.75S11.08 3 9.563 3zM14.438 22.5L14.438 22.5c-2.348 0-4.25-1.902-4.25-4.25s1.902-4.25 4.25-4.25 4.25 1.902 4.25 4.25-1.902 4.25-4.25 4.25zM14.438 15.5c-1.517 0-2.75 1.233-2.75 2.75s1.233 2.75 2.75 2.75 2.75-1.233 2.75-2.75s-1.233-2.75-2.75-2.75zM9.563 22.5L9.563 22.5c-2.348 0-4.25-1.902-4.25-4.25s1.902-4.25 4.25-4.25 4.25 1.902 4.25 4.25-1.902 4.25-4.25 4.25zM9.563 15.5c-1.518 0-2.75 1.233-2.75 2.75s1.232 2.75 2.75 2.75 2.75-1.233 2.75-2.75s-1.232-2.75-2.75-2.75zM12 16.25c-0.414 0-0.75-0.336-0.75-0.75v-7c0-0.414 0.336-0.75 0.75-0.75s0.75 0.336 0.75 0.75v7C12.75 15.914 12.414 16.25 12 16.25zM8.502 12A8.502 8.502 0 1 1 8.502 20.504A8.502 8.502 0 0 1 8.502 12zm0 1.5a7.002 7.002 0 1 0 0 14.004A7.002 7.002 0 0 0 8.502 13.5zM15.498 12a8.502 8.502 0 1 1 0 17.004A8.502 8.502 0 0 1 15.498 12zm0 1.5a7.002 7.002 0 1 0 0 14.004A7.002 7.002 0 0 0 15.498 13.5z" /></svg>
                                            Next.js
                                        </span>
                                        <span className="bg-background border border-border px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm hover:border-[#38B2AC]/50 transition-colors">
                                            <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#38B2AC]" fill="currentColor"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" /></svg>
                                            Tailwind
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
                                    <h3 className="flex items-center gap-2 font-bold mb-4 text-yellow-500">
                                        <Server className="w-5 h-5" /> Backend Basics
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="bg-background border border-border px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm hover:border-[#339933]/50 transition-colors">
                                            <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#339933]" fill="currentColor"><path d="M11.874 0a1.868 1.868 0 0 0-.931.248L2.094 5.35c-.569.324-.925.93-.925 1.583v9.849c0 .654.356 1.259.925 1.583l8.849 5.103a1.889 1.889 0 0 0 1.863 0l8.849-5.103c.567-.324.925-.93.925-1.583V6.933c0-.654-.358-1.259-.925-1.583L12.805.248a1.868 1.868 0 0 0-.931-.248zm.052 1.488c.17 0 .338.043.486.13L21.26 6.721a.486.486 0 0 1 .238.411V15.7a.493.493 0 0 1-.238.414l-8.849 5.1a.483.483 0 0 1-.486 0l-8.848-5.1a.49.49 0 0 1-.235-.414V7.132c0-.17.091-.326.235-.411L11.44 1.618a.488.488 0 0 1 .486-.13zM9.514 6.736v8.283c0 .034-.017.065-.045.083l-2.025 1.15a.098.098 0 0 1-.144-.083V7.884a.09.09 0 0 1 .046-.078l2.024-1.154a.095.095 0 0 1 .144.084zM16.92 7.7a.084.084 0 0 0-.046.012L14.85 8.788a.091.091 0 0 0-.044.08v3.137c0 .193-.075.318-.21.4-.413.25-.908.204-1.255-.005a1.185 1.185 0 0 1-.585-1.018v-3.79c0-.036-.017-.065-.045-.084L10.686 6.36a.094.094 0 0 0-.14.083v6.79c0 .644.253 1.11 1.096 1.455.918.375 2.115.352 2.898-.12.428-.262.72-.635.845-1.077l1.492-.857c.03-.016.046-.05.046-.084V7.784a.086.086 0 0 0-.003-.084z" /></svg>
                                            Node.js
                                        </span>
                                        <span className="bg-background border border-border px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm hover:border-white/50 transition-colors">
                                            <svg viewBox="0 0 24 24" className="w-4 h-4 text-foreground text-white" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-1.04 4.31-2.9 6.22-1.05 1.07-2.3 1.54-3.48 1.4-1.18-.14-1.74-.78-2.08-1.55l-1.35-4.52C6.39 9.17 6.13 8.35 6 7.7c-.12-.66.07-1.22.46-1.55.57-.49 1.42-.42 2.05-.1 1.62.8 3.5 1.95 5.51 3.2 2.01 1.25 2.45 2.39 2.62 3.55zM9.54 13.5l1.65 5.5h-1.32l-1.35-4.5h1.02z" /></svg>
                                            Express
                                        </span>
                                        <span className="bg-background border border-border px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm hover:border-[#FF5A5F]/50 transition-colors">
                                            <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#FF5A5F]" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm-3 5v10l8-5-8-5z" /></svg>
                                            REST APIs
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
                                    <h3 className="flex items-center gap-2 font-bold mb-4 text-emerald-500">
                                        <Database className="w-5 h-5" /> Database
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="bg-background border border-border px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm hover:border-[#47A248]/50 transition-colors">
                                            <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#47A248]" fill="currentColor"><path d="M22.053 5.321c-.053-.94-.282-1.742-.718-2.482-.676-1.125-1.713-1.897-3.006-2.28-1.53-.453-3.132-.308-4.664.07-.384.095-.78.18-1.157.303-.042-.041-.059-.092-.086-.14L11.53.05a12.83 12.83 0 0 0-.256-.4s-.043-.057-.105-.05c-.154.016-.312.023-.456.059-3.418.847-5.597 3.328-6.079 6.845-.18.172-.375.334-.543.518-2.673 2.92-3.1 6.575-1.22 10.038.932 1.706 2.214 3.012 3.869 3.914 2 1.085 4.14 1.503 6.381 1.341a9.23 9.23 0 0 0 4.444-1.597c2.404-1.636 3.945-3.87 4.382-6.793.123-.84.148-1.693.187-2.544V5.32c-.001-.001-.082-.001-.082-.001zm-3.692 9.4c-.066 3.124-2.846 5.589-5.962 5.518-2.529-.057-4.666-1.666-5.405-4.041a5.61 5.61 0 0 1-.168-1.24c.005-.174-.15-.403-.306-.554a72.58 72.58 0 0 1-.955-.951c-.49-.512-.992-1.02-1.472-1.545-.306-.334-.564-.672-.516-1.144.11-1.077 1.065-1.6 2.112-1.564v4.394h2.246c0-1.874 1.558-4.228 3.515-3.32.228.106.452.226.65.372v4.86c0 .16-.184.22-.303.3-.872.593-1.608 1.39-2.073 2.379-.6 1.258-.654 2.501-.132 3.738a.042.042 0 0 1 .012.02c.002.329.183.504.485.565.347.07.69.056 1.006-.089a8.47 8.47 0 0 0 .546-.282.02.02 0 0 1 .022-.001c.28.093.585.127.872.181a3.17 3.17 0 0 0 .807.039c2.09-.168 3.55-1.4 4.091-3.415a3.86 3.86 0 0 0-1.01-3.674c-.604-.627-1.34-1.04-2.187-1.247a3.07 3.07 0 0 0-.616-.07V9.752l.21.037a4.11 4.11 0 0 1 1.706.84c1.196 1.05 1.758 2.45 1.83 4.092m-.918-6.198a.084.084 0 0 1-.027-.008c-.131-.054-.257-.116-.395-.152-1.996-.514-3.904-.267-5.748.59-1.314.61-2.453 1.488-3.447 2.576-.2.213-.396.443-.615.642-.294.269-.764.127-1.03-.02a.856.856 0 0 1-.362-.35 23.35 23.35 0 0 0-.154-.423C4.945 8.941 5.485 6.64 7.218 5.166 8.356 4.2 9.68 3.655 11.2 3.486c1.614-.18 3.14.075 4.54.894 1.157.676 2.016 1.636 2.466 2.923.111.319.185.65.234.982.072.482-.361 1.043-.889.967-.042-.006-.085-.015-.126-.03z" /></svg>
                                            MongoDB
                                        </span>
                                        <span className="bg-background border border-border px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm hover:border-[#4169E1]/50 transition-colors">
                                            <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#4169E1]" fill="currentColor"><path d="M11.64.085c-1.396.096-2.585.348-3.722.793-1.635.63-3.15 1.528-4.482 2.668-1.516 1.282-2.316 2.67-2.643 4.59-.115.68-.158 2.418-.088 3.522.152 2.375 1.096 4.3 2.768 5.645 1.109.89 2.522 1.583 3.906 1.91 1.487.352 3.329.43 4.887.207 2.096-.296 3.996-1.114 5.568-2.391 1.838-1.493 2.87-3.472 2.996-5.744.053-.984.004-2.502-.1-3.155-.544-3.479-2.617-6.075-5.918-7.41-1.127-.45-2.077-.665-3.171-.72zm.3 2.024c2.256.095 4.352 1.34 5.341 3.178.508.943.513 1.02.133.826-.782-.416-2.05-.83-3.235-1.055-.71-.13-1.077-.168-2.227-.152-1.603.023-2.6.223-4.112.83-2.146.853-3.791 2.355-4.819 4.398-.216.425-.56 1.353-.565 1.517-.003.111.02.147.165.267.362.3 2.51 1.242 3.141 1.378.188.04.538.082.78.093.424.015 3.016.035 3.15.024.162-.016 1.066-.34 1.18-.426.103-.075.048-.11-.322-.332-.7-.417-1.442-.962-1.92-1.41-1.076-1.008-1.782-2.368-2.002-3.855-.078-.51-.016-1.543.117-1.948.43-1.282 1.383-2.316 2.651-2.88 1.125-.494 2.66-.583 3.852-.224 1.137.338 2.3 1.096 3.05 1.983.337.397.77.859 1.488 1.583 1.042 1.056 1.258 1.325 1.548 1.914 1.283 2.656.764 5.76-1.328 7.957-1.48 1.554-3.712 2.607-6.104 2.873-1.066.118-2.396.062-3.418-.146-2.527-.514-4.526-1.954-5.69-4.095L4.444 14.1l-.83.67-.798.66.155.65c.571 2.374 2.143 4.414 4.3 5.58 1.21.655 2.544 1.048 3.868 1.137.892.057 2.155.03 2.838-.066 3.284-.45 6.136-2.27 7.737-4.887l.38-.62.062 1.265c.085 1.762.613 2.923 1.516 3.327l.354.16h.79l.52-.284-.6-2.032c-.598-2.02-.85-2.81-1.116-3.472l-.216-.54.215.545c.4 1.026.793 2.176.793 2.327 0 .15-.224-.132-.236-.302V3.42l-.54.346c-1.12.716-2.007 1.436-2.809 2.29-.44.472-.942 1.04-1.144 1.294l-.22.28-.475-.382C17.388 5.617 15.636 3.737 13.568 2.7 12.825 2.333 12.38 2.193 11.64 2.083H11.64z" /></svg>
                                            PostgreSQL
                                        </span>
                                        <span className="bg-background border border-border px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm hover:border-[#1A202C]/50 transition-colors">
                                            <svg viewBox="0 0 24 24" className="w-4 h-4 text-foreground text-white" fill="currentColor"><path d="M11.95.12L0 12l11.95 11.88 1.341-1.332-10.605-10.548L11.95 2.784l2.85 2.87-1.34 1.334-1.51-1.51-7.1 7.07 7.1 7.07 3.376-3.355V5.51L11.95.12zm1.688 8.163v7.418L17.078 12l-3.44-3.717zm1.341-1.348L24 12V6.935l-9.021-9.02v2.855l3.415 3.414zM24 12l-9.021 9.065V18.21l5.606-5.604L15.026 7.05h-.047L24 12z" /></svg>
                                            Prisma
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
                                    <h3 className="flex items-center gap-2 font-bold mb-4 text-foreground">
                                        <Wrench className="w-5 h-5" /> Tools
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="bg-background border border-border px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm hover:border-[#F05032]/50 transition-colors">
                                            <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#F05032]" fill="currentColor"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.76 2.76c.64-.216 1.369-.07 1.889.441.836.836.836 2.188 0 3.02-8.835.836-2.188.836-3.02 0-.836-.836-.836-2.188 0-3.020.514-.512 1.248-.656 1.889-.441l-2.76-2.76c-.053.013-.105.029-.158.041v3.951c.338.164.636.425.856.76.836.836.836 2.188 0 3.02-.835.836-2.188.836-3.02 0-.52-.52-.663-1.267-.438-1.916l-3.962-3.95c-.219.645-.945.792-1.463.272-.835-.836-.835-2.188 0-3.02.518-.517 1.265-.664 1.916-.44L8.708 2.627.452 10.93c-.603.604-.603 1.582 0 2.188l10.48 10.48c.604.604 1.582.604 2.188 0L23.546 13.11c.603-.603.603-1.582 0-2.188z" /></svg>
                                            Git
                                        </span>
                                        <span className="bg-background border border-border px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm hover:border-white/50 transition-colors">
                                            <svg viewBox="0 0 24 24" className="w-4 h-4 text-foreground text-white" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                                            GitHub
                                        </span>
                                        <span className="bg-background border border-border px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm hover:border-[#007ACC]/50 transition-colors">
                                            <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#007ACC]" fill="currentColor"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" /></svg>
                                            VS Code
                                        </span>
                                        <span className="bg-background border border-border px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm hover:border-[#FF6C37]/50 transition-colors">
                                            <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#FF6C37]" fill="currentColor"><path d="M23.665 16.891a27.245 27.245 0 0 0-.671-2.91 1 1 0 0 0-1.1-.649l-2.096.3a25.86 25.86 0 0 0-.585-2.261l1.7-.872c.408-.209.529-.691.31-1.077a22.95 22.95 0 0 0-1.4-2.106c-.23-.298-.65-.398-.992-.178l-1.636 1.05a22.373 22.373 0 0 0-1.229-1.993l1.102-1.696c.231-.355.093-.82-.244-1.082a22.254 22.254 0 0 0-2.15-1.35 1 1 0 0 0-1.127.159l-1.408 1.428A18.847 18.847 0 0 0 10 2.219l.37-1.745c.08-.376-.192-.705-.536-.83A21.1 21.1 0 0 0 7.42-.11C7.03-.09 6.702.26 6.643.682L6.34 2.825c-.71.196-1.4.437-2.071.724L3.633 1.96C3.256 1.83.255 3.033.02 3.41c-.244.398 5.617 8.01 5.923 8.163-.984 1.397-1.71 2.946-2.19 4.6l-1.933-.27C1.442 15.845.922 16.1 1.012 16.485c.148.636.31 1.258.49 1.86a1 1 0 0 0 .973.543l2.09-.158c.284.957.653 1.884 1.107 2.753l-1.742.6c-.34.117-.468.492-.258.8A24.475 24.475 0 0 0 5.4 25.296c.214.288.583.336.882.115l1.666-1.23c.535.803 1.115 1.547 1.766 2.24l-1.26 1.4c-.219.243-.162.613.082.85A18.877 18.877 0 0 0 11.026 30c.264.195.6.09.77-.168l1.3-1.921c.82.463 1.638.825 2.502 1.155l-.6 1.879c-.104.327.094.664.444.757a22.288 22.288 0 0 0 2.96.6c.386.046.7-.272.785-.689l.348-1.68c.84-.132 1.657-.333 2.454-.595l.407 1.67c.094.385.443.619.827.48.514-.183 1.01-.399 1.488-.636.425-.21.579-.76.33-1.127l-1.09-1.62c.54-.429 1.05-.89 1.516-1.394l1.626 1.2c.328.243.684.095.82-.24.21-.525.385-1.071.531-1.62.116-.432-.128-.86-.549-.96l-1.872-.444c.324-.658.607-1.35.842-2.05l1.895.8a1 1 0 0 0 1.08-.256A20.301 20.301 0 0 0 24 20.378c.22-.363.07-.84-.336-.975zM11.96 23.332A11.332 11.332 0 1 1 23.292 12a11.346 11.346 0 0 1-11.332 11.332zM12.015 6a6 6 0 1 0 5.986 6 5.968 5.968 0 0 0-5.986-6z" /></svg>
                                            Postman
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>

            </div>
        </div>
    );
}
