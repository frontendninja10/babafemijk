import Job from "@/components/Job";
import Header from "@/components/Header";
import GithubCalendarComponent from "@/components/GithubCalendarComponent";

export default async function Home() {
  return (
    <main>
      <Header />
      <GithubCalendarComponent />
      <Job />
    </main>
  );
}
