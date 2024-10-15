import { BlogPosts } from "@/components/BlogPosts";

export const metadata = {
  title: "Blog",
  description: "Read my latest blog posts.",
};

export default function Blog() {
  return (
    <div>
      <section className="py-10 lg:mt-24 max-w-6xl mx-auto mt-20">
        <h1
          className={` text-[#1d2f6f] text-3xl font-semibold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight`}
        >
          Blog
        </h1>
        <p className={`text-base text-slate-500 leading-relaxed`}>
          Here are some of my blog posts.
        </p>
        <BlogPosts />
      </section>
    </div>
  );
}
