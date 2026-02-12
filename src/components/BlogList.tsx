"use client";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Post {
  _id: string;
  title: string;
  slug?: { current: string };
  mainImage: any;
  publishedAt: string;
  author: string;

}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function BlogList({ posts }: { posts: Post[] }) {
  if (!posts) return null;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {posts?.filter(post => post?.slug?.current).map((post) => (
        <motion.div variants={itemVariants} key={post._id}>
          <Link
            href={`/blog/${post.slug.current}`}
            className="group relative flex flex-col h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors duration-500"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              {post.mainImage ? (
                <>
                  <Image
                    src={typeof post.mainImage === 'string' ? post.mainImage : urlFor(post.mainImage).url()}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                </>
              ) : (
                <div className="w-full h-full bg-white/5 flex items-center justify-center text-white/40">
                  <span className="text-sm">No Image Available</span>
                </div>
              )}

              {/* Category/Date Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-medium bg-black/50 backdrop-blur-md text-white/90 rounded-full border border-white/10">
                  {new Date(post.publishedAt).toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow relative">
              <div className="mb-4">
                {post.author && (
                  <span className="text-xs font-medium text-primaryOne mb-2 block uppercase tracking-wider">
                    {post.author}
                  </span>
                )}
                <h3 className="font-mina text-xl font-bold text-white mb-3 line-clamp-2 leading-tight group-hover:text-primaryThree transition-colors duration-300">
                  {post.title}
                </h3>
              </div>

              <div className="mt-auto flex items-center text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                Read Article
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
              </div>

              {/* Glow Effect */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primaryOne/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
