import { getPosts } from "@/data/post";
import { Metadata } from "next";
import BlogClientPage from "./page-client";

export const metadata: Metadata = {
  title: 'Blog | Datopus',
  description: 'Articles and guides about product analytics, data and business development',
  openGraph: {
    title: 'Blog | Datopus',
    description: 'Articles and guides about product analytics, data and business development',
    type: 'website',
  },
};

export default async function BlogPage() {
  try {
    // Pre-fetch posts on the server to hydrate the cache
    await getPosts("content/blog");
    
    // Render the client component
    return <BlogClientPage />;
  } catch (error) {
    console.error("Error fetching blog posts on server:", error);
    
    // Even if server-side fetching fails, still render the client component 
    // which will try to fetch data from the API route
    return <BlogClientPage />;
  }
} 