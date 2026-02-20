import Link from "next/link";
import { ArrowRight, Code, Activity, Terminal, PenTool, LayoutTemplate, Coffee, Zap, BrainCircuit, ShieldCheck, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { AnimatedLines } from "@/components/AnimatedLines";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl">
      <section className="mb-24 flex flex-col justify-center min-h-[50vh] relative">
        <AnimatedLines />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute top-10 right-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold w-fit mb-8 uppercase tracking-widest shadow-sm">
          <Coffee className="w-4 h-4" /> Open to new opportunities
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1] text-foreground drop-shadow-sm">
          Engineering the <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 drop-shadow-lg">Web.</span>
        </h1>

        <p className="text-xl text-muted-foreground w-full md:w-2/3 leading-relaxed font-medium mb-12">
          I'm <strong>Kelvin Atsu Djayouri</strong>, a motivated Information Technology student at Accra Technical University and aspiring frontend developer with a passion for creating beautiful, functional web experiences. My journey into web development started when I built my first HTML page in high school. Since then, I've been hooked on the creative and technical aspects of building for the web. I love turning complex problems into simple, elegant solutions.
        </p>

        <div className="flex gap-4 items-center">
          <Link href="/projects" className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
            Explore Architecture
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a href="https://github.com/djayourikelvinatsu-hub" target="_blank" rel="noreferrer" className="bg-card border-2 border-border text-foreground px-8 py-4 rounded-xl font-bold hover:bg-muted transition-colors shadow-sm">
            GitHub Profile
          </a>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <Reveal>
        <section className="mb-24">
          <h2 className="text-3xl font-extrabold mb-10 text-foreground flex items-center gap-3 border-b border-border pb-4">
            Why Work With Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border p-8 rounded-3xl shadow-sm hover:border-primary/50 transition-colors">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-primary border border-primary/20">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Fast Learner</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">Quickly adapt to new technologies and frameworks. Always eager to learn and improve.</p>
              <div className="flex items-center justify-between border-t border-border/50 pt-4">
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Technologies Mastered</span>
                <span className="text-lg font-bold text-primary">5+</span>
              </div>
            </div>

            <div className="bg-card border border-border p-8 rounded-3xl shadow-sm hover:border-emerald-500/50 transition-colors">
              <div className="bg-emerald-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-emerald-500 border border-emerald-500/20">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Problem Solver</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">Love tackling complex challenges and finding elegant solutions through code.</p>
              <div className="flex items-center justify-between border-t border-border/50 pt-4">
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Problems Solved</span>
                <span className="text-lg font-bold text-emerald-500">100+</span>
              </div>
            </div>

            <div className="bg-card border border-border p-8 rounded-3xl shadow-sm hover:border-purple-500/50 transition-colors">
              <div className="bg-purple-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-purple-500 border border-purple-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Clean Code</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">Write maintainable, readable code following best practices and design patterns.</p>
              <div className="flex items-center justify-between border-t border-border/50 pt-4">
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Code Quality</span>
                <span className="text-lg font-bold text-purple-500">100%</span>
              </div>
            </div>

            <div className="bg-card border border-border p-8 rounded-3xl shadow-sm hover:border-pink-500/50 transition-colors">
              <div className="bg-pink-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-pink-500 border border-pink-500/20">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">User Focused</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">Create intuitive, accessible experiences that users love to interact with.</p>
              <div className="flex items-center justify-between border-t border-border/50 pt-4">
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">User-Centered Projects</span>
                <span className="text-lg font-bold text-pink-500">5+</span>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.2}>
        <section className="mb-24">
          <h2 className="text-3xl font-extrabold mb-10 text-foreground flex items-center gap-3 border-b border-border pb-4">
            Advanced Interactive Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Live Code */}
            <Link href="/showcase" className="group bg-card border border-border p-8 rounded-3xl hover:border-primary/50 transition-colors shadow-sm relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
              <div className="bg-[#0a0a0a] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md border border-[#27272a]">
                <Terminal className="text-primary w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-foreground">Interactive Sandbox</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">Write, edit, and compile React code natively in the browser without leaving the portfolio.</p>
            </Link>

            {/* Performance */}
            <Link href="/performance" className="group bg-card border border-border p-8 rounded-3xl hover:border-yellow-500/50 transition-colors shadow-sm relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl group-hover:bg-yellow-500/10 transition-colors"></div>
              <div className="bg-[#0a0a0a] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md border border-[#27272a]">
                <Activity className="text-yellow-500 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-500 transition-colors text-foreground">Performance Metrics</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">Real-time visualizations of Lighthouse scores, Core Web Vitals, and accessibility passing rates.</p>
            </Link>

            {/* Deep Dives */}
            <Link href="/projects" className="group bg-card border border-border p-8 rounded-3xl hover:border-emerald-500/50 transition-colors shadow-sm relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors"></div>
              <div className="bg-[#0a0a0a] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md border border-[#27272a]">
                <Code className="text-emerald-500 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-500 transition-colors text-foreground">Project Deep Dives</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">Interactive architecture tear-downs leveraging Mermaid.js to dissect complex system designs.</p>
            </Link>

            {/* Design System */}
            <Link href="/design" className="group bg-card border border-border p-8 rounded-3xl hover:border-purple-500/50 transition-colors shadow-sm relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors"></div>
              <div className="bg-[#0a0a0a] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md border border-[#27272a]">
                <LayoutTemplate className="text-purple-500 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-500 transition-colors text-foreground">True Black Design System</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">Explore the custom spacing, fluid typography, and core CSS variables that power this interface.</p>
            </Link>

            {/* Technical Blog */}
            <Link href="/blog" className="group bg-card border border-border p-8 rounded-3xl hover:border-pink-500/50 transition-colors shadow-sm relative overflow-hidden flex flex-col h-full md:col-span-2 lg:col-span-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-full blur-2xl group-hover:bg-pink-500/10 transition-colors"></div>
              <div className="bg-[#0a0a0a] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md border border-[#27272a]">
                <PenTool className="text-pink-500 w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-pink-500 transition-colors text-foreground">Technical Blog</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">Long-form engineering articles rendered natively through custom MDX parsing and gray-matter.</p>
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
