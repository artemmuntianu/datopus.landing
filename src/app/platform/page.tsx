import BlurFade from "@/components/magicui/blur-fade";
import { getPosts } from "@/data/post";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Metadata } from "next";

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
    title: 'Platform Overview',
}

export default async function PlatformAllPosts() {
    const posts = await getPosts("content/platform");

    return (
        <main className="flex flex-col min-h-[100dvh] mt-[3.5rem] [background-image:linear-gradient(to_bottom,hsl(var(--primary)/10%),transparent)] [background-size:100%_50rem] [background-repeat:no-repeat]">
            <BlurFade delay={BLUR_FADE_DELAY}>
                <h1 className="font-medium text-3xl text-center my-8">
                    Platform Overview
                </h1>
            </BlurFade>
            <section className="max-w-screen-xl mx-auto px-4">
                {posts
                    .sort((a, b) => new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1)
                    .map((post, id) => (
                        <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug} className="[&:not(:last-child)]:border-b">
                            <div className="group flex flex-col gap-6 py-4 sm:gap-8 lg:flex-row lg:items-start lg:gap-12 xl:gap-20">
                                <div className="w-full shrink-0 space-y-4 lg:sticky lg:max-w-sm lg:top-14">
                                    <a className="block" href={`/platform/${post.slug}`}>
                                        <h3 className="article-title text-2xl font-bold text-secondary-900 space-x-2.5 sm:text-3xl">
                                            <span>{post.metadata.title}</span>
                                        </h3>
                                    </a>
                                </div>
                                <div className="flex-1 space-y-5">

                                    {(post.metadata.image)
                                        ? (
                                            <a className="aspect-w-2 aspect-h-1 block overflow-hidden shadow rounded-2xl" href={`/platform/${post.slug}`}>
                                                <img alt={post.metadata.title} src={post.metadata.image} className="max-h-[25rem] h-full w-full object-cover transition-all duration-200 group-hover:scale-110"></img>
                                            </a>
                                        )
                                        : (
                                            <div></div>
                                        )
                                    }

                                    <a className="block" href={`/platform/${post.slug}`}>
                                        <p className="article-excerpt text-lg font-normal text-secondary-600 line-clamp-3 lg:line-clamp-none">{post.metadata.summary}</p>
                                    </a>
                                    <p className="flex text-sm font-semibold uppercase tracking-widest text-secondary-900 group-hover:text-primary-500">
                                        <a className="inline-flex items-center group-hover:text-primary" href={`/platform/${post.slug}`}>
                                            Read More
                                            <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </BlurFade>
                    ))}
            </section>
        </main>
    )
}
