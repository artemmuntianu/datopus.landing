import { getPost, getPosts } from '@/data/post';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ButtonExploreDemo } from '../../../components/ui/button-explore-demo';
import '../../mdx-styles.css';
import RecommendedPosts from '../../../components/recommended_posts';

const DATA = {
    url: 'https://www.datopus.io',
    name: 'Artem Muntianu',
    dirRelativePath: 'content/platform',
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
            url: `${DATA.url}/platform/${post.slug}`,
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

export default async function PlatformPost({
    params,
}: {
    params: {
        slug: string;
    }
}) {
    const post = await getPost(DATA.dirRelativePath, params.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className='flex flex-col mt-[3.5rem]'>
            <section className='blog-article min-h-[100dvh] text-lg mx-auto pb-8 px-4 md:max-w-[55rem]'>
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
                            url: `${DATA.url}/platform/${post.slug}`,
                            author: {
                                '@type': 'Person',
                                name: DATA.name,
                            },
                        }),
                    }}
                />
                <h1 className='font-medium text-3xl my-8'>{post.metadata.title}</h1>
                <article dangerouslySetInnerHTML={{ __html: post.source }}></article>
                <RecommendedPosts post={post} allPosts={await getPosts(DATA.dirRelativePath)} baseUrl={`${DATA.url}/platform`} />
            </section>
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
