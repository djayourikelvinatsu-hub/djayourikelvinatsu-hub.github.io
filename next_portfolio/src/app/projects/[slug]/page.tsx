import { getMDXBySlug } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Box, Calendar, User, Terminal, ExternalLink, Github } from "lucide-react";
import { Mermaid } from "@/components/Mermaid";

const components = {
    h1: (props: any) => <h1 className="text-4xl font-extrabold mt-16 mb-8 tracking-tight lg:text-5xl text-foreground" {...props} />,
    h2: (props: any) => <h2 className="text-3xl font-bold mt-12 mb-6 border-b border-border pb-3 text-foreground" {...props} />,
    h3: (props: any) => <h3 className="text-xl font-bold mt-8 mb-4 text-foreground" {...props} />,
    p: (props: any) => <p className="leading-8 [&:not(:first-child)]:mt-6 text-muted-foreground text-lg" {...props} />,
    ul: (props: any) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-muted-foreground text-lg" {...props} />,
    li: (props: any) => <li className="mb-2" {...props} />,
    a: (props: any) => <a className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80 transition-colors" {...props} />,
    table: (props: any) => (
        <div className="my-8 w-full overflow-y-auto border border-border rounded-xl">
            <table className="w-full text-foreground bg-card" {...props} />
        </div>
    ),
    th: (props: any) => <th className="border-b border-r border-border px-6 py-4 text-left font-bold bg-muted/50" {...props} />,
    td: (props: any) => <td className="border-b border-r border-border px-6 py-4 text-left font-medium" {...props} />,
    code: (props: any) => <code className="relative rounded bg-secondary/80 px-[0.4rem] py-[0.2rem] font-mono text-sm font-semibold text-secondary-foreground" {...props} />,
    pre: ({ children, ...props }: any) => (
        <div className="overflow-x-auto my-8 rounded-xl bg-[#0a0a0a] border border-[#27272a] shadow-lg">
            <div className="flex items-center px-4 py-2 border-b border-[#27272a] bg-[#121212]">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
            </div>
            <div className="p-4">
                <pre {...props} className="text-sm font-mono text-zinc-300 leading-relaxed">{children}</pre>
            </div>
        </div>
    ),
    Mermaid: Mermaid,
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await getMDXBySlug(slug, "projects");

    if (!project) notFound();

    return (
        <article className="container mx-auto px-4 py-16 max-w-4xl">
            <Link href="/projects" className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-foreground mb-12 transition-colors uppercase tracking-widest bg-muted/50 px-4 py-2 rounded-full">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
            </Link>

            <div className="mb-16 border-b border-border pb-16">
                <div className="flex items-center gap-4 mb-6 text-sm font-medium">
                    <span className="bg-primary/20 border border-primary/20 text-primary px-4 py-1.5 rounded-full uppercase tracking-widest text-xs font-bold shadow-sm">
                        {project.status || "Completed"}
                    </span>
                </div>
                <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl mb-8 text-foreground leading-tight">{project.title}</h1>
                <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl border-l-4 border-primary pl-6 py-2">{project.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 p-8 bg-card rounded-3xl border border-border shadow-md">
                    <div className="flex items-start gap-5">
                        <div className="bg-muted p-3 rounded-xl">
                            <User className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-1">My Role</h4>
                            <p className="font-semibold text-lg text-foreground">{project.role}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-5">
                        <div className="bg-muted p-3 rounded-xl">
                            <Calendar className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-1">Timeline</h4>
                            <p className="font-semibold text-lg text-foreground">{project.duration}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-5 md:col-span-2 mt-4 pt-8 border-t border-border/50">
                        <div className="bg-muted p-3 rounded-xl">
                            <Terminal className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-4">Tech Infrastructure</h4>
                            <div className="flex flex-wrap gap-3">
                                {(project.techStack as string[])?.map((tech) => (
                                    <span key={tech} className="bg-background border border-border text-foreground px-4 py-2 rounded-lg text-sm font-semibold shadow-sm">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Live Preview Links */}
                {(project.liveUrl || project.repoUrl) && (
                    <div className="mt-8 flex gap-4">
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                <ExternalLink className="w-5 h-5" /> Visit Live Project
                            </a>
                        )}
                        {project.repoUrl && (
                            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="bg-card border-2 border-border text-foreground px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-muted transition-colors shadow-sm">
                                <Github className="w-5 h-5" /> View Source
                            </a>
                        )}
                    </div>
                )}
            </div>

            <div className="prose-custom">
                {project.liveUrl && (
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mt-12 mb-6 border-b border-border pb-3 text-foreground">Live App Preview</h2>
                        <div className="w-full aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl relative bg-card/50">
                            <div className="absolute top-0 w-full h-8 bg-muted flex items-center px-4 gap-2 border-b border-border z-10">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                </div>
                                <div className="bg-background rounded-md px-3 py-0.5 text-xs text-muted-foreground ml-2 font-mono flex-1 truncate max-w-sm text-center">
                                    {project.liveUrl}
                                </div>
                            </div>
                            <iframe src={project.liveUrl} className="w-full h-full pt-8" title="Live Project Preview" />
                        </div>
                    </div>
                )}
                <MDXRemote source={project.content} components={components} />
            </div>
        </article>
    );
}
