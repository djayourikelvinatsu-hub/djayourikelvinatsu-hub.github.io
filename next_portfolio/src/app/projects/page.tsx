import Link from "next/link";
import { getAllMDX } from "@/lib/utils";
import { ArrowRight, Terminal } from "lucide-react";

export default async function ProjectsIndexPage() {
    const projects = await getAllMDX('projects');

    return (
        <div className="container mx-auto px-4 py-16 max-w-5xl">
            <div className="mb-16">
                <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-foreground">Interactive Case Studies</h1>
                <p className="text-xl text-muted-foreground w-full md:w-3/4 leading-relaxed">
                    Deep architectural teardowns, performance metrics, and the engineering challenges overcome on each project.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <div key={project.slug} className="group flex flex-col justify-between border border-border bg-card rounded-2xl shadow-sm hover:shadow-primary/10 hover:border-primary/50 transition-all p-8 relative overflow-hidden">
                        <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10">
                            <span className="sr-only">View {project.title}</span>
                        </Link>

                        <div className="mb-8">
                            <div className="flex justify-between items-start mb-6">
                                <div className="bg-muted p-3 rounded-xl border border-border">
                                    <Terminal className="w-6 h-6 text-primary" />
                                </div>
                                <span className="bg-primary/20 text-primary px-3 py-1 text-[10px] font-bold rounded uppercase tracking-widest border border-primary/20">
                                    {project.status || "Completed"}
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors text-foreground">{project.title}</h2>
                            <p className="text-muted-foreground line-clamp-3 leading-relaxed text-sm">
                                {project.description}
                            </p>
                        </div>

                        <div className="mt-auto pt-6 flex justify-between items-center text-sm font-semibold text-primary uppercase tracking-wider relative">
                            <span className="group-hover:translate-x-1 transition-transform">Read Architectural Review</span>
                            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                        </div>
                    </div>
                ))}
                {projects.length === 0 && (
                    <div className="col-span-full text-center py-16 border border-dashed rounded-2xl border-border bg-muted/50">
                        <p className="text-muted-foreground font-medium flex items-center justify-center gap-2">
                            <Terminal className="w-5 h-5 opacity-50" /> No case studies published yet.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
