import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPostMeta, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Treehouze",
  description:
    "Perspectives on new hire integration, belonging, and the first 90 days at work.",
};

const CATEGORY_COLORS: Record<string, string> = {
  Onboarding: "bg-[#EBF0EC] text-[#1B3A2B]",
  Research:   "bg-[#EBF0EC] text-[#1B3A2B]",
  Culture:    "bg-[#EBF0EC] text-[#1B3A2B]",
};

export default function BlogPage() {
  const posts = getAllPostMeta();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FFFFFF]">

        {/* Header */}
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 border-b border-[#E2E2DE]">
          <span className="text-xs font-medium tracking-widest uppercase text-[#1B3A2B] mb-6 block">
            Journal
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0D0D0B] leading-[1.05] text-pretty max-w-3xl">
            Perspectives on integration, belonging, and the first 90 days.
          </h1>
        </div>

        {/* Posts */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E2E2DE]">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-[#FFFFFF] flex flex-col overflow-hidden"
              >
                {/* Card image — real photo or dark editorial placeholder */}
                <div className="w-full aspect-[16/9] bg-[#0D0D0B] relative overflow-hidden flex items-end p-6">
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  )}
                  {!post.image && (
                    <span className="text-5xl font-black text-white/[0.07] leading-none select-none absolute bottom-3 right-4 pointer-events-none">
                      {post.category.charAt(0)}
                    </span>
                  )}
                  {/* Category pill always visible */}
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full relative z-10 ${
                      post.image
                        ? "bg-white/15 text-white backdrop-blur-sm"
                        : (CATEGORY_COLORS[post.category] ?? "bg-[#EBF0EC] text-[#1B3A2B]")
                    }`}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col gap-4 flex-1">
                  {/* Reading time */}
                  <span className="text-xs text-[#6B6863]">{post.readingTime} read</span>

                  {/* Title */}
                  <h2 className="text-lg font-semibold text-[#0D0D0B] leading-snug group-hover:text-[#1B3A2B] transition-colors flex-1">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-[#6B6863] leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#E2E2DE]">
                    <span className="text-xs text-[#6B6863]">{formatDate(post.date)}</span>
                    <span className="text-xs font-medium text-[#1B3A2B] group-hover:translate-x-0.5 transition-transform inline-block">
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
