import { BlogPosts } from "@/components/BlogPosts";
import { FlaskConical } from "lucide-react";

export const metadata = {
  title: "Blog",
  description: "Read my latest blog posts.",
};

export default function Blog() {
  return (
    <div>
      <section className="py-10 lg:mt-24 max-w-6xl mx-auto mt-20">
        <div className="flex items-center gap-x-2">
          <h1
            className={` text-[#1d2f6f] text-3xl lg:text-4xl font-semibold tracking-normal mb-2 lg:leading-[3.7rem] leading-tight flex items-center gap-x-2`}
          >
            Articles{" "}
          </h1>
          {/* <FlaskConical className="w-5 h-5 text-gray-500 animate-tilt" /> */}
        </div>
        <p className={`text-base text-slate-500 leading-relaxed mb-7`}>
          This is one of the many ways I share my thoughts and experiences with
          the world.
        </p>
        <BlogPosts />
      </section>
    </div>
  );
}
