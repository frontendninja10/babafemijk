// app/projects/page.tsx

import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import { GeistSans } from "geist/font/sans";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default async function Project() {
  const projects: ProjectType[] = await getProjects();

  const sortedProjects = projects.sort((a, b) => {
    if (a.name === "Flincap") return -1; // Flincap comes first
    if (b.name === "Flincap") return 1; // Flincap comes first
    return 0; // Keep original order for others
  });

  return (
    <main
      className={`max-w-7xl mx-auto md:px-16 px-6 lg:mt-44 mt-32 ${openSans.className}`}
    >
      <section className="max-w-2xl mb-16">
        <h1
          className={`${openSans.className} text-[#1d2f6f] text-3xl font-semibold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight`}
        >
          Welcome to my Projects Showcase
        </h1>
        <p
          className={`${openSans.className} text-base text-slate-500 leading-relaxed`}
        >
          Here you&apos;ll find a curated selection of projects that represent
          my best work and showcase my skills as a developer. From fintech
          solutions to crypto platforms, each project reflects my passion for
          creating innovative and impactful software. Feel free to explore, and
          if you have any questions, don&apos;t hesitate to reach out!
        </p>
      </section>

      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
        {sortedProjects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="group flex items-center gap-x-4 bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 hover:border-indigo-300 p-4 rounded-xl transition-all duration-300 ease-in-out hover:shadow-md"
          >
            <div className="relative w-[60px] h-[60px]">
              {/* <div className="absolute inset-0 bg-slate-100 rounded-lg transform -rotate-6 transition-transform group-hover:rotate-3"></div> */}
              <div className="absolute inset-0 transform -rotate-6 transition-transform group-hover:rotate-3">
                <Image
                  src={project.logo}
                  layout="fill"
                  objectFit="contain"
                  alt={project.name}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="font-bold text-lg text-slate-800 mb-1">
                {project.name}
              </h2>
              <div className={`${openSans.className} text-sm text-slate-600`}>
                {project.tagline}
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
