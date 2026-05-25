import About from "./about/page";
import ExperienceJob from "./experience-job/page";
import Experience from "./experience/page";
import HeroSection from "./home/page";
import Projects from "./project/page";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Experience />
      <About />
      <ExperienceJob />
      <Projects />
      
    </main>
  );
}
