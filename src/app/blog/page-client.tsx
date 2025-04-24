'use client';

import BlurFade from "@/components/magicui/blur-fade";
import NewsletterForm from "@/components/newsletter-form";
import { formatDate } from "@/lib/utils";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { ChevronDownIcon, ListFilter, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface PostMetadata {
    title: string;
    summary?: string;
    image?: string;
    publishedAt: string;
    categories?: string[];
}

interface Post {
    slug: string;
    source: string;
    metadata: PostMetadata;
}

// Default images
const defaultImages = [
    "https://datopus.blob.core.windows.net/blog/what-is-product-feature-analytics.jpg",
    "https://datopus.blob.core.windows.net/blog/boost-your-e-commerce-success-with-product-analytics.jpg",
    "https://datopus.blob.core.windows.net/blog/product-analytics-vs-web-analytics-differences-benefits-and-examples.jpg",
    "https://datopus.blob.core.windows.net/blog/user-flow-analysis-the-key-to-optimizing-your-digital-product.jpg"
];

// Function to get categories from all posts
function getCategories(posts: Post[]): string[] {
    const categoriesSet = new Set<string>();
    
    posts.forEach(post => {
        if (post.metadata.categories) {
            post.metadata.categories.forEach(category => {
                categoriesSet.add(category);
            });
        }
    });
    
    return Array.from(categoriesSet);
}

// Blog card component
function BlogCard({ post, imageIndex }: { post: Post; imageIndex: number }) {
    return (
        <article className="group flex flex-col overflow-hidden rounded-lg border hover:border-primary shadow-sm hover:shadow-md transition-all duration-300 h-full">
            <Link href={`/blog/${post.slug}`} className="block overflow-hidden aspect-video relative">
                <img 
                    src={post.metadata.image || defaultImages[imageIndex % defaultImages.length]} 
                    alt={post.metadata.title} 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                {post.metadata.categories && post.metadata.categories.length > 0 && (
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                        {post.metadata.categories.slice(0, 2).map((category, i) => (
                            <span 
                                key={i} 
                                className="px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full"
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                )}
            </Link>
            
            <div className="flex flex-col flex-grow p-5">
                {post.metadata.publishedAt && (
                    <time 
                        dateTime={post.metadata.publishedAt} 
                        className="text-sm text-muted-foreground mb-2"
                    >
                        {formatDate(post.metadata.publishedAt)}
                    </time>
                )}
                
                <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.metadata.title}
                    </h2>
                </Link>
                
                {post.metadata.summary && (
                    <p className="text-muted-foreground line-clamp-3 mb-4">
                        {post.metadata.summary}
                    </p>
                )}
                
                <div className="mt-auto">
                    <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-sm font-medium text-primary group-hover:underline"
                    >
                        Read Article
                        <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default function BlogClientPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [isLoadingPosts, setIsLoadingPosts] = useState(true);
    const [showFilters, setShowFilters] = useState(false);
    const [pageTitle, setPageTitle] = useState('Datopus Blog');
    const [pageDescription, setPageDescription] = useState('Articles, guides and research on product analytics, data and business development');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadPosts() {
            try {
                setIsLoadingPosts(true);
                setError(null);
                
                // Fetch posts from API route instead of directly calling getPosts
                const response = await fetch('/api/posts?dir=content/blog');
                
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                
                const fetchedPosts = await response.json();
                setPosts(fetchedPosts as Post[]);
                
                // Get categories from posts
                const allCategories = getCategories(fetchedPosts as Post[]);
                setCategories(allCategories);
            } catch (error) {
                console.error("Error loading posts:", error);
                setError("Failed to load blog posts. Please try again later.");
            } finally {
                setIsLoadingPosts(false);
            }
        }
        
        loadPosts();
        
        // Set document title - client-side alternative to metadata
        document.title = 'Blog | Datopus';
    }, []);

    // Filter posts by search term and category
    const filteredPosts = posts
        .filter(post => 
            (post.metadata.title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
             post.metadata.summary?.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (selectedCategory === '' || (post.metadata.categories && post.metadata.categories.includes(selectedCategory)))
        )
        .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime());

    return (
        <main className="flex flex-col min-h-[100dvh] mt-[3.5rem]">
            <div className="w-full [background-image:linear-gradient(to_bottom,hsl(var(--primary)/10%),transparent)] [background-size:100%_50rem] [background-repeat:no-repeat] py-16">
                <BlurFade delay={0.1}>
                    <div className="container mx-auto px-4">
                        <h1 className="font-bold text-4xl md:text-5xl text-center mb-6">
                            {pageTitle}
                        </h1>
                        <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
                            {pageDescription}
                        </p>
                        
                        <div className="relative max-w-xl mx-auto">
                            <div className="flex items-center border rounded-full overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-primary/20 bg-background">
                                <div className="pl-4 pr-2">
                                    <Search className="h-5 w-5 text-muted-foreground" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    className="py-3 px-2 flex-1 focus:outline-none bg-transparent"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </BlurFade>
            </div>

            <BlurFade delay={0.2}>
                <div className="container mx-auto px-4 mb-16">
                    {/* Filters and categories */}
                    <div className="flex flex-col md:flex-row items-center justify-between my-8 relative">
                        <button 
                            className="flex items-center gap-2 text-sm md:hidden mb-4 md:mb-0 p-2 border rounded-md"
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            <ListFilter className="h-4 w-4" />
                            Filters
                            <ChevronDownIcon 
                                className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`}
                            />
                        </button>
                        
                        <div 
                            className={`w-full md:flex flex-wrap items-center gap-3 ${showFilters ? 'flex' : 'hidden'}`}
                        >
                            <button 
                                className={`px-4 py-2 rounded-full text-sm transition-colors
                                    ${selectedCategory === '' 
                                        ? 'bg-primary text-primary-foreground' 
                                        : 'bg-muted hover:bg-muted/80'}`}
                                onClick={() => setSelectedCategory('')}
                            >
                                All Articles
                            </button>
                            
                            {categories.map((category, i) => (
                                <button 
                                    key={i}
                                    className={`px-4 py-2 rounded-full text-sm transition-colors
                                        ${selectedCategory === category 
                                            ? 'bg-primary text-primary-foreground' 
                                            : 'bg-muted hover:bg-muted/80'}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    {/* Error message */}
                    {error && (
                        <div className="rounded-lg border border-red-200 bg-red-50 p-4 my-8 text-center text-red-700">
                            <p>{error}</p>
                        </div>
                    )}
                    
                    {/* Articles list */}
                    {isLoadingPosts ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
                            {[1, 2, 3, 4, 5, 6].map(i => (
                                <div key={i} className="rounded-lg border p-4 h-[380px]">
                                    <div className="w-full aspect-video bg-muted rounded-lg mb-4"></div>
                                    <div className="h-6 bg-muted rounded w-1/4 mb-2"></div>
                                    <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
                                    <div className="h-4 bg-muted rounded w-full mb-2"></div>
                                    <div className="h-4 bg-muted rounded w-5/6 mb-2"></div>
                                    <div className="h-4 bg-muted rounded w-2/3"></div>
                                </div>
                            ))}
                        </div>
                    ) : filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredPosts.map((post, index) => (
                                <BlurFade 
                                    key={post.slug} 
                                    delay={0.3 + index * 0.05} 
                                    className="h-full"
                                >
                                    <BlogCard post={post} imageIndex={index} />
                                </BlurFade>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <h3 className="text-xl font-medium mb-2">
                                No articles found
                            </h3>
                            <p className="text-muted-foreground">
                                Try changing your search query or selecting a different category
                            </p>
                        </div>
                    )}
                </div>
            </BlurFade>
            
            {/* Blog subscription */}
            <BlurFade delay={0.4}>
                <div className="w-full py-16 bg-muted/50">
                    <div className="container mx-auto px-4">
                        <NewsletterForm />
                    </div>
                </div>
            </BlurFade>
        </main>
    );
} 