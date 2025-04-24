import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RecommendedPosts({ post, allPosts, baseUrl }: { post: any, allPosts: any[], baseUrl: string }) {
    // Filter out current post and get maximum 3 posts
    let posts = allPosts.filter((_post: any) => _post.slug !== post.slug).slice(0, 3);
    
    // Check if posts have tags for more relevant recommendations
    // Uncomment and use this code if you add tags to post metadata
    /*
    // Get tags of current post (if they exist)
    const tags = post.metadata.tags || [];

    // Rate posts based on matching tags
    posts.forEach((p) => {
        p.relevance = 0;
        const postTags = p.metadata.tags || [];
        postTags.forEach((tag) => {
            if (tags.includes(tag)) {
                p.relevance++;
            }
        });
    });

    // Sort posts by relevance
    posts = posts.sort((a, b) => b.relevance - a.relevance).slice(0, 3);
    */

    // Placeholder images for when posts don't have an image
    const placeholderImages = [
        "https://datopus.blob.core.windows.net/blog/what-is-product-feature-analytics.jpg",
        "https://datopus.blob.core.windows.net/blog/boost-your-e-commerce-success-with-product-analytics.jpg",
        "https://datopus.blob.core.windows.net/blog/product-analytics-vs-web-analytics-differences-benefits-and-examples.jpg"
    ];

    return (
        <div className="px-4 py-8 border-t border-b">
            <h2 className="text-2xl font-bold mb-8 text-center">Recommended Articles</h2>
            
            {posts.length === 0 ? (
                <p className="text-center text-gray-500">No recommended articles available yet</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {posts.map((post, i) => (
                        <Link 
                            href={`${baseUrl}/${post.slug}`}
                            key={post.slug}
                            className="group flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img 
                                    src={post.metadata.image || placeholderImages[i % placeholderImages.length]} 
                                    alt={post.metadata.title} 
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col flex-grow p-4 bg-white dark:bg-gray-800">
                                <h3 className="text-lg font-medium mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                                    {post.metadata.title}
                                </h3>
                                {post.metadata.summary && (
                                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                                        {post.metadata.summary}
                                    </p>
                                )}
                                <div className="mt-auto flex items-center text-sm font-medium text-primary">
                                    <span>Read article</span>
                                    <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

// Get tags of current posts
//const tags = post.tags.map((tag) => {
//    return tag.name
//})

// Rate posts depending on tags
//posts.forEach((post) => {
//    post.relevance = 0
//    post.tags.forEach((tag) => {
//        if (tags.includes(tag.name)) {
//            post.relevance++
//        }
//    })
//})

// Sort posts by relevance
//const sortedPosts = posts.sort(function (a, b) {
//    return b.relevance - a.relevance;
//});