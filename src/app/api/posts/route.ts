import { getPosts } from "@/data/post";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const searchParams = new URL(request.url).searchParams;
    const dir = searchParams.get("dir") || "content/blog";
    
    const posts = await getPosts(dir);
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
} 