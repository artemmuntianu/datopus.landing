import { getBlogPosts, getPost } from '@/data/blog';
import { formatDate } from '@/lib/utils';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import './styles.css';

const DATA = {
    url: 'https://datopus.io',
    name: 'Artem M'
}

export async function generateStaticParams() {
    const posts = await getBlogPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: {
        slug: string;
    }
}): Promise<Metadata | undefined> {
    let post = await getPost(params.slug);

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

export default async function Blog({
    params,
}: {
    params: {
        slug: string;
    }
}) {
    let post = await getPost(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className='flex flex-col min-h-[100dvh] mt-[3.5rem] [background-image:linear-gradient(to_bottom,hsl(var(--primary)/10%),transparent)] [background-size:100%_50rem] [background-repeat:no-repeat]'>
            <section className='max-w-screen-lg mx-auto mb-8 px-4'>
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
                            author: {
                                '@type': 'Person',
                                name: DATA.name,
                            },
                        }),
                    }}
                />
                <h1 className='font-medium text-3xl my-8'>{post.metadata.title}</h1>
                <article dangerouslySetInnerHTML={{ __html: post.source }}></article>
            </section>
        </main>
    );
}
