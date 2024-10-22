import Link from "next/link";
import { formatDate, getBlogPosts } from "@/app/blog/utils";
import { Dot } from "lucide-react";

export function BlogPosts() {
  let allBlogs = getBlogPosts();
  // console.log(allBlogs);
  return (
    <div>
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
            className="flex space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex items-center space-x-[-10px] lg:space-x-0">
              <p className="text-slate-700 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-slate-700 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
