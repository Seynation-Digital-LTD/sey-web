import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from 'next';
import BlogCTA from "@/components/BlogCTA";

type Props = {
  params: Promise<{ slug: string }>
}

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    author,
    body
  }`;
  return client.fetch(query, { slug });
}

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Seynation Tech`,
    description: post.title, // You might want to add a description field to your schema
  }
}



export default async function BlogPostPage(props: Props) {
  const params = await props.params;
  let post = await getPost(params.slug);



  if (!post) {
    notFound();
  }



  return (
    <article className="min-h-screen bg-[#050505] text-white pt-24 pb-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primaryThree/10 rounded-full blur-[150px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-primaryOne/10 rounded-full blur-[150px] opacity-30" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Journal
        </Link>

        <header className="mb-8 md:mb-12">
          <div className="flex items-center text-sm text-white/40 mb-4">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            {post.author && (
              <>
                <span className="mx-2">•</span>
                <span className="text-primaryOne font-medium tracking-wider uppercase text-xs">{post.author}</span>
              </>
            )}
          </div>
          <h1 className="font-mina text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
            {post.title}
          </h1>
          {post.mainImage && (
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          )}
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-mina prose-headings:text-white prose-p:text-white/70 prose-strong:text-white prose-a:text-primaryThree">
          <PortableText
            value={post.body}
            components={{
              types: {
                image: ({ value }) => {
                  if (!value?.asset?._ref) {
                    return null;
                  }
                  return (
                    <div className="relative w-full aspect-video my-12 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                      <Image
                        src={urlFor(value).url()}
                        alt={value.alt || ' '}
                        fill
                        className="object-cover"
                      />
                    </div>
                  );
                }
              }
            }}
          />
        </div>

        <BlogCTA />
      </div>
    </article>
  );
}
