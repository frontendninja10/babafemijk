import { BlogPosts } from "@/components/BlogPosts";

export const metadata = {
  title: "Blog",
  description: "Read my latest blog posts.",
};

export default function Blog() {
  return (
    <div className="h-fit">
      <section className="py-10 px-4 lg:mt-24 max-w-6xl mx-auto mt-20 text-center">
        <h1
          className={` text-[#1d2f6f] text-center text-3xl lg:text-4xl font-semibold tracking-normal mb-2 lg:leading-[3.7rem] leading-tight gap-x-2 dark:text-slateBlue`}
        >
          Articles{" "}
        </h1>
        <p
          className={`text-base text-slate-500 leading-relaxed mb-7 dark:text-paleLavender`}
        >
          This is one of the many ways I share my thoughts and experiences with
          the world.
        </p>
        <BlogPosts />
      </section>
    </div>
  );
}
