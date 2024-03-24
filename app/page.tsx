import About from "@/components/home/About";
import Career from "@/components/home/Career";
import Hero from "@/components/home/Hero";
import RecentProjects from "@/components/home/RecentProjects";
import Skills from "@/components/home/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Career />
      <RecentProjects />
    </main>
  );
}
