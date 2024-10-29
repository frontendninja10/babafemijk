import Job from "@/components/Job";
import Header from "@/components/Header";
import GithubCalendarComponent from "@/components/GithubCalendarComponent";

export default async function Home() {
  return (
    <main className="dark:bg-[#121212]">
      <Header />
      <GithubCalendarComponent />
      <Job />
    </main>
  );
}
