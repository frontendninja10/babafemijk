import ContributionGraph from "./ContributionGraph";
import { GeistMono } from "geist/font/mono";

export default function GithubCalendarComponent() {
  return (
    <section className="lg:my-60 mt-16 max-w-6xl mx-auto px-6">
      <h2
        className={`font-bold ${GeistMono.className} lg:text-4xl text-3xl mb-4 text-slate-500 dark:text-slateBlue`}
      >
        Contribution Graph
      </h2>
      <p className="text-slate-500 mb-6 max-w-3xl dark:text-paleLavender">
        This graph visualizes my contributions over the past years, showcasing
        my activity in repositories and helping me track my progress.
      </p>

      <ContributionGraph />
    </section>
  );
}
