import NewsletterForm from '@/components/newsletter-form';
import { getPost, getPosts } from '@/data/post';
import { ArrowLeft, ArrowRight, Calendar, Clock, Facebook, Linkedin, Share2, Twitter } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import RecommendedPosts from '../../../components/recommended_posts';
import { ButtonExploreDemo } from '../../../components/ui/button-explore-demo';
import './mdx-styles.css';

const DATA = {
    url: 'https://www.datopus.io',
    name: 'Artem M',
    dirRelativePath: 'content/blog',
}

// Function to calculate reading time
function getReadingTime(content: string): number {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
}

// Function to generate table of contents from headings in the article
function generateTableOfContents(content: string): { id: string; text: string; level: number }[] {
    const regex = /<h([2-3])[^>]*>(.*?)<\/h\1>/g;
    const headings: { id: string; text: string; level: number }[] = [];
    let match;

    while ((match = regex.exec(content)) !== null) {
        const level = parseInt(match[1], 10);
        const text = match[2].replace(/<[^>]*>/g, '');
        const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

        headings.push({ id, text, level });
    }

    return headings;
}

// Format date
function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

export async function generateStaticParams() {
    const posts = await getPosts(DATA.dirRelativePath);
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: {
        slug: string;
    }
}): Promise<Metadata | undefined> {
    let post = await getPost(DATA.dirRelativePath, params.slug);

    let {
        title,
        summary: description,
        image,
    } = post.metadata;

    let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            url: `${DATA.url}/blog/${post.slug}`,
            images: [
                {
                    url: ogImage,
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        }
    };
}

