import { client } from "@/sanity/lib/client";
import BlogList from "./BlogList";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MOCK_POSTS } from "@/app/blog/mockPosts";

async function getLatestPosts() {
  try {
    const query = `*[_type == "post"] | order(publishedAt desc)[0...4] {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      author
    }`;
    const posts = await client.fetch(query);
    return posts || [];
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return [];
  }
}

export default async function LatestBlogs() {
  const sanityPosts = await getLatestPosts();
  
  // Use mock posts if sanity is empty
  const posts = sanityPosts.length > 0 ? sanityPosts : MOCK_POSTS;

  return (
    <section className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primaryThree/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primaryOne/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-mina text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryOne to-primaryThree">Insights</span>
            </h2>
            <p className="font-inter text-lg text-white/60 leading-relaxed">
              Explore our latest thoughts on technology, design, and innovation. 
              We share what we learn to help you grow.
            </p>
          </div>
          
          <Link 
            href="/blog" 
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
          >
            <span className="text-white font-medium">View all posts</span>
            <ArrowRight className="h-4 w-4 text-primaryOne transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <BlogList posts={posts} />
      </div>
    </section>
  );
}
