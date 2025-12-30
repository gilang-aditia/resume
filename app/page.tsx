import About from "./about/page";
import Experience from "./experience/page";
import HeroSection from "./home/page";
import Projects from "./project/page";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Experience />
      <About />
      <Projects />
    </main>
  );
}
