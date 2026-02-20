import { getMDXBySlug } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>
}

const components = {
    h1: (props: any) => <h1 className="text-4xl font-extrabold mt-12 mb-6 tracking-tight lg:text-5xl text-foreground" {...props} />,
    h2: (props: any) => <h2 className="text-3xl font-bold mt-10 mb-4 border-b border-border pb-2 text-foreground" {...props} />,
    h3: (props: any) => <h3 className="text-2xl font-semibold mt-8 mb-2 text-foreground" {...props} />,
    p: (props: any) => <p className="leading-8 [&:not(:first-child)]:mt-6 text-muted-foreground text-lg" {...props} />,
    ul: (props: any) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-muted-foreground text-lg" {...props} />,
    li: (props: any) => <li className="mb-2" {...props} />,
    a: (props: any) => <a className="font-medium text-primary hover:text-primary/80 underline underline-offset-4 transition-colors" {...props} />,
    blockquote: (props: any) => <blockquote className="mt-6 border-l-4 border-primary bg-muted/30 p-6 italic text-muted-foreground rounded-r-lg" {...props} />,
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
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await getMDXBySlug(slug, 'blog');

    if (!post) {
        notFound();
    }

    return (
        <article className="container mx-auto px-4 py-16 max-w-3xl">
            <div className="mb-12 border-b border-border pb-10">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-10"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to all articles
                </Link>
                <div className="flex items-center gap-3 text-sm text-primary font-semibold mb-4 tracking-wide uppercase">
                    <time dateTime={post.date as string}>
                        {new Date(post.date as string).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        })}
                    </time>
                    {post.tags && (post.tags as string[]).length > 0 && (
                        <div className="flex gap-2 items-center">
                            <span className="text-muted-foreground">•</span>
                            {(post.tags as string[]).map(tag => (
                                <span key={tag} className="bg-primary/10 px-2 py-0.5 rounded text-primary">{tag}</span>
                            ))}
                        </div>
                    )}
                </div>
                <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl mb-6">{post.title}</h1>
                {post.description && (
                    <p className="text-2xl text-muted-foreground mt-6 leading-relaxed border-l-4 border-border pl-6">{post.description}</p>
                )}
            </div>

            <div className="prose-custom">
                <MDXRemote source={post.content} components={components} />
            </div>
        </article>
    );
}
