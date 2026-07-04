import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  readingTime: string;
  author: string;
  image?: string;
}

export interface Post extends PostMeta {
  html: string;
}

function slugFromFilename(filename: string) {
  return filename.replace(/\.md$/, "");
}

function parseDate(dateStr: string) {
  return new Date(dateStr).getTime();
}

export function getAllPostMeta(): PostMeta[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));

  return files
    .map((filename) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf8");
      const { data } = matter(raw);
      return {
        slug: slugFromFilename(filename),
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
        category: data.category as string,
        readingTime: data.readingTime as string,
        author: data.author as string,
        image: data.image as string | undefined,
      };
    })
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));
}

export function getPost(slug: string): Post | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const html = marked(content) as string;

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    category: data.category as string,
    readingTime: data.readingTime as string,
    author: data.author as string,
    image: data.image as string | undefined,
    html,
  };
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
