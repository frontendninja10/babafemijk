// app/page.tsx

import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
// import Job from "./components/Job";
import Job from "@/components/Job";
import { socialLinks } from "../lib/data/social-links";
import Link from "next/link";

// export const revalidate = 10;

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="max-w-7xl mx-auto md:px-0 px-6">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-44 lg:mt-0 mt-20 mb-16">
        {profile &&
          profile.map((data) => (
            <div key={data._id} className="max-w-2xl md:ml-[-40px]">
              <h1 className="text-3xl font-bold text-[#161960] tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
                {data.headline}
              </h1>
              <p className="text-base text-slate-400 leading-relaxed">
                {data.shortBio}
              </p>
              <ul className="flex items-center flex-wrap gap-x-5 gap-y-4 my-10">
                {socialLinks
                  .filter((item) => item.status === "social")
                  .map((value) => (
                    <li key={value.id}>
                      <Link
                        href={value.url}
                        className="flex items-center border-b dark:border-b-zinc-800 border-zinc-200 group"
                      >
                        <value.icon
                          className="flex-shrink-0 h-5 w-5 text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300"
                          aria-hidden="true"
                        />{" "}
                        &nbsp;
                        {value.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        {/* <iframe
          src="https://lottie.host/embed/6a014311-9032-407d-b556-40be81bddf29/F6UjV0cL6p.json"
          className="h-[400px] w-[400px] hidden md:block"
        ></iframe> */}
        <iframe
          src="https://lottie.host/embed/4ca0d940-8801-4831-966d-cd9782e8e764/MkPxXOliKK.json"
          className="h-[300px] w-[300px] hidden lg:block"
        ></iframe>
        {/* <iframe
          src="https://lottie.host/embed/03457115-aff1-445a-90fa-223fc223c1b9/XYL00T4udn.json"
          className="h-[350px] w-[350px] hidden md:block"
        ></iframe> */}
      </section>
      <Job />
    </main>
  );
}
