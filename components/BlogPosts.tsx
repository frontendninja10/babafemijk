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
  // Group posts by year
  const groupedPosts = allBlogs.reduce(
    (groups: { [key: string]: typeof allBlogs }, post) => {
      const year = new Date(post.metadata.publishedAt).getFullYear().toString();
      if (!groups[year]) {
        groups[year] = [];
      }
      groups[year].push(post);
      return groups;
    },
    {}
  );

  // Sort years in descending order
  const sortedYears = Object.keys(groupedPosts).sort(
    (a, b) => Number(b) - Number(a)
  );
  return (
    <div className="mt-20">
      {sortedYears.map((year) => (
        <div key={year} className="mb-8">
          <h2 className="text-2xl font-bold text-[#1d2f6f] dark:text-paleLavender mb-4">
            {year}
          </h2>
          {groupedPosts[year]
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="w-full flex items-center gap-2 lg:gap-3 dark:text-paleLavender border-b-[1px] pb-2 border-paleLavender mb-4 max-w-[100%] lg:max-w-[70%] mx-auto transition-transform duration-200 hover:scale-[1.02]"
              >
                <p className="text-[#1d2f6f] text-sm font-semibold tabular-nums dark:text-paleLavender w-[55px] lg:w-[120px] shrink-0 text-left">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <p className="text-slate-700 dark:text-paleLavender whitespace-nowrap overflow-hidden text-ellipsis">
                  {post.metadata.title}
                </p>
                <p className="text-slate-700 dark:text-paleLavender text-sm ml-auto whitespace-nowrap">
                  {calculateReadingTime(post.content)} min{" "}
                  <span className="hidden lg:block">read</span>
                </p>
              </Link>
            ))}
        </div>
      ))}
    </div>
  );
}
