import { getAchievements } from "@/sanity/sanity.query";
import { AchievementsType } from "@/types";
import Image from "next/image";

export default async function Achievements() {
  const achievements: AchievementsType[] = await getAchievements();
  console.log(achievements);
  return (
    <section className="py-10 lg:mt-24 max-w-6xl mx-auto px-6 mt-20">
      <section className="max-w-4xl mb-16">
        <h1
          className={` text-[#1d2f6f] text-3xl font-semibold tracking-tight lg:text-5xl mb-6 lg:leading-[3.7rem] leading-tight dark:text-slateBlue`}
        >
          Achievements
        </h1>
        <p
          className={`text-base text-slate-500 leading-relaxed dark:text-paleLavender`}
        >
          Here are some of my achievements and certifications I&apos;ve earned.
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((achievement) => (
          <div key={achievement._id}>
            <Image
              src={achievement.achievementImage.image}
              alt={achievement.achievementImage.alt}
              width={900}
              height={460}
              className="rounded-xl border transition-all duration-300 hover:scale-105"
            />
            <h3 className="text-md font-semibold text-center mt-4 text-slate-500 dark:text-paleLavender">
              {achievement.achievementTitle}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
