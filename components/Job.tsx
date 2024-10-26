import Image from "next/image";
// import { getJob } from "@/sanity/sanity.query";
import { sanityFetch } from "@/sanity/sanity.client";
import type { JobType } from "@/types";
import { formatDate } from "@/lib/date";
import { GeistSans } from "geist/font/sans";
import { jobQuery } from "@/sanity/sanity.query";

// export const revalidate = 10;

export default async function Job() {
  const job: JobType[] = await sanityFetch({
    query: jobQuery,
    tags: ["job"],
  });

  const sortedJobs = job.sort((a, b) => {
    if (!a.endDate) return -1; // Current job (no end date) comes first
    if (!b.endDate) return 1; // Current job (no end date) comes first
    return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
  });

  return (
    <section className="lg:mt-28 mt-16 max-w-6xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="font-semibold lg:text-4xl text-3xl mb-4 text-[#1d2f6f]">
          Work Experience
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
        {sortedJobs.map((data, index) => {
          return (
            <div
              key={data._id}
              className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200"
            >
              <a
                href={data.url}
                rel="noreferrer noopener"
                className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative grid place-items-center p-2 bg-zinc-100"
              >
                <Image
                  src={data.logo}
                  className="object-cover"
                  alt={`${data.name} logo`}
                  width={50}
                  height={50}
                />
              </a>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold text-[#161960]">
                  {data.name}
                </h3>
                <p>{data.jobTitle}</p>
                <time className="text-sm text-zinc-500 mt-2 tracking-wider uppercase">
                  {formatDate(data.startDate)} -{" "}
                  {data.endDate ? (
                    formatDate(data.endDate)
                  ) : (
                    <span className="dark:text-primary-color text-tertiary-color">
                      Present
                    </span>
                  )}
                </time>
                <p className={`text-base text-slate-500 my-4 leading-relaxed`}>
                  {data.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
