import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { socialLinks } from "../lib/data/social-links";
import Link from "next/link";
import { HeroSvg } from "@/components/HeroSvg";
import { Open_Sans } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { Karla } from "next/font/google";
import HeroIcons from "./HeroIcons";
import { GeistMono } from "geist/font/mono";

// import { ScaleButton } from "./animations/animations";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default async function Header() {
  const profile: ProfileType[] = await getProfile();
  return (
    <header className="max-w-6xl font-karla lg:pt-52 lg:pb-44 pt-32 pb-32 mx-auto px-4 flex flex-col lg:flex-row lg:p-0 lg:items-center lg:justify-between dark:text-white">
      {profile &&
        profile.map((data) => (
          <div key={data._id} className="max-w-[49rem]">
            <h1
              className={`text-[32px] ${GeistMono.className} text-slate-500 font-semibold tracking-normal lg:text-7xl mb-6 lg:leading-20 lg:min-w-[450px] min-w-full dark:text-slateBlue`}
            >
              Frontend Engineer, <br /> Technical Writer.
            </h1>
            <p
              className={`text-base mb-10 text-slate-500 leading-relaxed dark:text-paleLavender`}
            >
              {data.shortBio}
            </p>
            {/* <Link href={`${data.resumeURL}?dl=${data.fullName}_resume.pdf`}>
              <button className="bg-[#1d2f6f] text-white px-4 py-3 dark:bg-gradient-to-r dark:from-blue-500 dark:to-purple-500 dark:text-slate-300 rounded-md">
                Download Resume
              </button>
            </Link> */}

            <ul className="flex items-center flex-wrap gap-x-5 gap-y-4 my-10">
              {socialLinks
                .filter((item) => item.status === "social")
                .map((value) => (
                  <li key={value.id}>
                    <Link
                      href={value.url}
                      className="flex items-center border-b dark:border-b-zinc-800 border-zinc-200 group dark:text-[#6a5acd]"
                    >
                      <value.icon
                        className="flex-shrink-0 h-5 w-5 text-slate-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300 dark:text-[#6a5acd]"
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
      <div className="lg:max-w-[377px] max-w-[320px] mt-12 lg:mt-0 self-center">
        {/* <HeroSvg /> */}
        <HeroIcons />
        {/* <HeroSvg2 /> */}
      </div>
    </header>
  );
}
