import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experiences';
import Skills from './components/sections/Skills';
import FindMe from './components/sections/FindMe';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <FindMe />
    </div>
  );
}