export default async function BlogPost({
    params,
}: {
    params: {
        slug: string;
    }
}) {
    const post = await getPost(DATA.dirRelativePath, params.slug);
    const allPosts = await getPosts(DATA.dirRelativePath);

    if (!post) {
        notFound();
    }

    // Get reading time
    const readingTime = getReadingTime(post.source);

    // Generate table of contents
    const tableOfContents = generateTableOfContents(post.source);

    // Find previous and next posts
    const currentIndex = allPosts.findIndex(p => p.slug === post.slug);
    const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
    const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

    // Add IDs to headings for navigation
    let contentWithIds = post.source;
    tableOfContents.forEach(heading => {
        const headingRegex = new RegExp(`<h${heading.level}[^>]*>(${heading.text})<\/h${heading.level}>`, 'i');
        contentWithIds = contentWithIds.replace(
            headingRegex,
            `<h${heading.level} id="${heading.id}">${heading.text}</h${heading.level}>`
        );
    });

    return (
        <main className='flex flex-col mt-[3.5rem]'>
            <script
                type='application/ld+json'
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BlogPosting',
                        headline: post.metadata.title,
                        description: post.metadata.summary,
                        image: post.metadata.image
                            ? `${DATA.url}${post.metadata.image}`
                            : `${DATA.url}/og?title=${post.metadata.title}`,
                        url: `${DATA.url}/blog/${post.slug}`,
                        datePublished: post.metadata.publishedAt,
                        author: {
                            '@type': 'Person',
                            name: DATA.name,
                        },
                    }),
                }}
            />

            <div className="flex flex-col lg:flex-row lg:gap-12 mx-auto w-full max-w-7xl px-4">
                {/* Main content */}
                <section className='blog-article min-h-[100dvh] lg:flex-grow lg:max-w-3xl mx-auto pb-8 w-full'>
                    {/* Breadcrumbs */}
                    <nav className="my-4 text-sm text-muted-foreground">
                        <Link href="/blog" className="hover:text-primary">Blog</Link>
                        <span className="mx-2">/</span>
                        <span>{post.metadata.title}</span>
                    </nav>

                    {/* Title and metadata */}
                    <div className="mb-8">
                        <h1 className='font-bold text-3xl lg:text-4xl mb-6'>{post.metadata.title}</h1>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                            {post.metadata.publishedAt && (
                                <div className="flex items-center">
                                    <Calendar className="mr-1 h-4 w-4" />
                                    <time dateTime={post.metadata.publishedAt}>
                                        {formatDate(post.metadata.publishedAt)}
                                    </time>
                                </div>
                            )}

                            <div className="flex items-center">
                                <Clock className="mr-1 h-4 w-4" />
                                <span>{readingTime} min. reading</span>
                            </div>
                        </div>
                    </div>

                    {/* Post image */}
                    {post.metadata.image && (
                        <div className="mb-8 overflow-hidden rounded-lg">
                            <img
                                src={post.metadata.image}
                                alt={post.metadata.title}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    )}

                    {/* Main content */}
                    <article dangerouslySetInnerHTML={{ __html: contentWithIds }}></article>

                    {/* Share */}
                    <div className="mt-12 pt-6 border-t">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Share2 className="h-4 w-4" />
                                <span className="font-medium">Share:</span>
                            </div>
                            <div className="flex space-x-2">
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${DATA.url}/blog/${post.slug}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors"
                                    aria-label="Share on Facebook"
                                >
                                    <Facebook className="h-4 w-4" />
                                </a>
                                <a
                                    href={`https://twitter.com/intent/tweet?url=${DATA.url}/blog/${post.slug}&text=${post.metadata.title}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors"
                                    aria-label="Share on Twitter"
                                >
                                    <Twitter className="h-4 w-4" />
                                </a>
                                <a
                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${DATA.url}/blog/${post.slug}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors"
                                    aria-label="Share on LinkedIn"
                                >
                                    <Linkedin className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Post navigation */}
                    <nav className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {prevPost && (
                            <Link
                                href={`/blog/${prevPost.slug}`}
                                className="group p-4 border rounded-lg hover:border-primary hover:bg-muted/20 transition-colors"
                            >
                                <div className="flex items-center text-sm text-muted-foreground mb-2">
                                    <ArrowLeft className="mr-1 h-4 w-4" />
                                    <span>Previous article</span>
                                </div>
                                <h4 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                                    {prevPost.metadata.title}
                                </h4>
                            </Link>
                        )}

                        {nextPost && (
                            <Link
                                href={`/blog/${nextPost.slug}`}
                                className="group p-4 border rounded-lg hover:border-primary hover:bg-muted/20 transition-colors md:text-right md:ml-auto"
                            >
                                <div className="flex items-center justify-end text-sm text-muted-foreground mb-2">
                                    <span>Next article</span>
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </div>
                                <h4 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                                    {nextPost.metadata.title}
                                </h4>
                            </Link>
                        )}
                    </nav>
                </section>

                {/* Sidebar */}
                <aside className="lg:w-72 lg:flex-shrink-0 py-8">
                    <div className="lg:sticky lg:top-24">
                        {/* Author */}
                        <div className="mb-8 p-4 border rounded-lg">
                            <h3 className="font-medium mb-4">About the author</h3>
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center overflow-hidden mr-3">
                                    <span className="text-lg font-bold">{DATA.name.charAt(0)}</span>
                                </div>
                                <div>
                                    <p className="font-medium">{DATA.name}</p>
                                    <p className="text-sm text-muted-foreground">Author</p>
                                </div>
                            </div>
                        </div>

                        {/* Table of contents */}
                        {tableOfContents.length > 0 && (
                            <div className="p-4 border rounded-lg mb-8">
                                <h3 className="font-medium mb-4">Contents</h3>
                                <nav>
                                    <ul className="space-y-2 text-sm">
                                        {tableOfContents.map((heading, i) => (
                                            <li key={i} style={{ marginLeft: `${(heading.level - 2) * 1}rem` }}>
                                                <a
                                                    href={`#${heading.id}`}
                                                    className="text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                    {heading.text}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        )}

                        {/* Newsletter */}
                        <div className="p-4 border rounded-lg mb-8 bg-muted/20">
                            <h3 className="font-medium mb-3">Subscribe to newsletter</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Stay updated with new articles and updates
                            </p>
                            <NewsletterForm
                                compact={true}
                            />
                        </div>
                    </div>
                </aside>
            </div>

            {/* Recommended posts */}
            <RecommendedPosts post={post} allPosts={allPosts} baseUrl={`${DATA.url}/blog`} />

            {/* CTA */}
            <section id="cta" className="w-full py-18 bg-blue-600">
                <div className="flex flex-col items-center justify-center text-center my-[3.5rem]">
                    <div className="mx-auto space-y-5 pb-6 text-center">
                        <h2 className="mx-auto mb-2 max-w-3xl text-balance text-5xl text-white font-medium leading-tight tracking-tighter">
                            Ready?
                        </h2>
                    </div>
                    <div className="flex items-center justify-center gap-[0.5rem]">
                        <ButtonExploreDemo />
                    </div>
                </div>
            </section>
        </main>
    );
}
