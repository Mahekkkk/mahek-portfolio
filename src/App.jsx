import { useEffect, useRef, useState } from "react";
import Entry from "./sections/Entry";
import Project from "./sections/Project";
import HowIWork from "./sections/HowIWork";
import Exit from "./sections/Exit";
import CursorEffect from "./components/CursorEffect";
import Background from "./components/Background";
import Skills from "./sections/Skills";

export default function App() {
  const entryRef = useRef(null);
  const projectRef = useRef(null);
  const howRef = useRef(null);
  const exitRef = useRef(null);
  const skillsRef = useRef(null);

  const lastScroll = useRef(0);
  const [scrollSpeed, setScrollSpeed] = useState(0);

  useEffect(() => {
    const sections = [entryRef, projectRef, howRef, exitRef, skillsRef];

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    const onScroll = () => {
      const current = window.scrollY;
      const speed = Math.abs(current - lastScroll.current);

      setScrollSpeed(speed);
      lastScroll.current = current;
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
        <Background scrollSpeed={scrollSpeed} />
      <CursorEffect scrollSpeed={scrollSpeed} />

      <main className="app">
        <Entry ref={entryRef} projectRef={projectRef} exitRef={exitRef}/>
        <Project ref={projectRef} />
        <HowIWork ref={howRef} />
        <Skills ref={skillsRef}/>
        <Exit ref={exitRef} />
      </main>
    </>
  );
}
