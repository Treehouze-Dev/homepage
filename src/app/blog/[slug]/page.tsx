import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPost, getAllPostMeta, formatDate } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPostMeta().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Treehouze`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FFFFFF]">

        {post.image ? (
          <>
            <div className="max-w-3xl mx-auto px-6 py-16">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-[#6B6863] hover:text-[#0D0D0B] transition-colors mb-10"
              >
                ← Back to Journal
              </Link>

              {/* Title above image — landing page style */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-medium tracking-widest uppercase text-[#1B3A2B]">
                    {post.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#E2E2DE]" />
                  <span className="text-xs text-[#6B6863]">{post.readingTime} read</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0D0D0B] leading-[1.05] text-pretty">
                  {post.title}
                </h1>
              </div>

              {/* Image — same width as article */}
              <div className="relative w-full overflow-hidden rounded-xl mb-12" style={{ aspectRatio: "16/9" }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 768px) 672px, calc(100vw - 3rem)"
                />
              </div>

              {/* Excerpt + meta */}
              <div className="mb-12 pb-10 border-b border-[#E2E2DE]">
                <p className="text-base text-[#6B6863] leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-[#6B6863]">
                  <span>{post.author}</span>
                  <span className="w-1 h-1 rounded-full bg-[#E2E2DE]" />
                  <span>{formatDate(post.date)}</span>
                </div>
              </div>

              <article
                className="prose-treehouze"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
              <div className="mt-16 pt-8 border-t border-[#E2E2DE]">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#1B3A2B] hover:underline"
                >
                  ← All articles
                </Link>
              </div>
            </div>
          </>
        ) : (
          /* Fallback: no image — plain header layout */
          <div className="max-w-3xl mx-auto px-6 py-20">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[#6B6863] hover:text-[#0D0D0B] transition-colors mb-12"
            >
              ← Back to Journal
            </Link>

            <header className="mb-12 pb-10 border-b border-[#E2E2DE]">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#EBF0EC] text-[#1B3A2B]">
                  {post.category}
                </span>
                <span className="text-xs text-[#6B6863]">{post.readingTime} read</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#0D0D0B] leading-[1.05] mb-4 text-pretty">
                {post.title}
              </h1>
              <p className="text-base text-[#6B6863] leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-3 text-xs text-[#6B6863]">
                <span>{post.author}</span>
                <span className="w-1 h-1 rounded-full bg-[#E2E2DE]" />
                <span>{formatDate(post.date)}</span>
              </div>
            </header>

            <article
              className="prose-treehouze"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            <div className="mt-16 pt-8 border-t border-[#E2E2DE]">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1B3A2B] hover:underline"
              >
                ← All articles
              </Link>
            </div>
          </div>
        )}

      </main>
      <Footer />
    </>
  );
}
