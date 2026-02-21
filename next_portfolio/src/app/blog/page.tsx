import Link from "next/link";
import { getAllMDX } from "@/lib/utils";

export default async function BlogIndexPage() {
    const posts = await getAllMDX('blog');

    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <div className="mb-12">
                <h1 className="text-5xl font-extrabold tracking-tight mb-4">Technical Blog</h1>
                <p className="text-xl text-muted-foreground">
                    Articles on software engineering, React ecosystems, architecture, and design tokens.
                </p>
            </div>

            <div className="grid gap-8">
                {posts.map((post) => (
                    <article key={post.slug} className="group relative border border-border bg-card p-8 rounded-2xl hover:border-primary transition-colors shadow-sm">
                        <div className="flex flex-col space-y-3">
                            <time dateTime={post.date as string} className="text-sm text-primary font-medium tracking-wide">
                                {new Date(post.date as string).toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric"
                                })}
                            </time>
                            <h2 className="text-3xl font-bold tracking-tight">
                                <Link href={`/blog/${post.slug}`}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">{post.description}</p>

                            {post.tags && (post.tags as string[]).length > 0 && (
                                <div className="flex flex-wrap gap-2 pt-4">
                                    {(post.tags as string[]).map((tag) => (
                                        <span key={tag} className="inline-flex items-center rounded-md bg-secondary/50 px-3 py-1 text-xs font-semibold ring-1 ring-inset ring-border/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </article>
                ))}
                {posts.length === 0 && (
                    <p className="text-muted-foreground text-center py-12 border border-dashed rounded-xl border-border">No posts found.</p>
                )}
            </div>
        </div>
    );
}
