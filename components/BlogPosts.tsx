import Link from "next/link";
import {
  calculateReadingTime,
  formatDate,
  getBlogPosts,
} from "@/app/blog/utils";
import { Dot } from "lucide-react";

export function BlogPosts() {
  let allBlogs = getBlogPosts();
  // console.log(allBlogs);
  return (
    <div className="mt-20">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="w-full flex items-center gap-6 dark:text-paleLavender border-b-[1px] border-paleLavender mb-4 max-w-[70%] mx-auto"
          >
            <p className="text-slate-700 tabular-nums dark:text-paleLavender w-[120px] shrink-0 text-left">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <p className="text-slate-700 tracking-tight dark:text-paleLavender">
              {post.metadata.title}
            </p>
            <p className="text-slate-700 dark:text-paleLavender text-sm ml-auto">
              {calculateReadingTime(post.content)} min read
            </p>
          </Link>
        ))}
    </div>
  );
}
