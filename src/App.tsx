import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header";
import { AboutMePage } from "./pages/AboutMePage";
import { WorkPage } from "./pages/WorkPage";
import { ProjectPage } from "./pages/ProjectPage";
import { SkillsPage } from "./pages/SkillsPage";

export const App = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace("/", "");
    const sectionId = path === "" ? "home" : path;

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main className="pt-20 scroll-smooth overflow-x-hidden max-w-7xl mx-auto">
        <section id="home" className="scroll-mt-20">
          <HomePage />
        </section>
        <img
          src="div/waveStar.png"
          alt=""
          className="w-full max-w-full h-auto"
        />
        <section id="about" className="scroll-mt-5">
          <AboutMePage />
        </section>
        <section id="work" className="scroll-mt-5">
          <WorkPage />
        </section>
        <section id="projects" className="scroll-mt-5">
          <ProjectPage />
        </section>
        <section id="skills" className="scroll-mt-5">
          <SkillsPage />
        </section>
      </main>
    </>
  );
};
