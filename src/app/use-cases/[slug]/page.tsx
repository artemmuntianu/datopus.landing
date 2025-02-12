import { getPost } from '@/data/post';
import { notFound } from 'next/navigation';
import { ButtonExploreDemo } from '../../../components/ui/button-explore-demo';
import './styles.css';

const DATA = {
    url: 'https://datopus.io',
    name: 'Artem M'
}

export default async function UseCasesPost({
    params,
}: {
    params: {
        slug: string;
    }
}) {
    const post = await getPost("content\\use-cases", params.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className='flex flex-col mt-[6.5rem] md:mt-[3.5rem]'>
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
                            url: `${DATA.url}/use-cases/${post.slug}`,
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
            <section id="cta" className="w-full py-18 bg-[hsl(var(--primary)/10%)]">
                <div className="flex flex-col items-center justify-center text-center my-[3.5rem]">
                    <div className="mx-auto space-y-5 pb-6 text-center">
                        <h2 className="mx-auto mb-2 max-w-3xl text-balance text-5xl font-medium leading-tight tracking-tighter">
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
