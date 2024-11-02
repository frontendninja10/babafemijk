import Image from "next/image";
import type { EventsType } from "@/types";
import { getEvents } from "@/sanity/sanity.query";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default async function Events() {
  const events: EventsType[] = await getEvents();

  const sortedEvents = events.sort((a, b) => b.year - a.year);
  console.log(sortedEvents);

  return (
    <section className="py-10 lg:mt-24 max-w-6xl mx-auto px-6">
      <section className="max-w-4xl mb-16">
        <h1
          className={`${openSans.className} text-[#1d2f6f] text-3xl font-semibold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight dark:text-slateBlue`}
        >
          Events I&apos;ve Attended
        </h1>
        <p
          className={`${openSans.className} text-base text-slate-500 leading-relaxed dark:text-paleLavender`}
        >
          I love to attend events and conferences to learn and network with
          other professionals in the industry. Here are some of the events
          I&apos;ve attended so far.
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedEvents.map((event) => (
          <div key={event._id}>
            <Image
              src={event.eventImage.image}
              alt={event.eventImage.alt}
              width={900}
              height={460}
              className="rounded-xl border transition-all duration-300 hover:scale-105"
            />
            <p className="text-sm text-center mt-4 font-bold dark:text-paleLavender">
              {event.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
