import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type ContentType = 'blog' | 'projects';

export interface MDXPost {
    slug: string;
    content: string;
    title?: string;
    description?: string;
    date?: string;
    tags?: string[];
    status?: string;
    role?: string;
    duration?: string;
    techStack?: string[];
    liveUrl?: string;
    repoUrl?: string;
    [key: string]: any;
}

export async function getMDXBySlug(slug: string, type: ContentType): Promise<MDXPost | null> {
    try {
        const realSlug = slug.replace(/\.mdx$/, '');
        const fullPath = path.join(process.cwd(), `src/content/${type}`, `${realSlug}.mdx`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the metadata section
        const { data, content } = matter(fileContents);

        return {
            slug: realSlug,
            content,
            ...data,
        } as MDXPost;
    } catch (e) {
        return null;
    }
}

export async function getAllMDX(type: ContentType): Promise<MDXPost[]> {
    try {
        const dir = path.join(process.cwd(), `src/content/${type}`);
        if (!fs.existsSync(dir)) return [];

        const slugs = fs.readdirSync(dir);
        const mdxFiles = await Promise.all(
            slugs.map((slug) => getMDXBySlug(slug, type))
        );

        // Sort logic relies on specific frontmatter depending on type
        const validFiles = mdxFiles.filter((post): post is MDXPost => post !== null);

        if (type === 'blog') {
            return validFiles.sort((a, b) => (new Date(a.date as string) > new Date(b.date as string) ? -1 : 1));
        }
        return validFiles;
    } catch (e) {
        return [];
    }
}
