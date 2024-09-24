import ContributionGraph from "./ContributionGraph";

export default function GithubCalendarComponent() {
  return (
    <section className="lg:mt-32 lg:mb-32 mt-16 max-w-6xl mx-auto">
      <h2 className="font-semibold lg:text-4xl text-3xl mb-4 text-[#212A37]">
        Contribution Graph
      </h2>

      <ContributionGraph />
    </section>
  );
}
