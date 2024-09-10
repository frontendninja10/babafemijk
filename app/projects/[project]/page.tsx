// app/projects/[project]/page.tsx

import Image from "next/image";
import { Metadata } from "next";
import { getSingleProject } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
import { BiLinkExternal } from "react-icons/bi";
import { CustomPortableText } from "@/components/CustomPortableText";
// import fallBackImage from "@/public/project.png";

type Props = {
  params: {
    project: string;
  };
};

// export const revalidate = 10;

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.project;
  const project: ProjectType = await getSingleProject(slug);

  return {
    title: `${project.name} | Project`,
    description: project.tagline,
    openGraph: {
      images: project.coverImage?.image || "add-a-fallback-project-image-here",
      title: project.name,
      description: project.tagline,
    },
  };
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project: ProjectType = await getSingleProject(slug);

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start justify-between mb-4">
          <h1 className="font-extrabold lg:text-5xl text-3xl lg:leading-tight mb-4 tracking-tight">
            {project.name}
          </h1>

          <a
            href={project.projectUrl}
            rel="noreferrer noopener"
            className="bg-slate-200 text-black hover:border-zinc-700 border border-transparent rounded-md px-4 py-2 flex items-center gap-2"
          >
            <BiLinkExternal aria-hidden="true" />
            Explore
          </a>
        </div>
        <div className="bg-slate-100 p-4 rounded-xl">
          <Image
            className="rounded-xl border"
            width={900}
            height={460}
            src={project.coverImage?.image}
            alt={project.coverImage?.alt || project.name}
          />
        </div>

        <div className="flex flex-col gap-y-6 mt-8 leading-7 text-slate-500">
          <PortableText
            value={project.description}
            components={CustomPortableText}
          />
        </div>
      </div>
    </main>
  );
}
