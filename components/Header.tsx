import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { socialLinks } from "../lib/data/social-links";
import Link from "next/link";
import { HeroSvg } from "@/components/HeroSvg";
import { Open_Sans } from "next/font/google";
import { GeistSans } from "geist/font/sans";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default async function Header() {
  const profile: ProfileType[] = await getProfile();
  return (
    <header className="max-w-6xl lg:mt-44 mt-32 mx-auto px-6 flex flex-col lg:flex-row lg:p-0 lg:items-center lg:justify-between">
      {profile &&
        profile.map((data) => (
          <div key={data._id} className="max-w-2xl">
            <h1
              className={`${GeistSans.className} text-4xl text-[#1d2f6f] font-semibold tracking-normal lg:text-5xl mb-6 lg:leading-20 lg:min-w-[400px] min-w-full`}
            >
              {/* {data.headline} */}
              {/* <span className="bg-gradient-to-r from-[#21b1ff] to-[#ff218c] bg-clip-text text-transparent">
                Frontend {""}
              </span> */}
              Frontend Software Engineer & Tech Writer
            </h1>
            <p
              className={`${openSans.className} text-base mb-10 text-slate-500 leading-relaxed`}
            >
              {data.shortBio}
            </p>
            <Link
              href={`${data.resumeURL}?dl=${data.fullName}_resume`}
              download
            >
              <button className="bg-[#1d2f6f] text-white px-4 py-3">
                Download Resume
              </button>
            </Link>
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
                        className="flex-shrink-0 h-5 w-5 text-[#1d2f6f] group-hover:dark:text-white group-hover:text-zinc-800 duration-300"
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
      <div className="lg:max-w-[377px] max-w-[320px] self-center">
        <HeroSvg />
        {/* <HeroSvg2 /> */}
      </div>
    </header>
  );
}
