import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { socialLinks } from "../lib/data/social-links";
import Link from "next/link";
import HeroSvg from "@/components/HeroSvg";

export default async function Header() {
  const profile: ProfileType[] = await getProfile();
  return (
    <header className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row lg:p-0 lg:items-center lg:justify-between">
      {profile &&
        profile.map((data) => (
          <div key={data._id} className="max-w-2xl">
            <h1 className="text-3xl text-[#212A37] font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
              {data.headline}
            </h1>
            <p className="text-base text-slate-500 leading-relaxed">
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
                        className="flex-shrink-0 h-5 w-5 text-slate-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300"
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
      </div>
    </header>
  );
}
