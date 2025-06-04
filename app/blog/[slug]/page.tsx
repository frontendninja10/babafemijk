import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { formatDate, getBlogPosts, calculateReadingTime } from "../utils";
import { baseUrl } from "../../sitemap";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="py-10 font-karla lg:mt-20 max-w-4xl mx-auto mt-20 px-4 lg:px-0 h-full">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <Link
        href="/blog"
        className="flex items-center gap-x-2 mb-8 text-slate-600"
      >
        <MoveLeft className="w-4 h-4" />
        <p className="text-sm">Back to all articles</p>
      </Link>
      <h1 className="title mb-8 font-semibold text-[#132052] lg:text-4xl text-2xl tracking-tight dark:text-white">
        {post.metadata.title}
      </h1>

      <div className="flex gap-4 items-center mt-2 my-4 text-sm">
        <p className="text-sm text-neutral-600 dark:text-paleLavender">
          {formatDate(post.metadata.publishedAt, true)}
        </p>
        {"|"}
        <p className="text-slate-700 dark:text-paleLavender text-sm whitespace-nowrap">
          {calculateReadingTime(post.content)} min{" "}
          <span className="hidden lg:inline-block">read</span>
        </p>
      </div>
      {post.metadata.tags && (
        <div className="flex flex-wrap gap-2 mb-10">
          {post.metadata.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-2 text-neutral-600 py-1 capitalize bg-slate-200 text-xs dark:bg-slateBlue dark:text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <article className="prose lg:prose-md max-w-none prose-slate dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
