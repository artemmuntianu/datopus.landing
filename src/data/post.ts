import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export type Metadata = {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
};

export async function getPost(dirRelativePath: string, slug: string) {
    const filePath = path.join(dirRelativePath, `${slug}.mdx`);
    let source = fs.readFileSync(filePath, "utf-8");
    const { content: rawContent, data: metadata } = matter(source);
    const content = await markdownToHTML(rawContent);
    return {
        source: content,
        metadata,
        slug,
    };
}

export async function getPosts(dirRelativePath: string) {
    return getAllPosts(dirRelativePath);
}

function getMDXFiles(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

async function getAllPosts(dirRelativePath: string) {
    const dir = path.join(process.cwd(), dirRelativePath);
    const mdxFiles = getMDXFiles(dir);
    return Promise.all(
        mdxFiles.map(async (file) => {
            let slug = path.basename(file, path.extname(file));
            let { metadata, source } = await getPost(dirRelativePath, slug);
            return {
                metadata,
                slug,
                source,
            };
        })
    );
}

async function markdownToHTML(markdown: string) {
    const p = await unified()
        .use(remarkParse)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypePrettyCode, {
            // https://rehype-pretty.pages.dev/#usage
            theme: {
                light: "min-light",
                dark: "min-dark"
            },
            keepBackground: false,
        })
        .use(rehypeStringify, { allowDangerousHtml: true })
        .process(markdown);

    return p.toString();
}