// app/about/page.tsx

import Image from "next/image";
import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiFile } from "react-icons/bi";
import { profileQuery } from "@/sanity/sanity.query";
import { sanityFetch } from "@/sanity/sanity.client";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default async function About() {
  const profile: ProfileType[] = await sanityFetch({
    query: profileQuery,
    tags: ["profile"],
  });

  console.log(profile);

  return (
    <main
      className={`lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6 lg:mt-44 mt-32 ${openSans.className}`}
    >
      {profile &&
        profile.map((data) => (
          <div key={data._id}>
            <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center">
              <div className="order-2 lg:order-none">
                <h1 className="lg:text-5xl text-4xl lg:leading-tight basis-1/2 font-bold mb-8 text-[#1d2f6f]">
                  I&apos;m {data.fullName}. I live in {data.location}, where I
                  design the future.
                </h1>

                <div className="flex flex-col gap-y-3 text-slate-600 leading-relaxed">
                  <PortableText value={data.fullBio} />
                </div>
              </div>

              <div className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
                <div>
                  <Image
                    className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top bg-[#1d1d20]"
                    src={data.profileImage.image}
                    width={350}
                    height={350}
                    quality={100}
                    alt={data.profileImage.alt}
                  />

                  <a
                    href={`${data.resumeURL}?dl=${data.fullName}_resume.pdf`}
                    className="flex items-center justify-center gap-x-2 border-2 border-[#1d2f6f] hover:bg-[#1d2f6f] hover:text-white rounded-md duration-200 py-2 text-center text-[#1d2f6f] font-semibold"
                  >
                    <BiFile className="text-base" /> Download Resumé
                  </a>
                </div>

                <ul>
                  <li>
                    <a
                      href={`mailto:${data.email}`}
                      className="flex items-center gap-x-2 hover:text-purple-400 duration-300"
                    >
                      <BiEnvelope className="text-lg" />
                      {data.email}
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mt-24 max-w-2xl">
              <h2 className="font-semibold text-4xl mb-4 text-[#1d2f6f]">
                Technologies
              </h2>
              <p className="text-slate-600 max-w-lg">
                I&apos;ve spent few years working on my skills. In no particular
                order, here are a few of them.
              </p>

              <ul className="flex flex-wrap max-w-lg items-center gap-3 mt-8">
                {data.skills?.map((skill, id) => (
                  <li
                    key={id}
                    className="bg-[#1d2f6f] border border-transparent text-white hover:border-zinc-700 rounded-md px-2 py-1"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        ))}
    </main>
  );
}
