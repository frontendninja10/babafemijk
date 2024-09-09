import ContributionGraph from "./ContributionGraph";

export default function GithubCalendarComponent() {
  return (
    <section className="lg:mt-32 lg:mb-32 mt-16 px-6 max-w-6xl mx-auto">
      <h2 className="lg:text-4xl text-3xl font-bold tracking-tight mb-4 text-[#212A37]">
        Contribution Graph
      </h2>

      <ContributionGraph />
    </section>
  );
}