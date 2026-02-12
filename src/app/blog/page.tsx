import { client } from "@/sanity/lib/client";
import BlogList from "@/components/BlogList";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Blog | Seynation Tech",
  description: "Read our latest articles and insights.",
};

async function getPosts() {
  try {
    const query = `*[_type == "post"] | order(publishedAt desc) {
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

export default async function BlogPage() {
  const sanityPosts = await getPosts();
  const posts = sanityPosts;

  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primaryThree/10 rounded-full blur-[150px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-primaryOne/10 rounded-full blur-[150px] opacity-30" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <h1 className="font-mina text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryOne to-primaryThree">Journal</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light">
            Insights, stories, and expertise from the masterminds shaping the future of digital.
          </p>
        </header>

        <BlogList posts={posts} />
      </div>
    </div>
  );
}
