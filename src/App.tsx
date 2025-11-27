import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutMePage } from "./pages/AboutMePage";
import { WorkPage } from "./pages/WorkPage";
import { ProjectPage } from "./pages/ProjectPage";
import { SkillsPage } from "./pages/SkillsPage";
import { Footer } from "./components/Footer";
import { HeaderNew } from "./components/HeaderNew";

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
      <HeaderNew />
      <main className="pt-20 scroll-smooth overflow-x-hidden w-[min(1600px,92%)] mx-auto">
        <section id="home" className="scroll-mt-20">
          <HomePage />
        </section>
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
      <Footer />
    </>
  );
};
