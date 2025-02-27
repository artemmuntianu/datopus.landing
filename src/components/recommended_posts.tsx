import Link from "next/link";

export default function RecommendedPosts({ post, allPosts, baseUrl }: { post: any, allPosts: any[], baseUrl: string }) {
    let posts = allPosts.filter((_post: any) => _post.slug !== post.slug); // filter out current post
    const maxPosts = 3 // define maxPosts to display

    return (
        <div>
            <h2 className="text-center">Continue Reading</h2>
            <ul style={{ padding: 0 }}>
                {
                    posts.slice(0, maxPosts).map((post: any, i: any) => (
                        <li key={i}>
                            <Link href={`${baseUrl}/${post.slug}`} className="text-primary underline">{post.metadata.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

//// get tags of current posts
//const tags = post.tags.map((tag) => {
//    return tag.name
//})

//// rate posts depending on tags
//posts.forEach((post) => {
//    post.relevance = 0
//    post.tags.forEach((tag) => {
//        if (tags.includes(tag.name)) {
//            post.relevance++
//        }
//    })
//})

//// sort posts by relevance
//const sortedPosts = posts.sort(function (a, b) {
//    return b.relevance - a.relevance;
//});