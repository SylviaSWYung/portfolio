import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutMePage } from "./pages/AboutMePage";
import { WorkPage } from "./pages/WorkPage";
import { ProjectPage } from "./pages/ProjectPage";
import { SkillsPage } from "./pages/SkillsPage";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { FlowyText } from "./components/FlowyText";

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
      <main className="scroll-smooth overflow-x-hidden w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-40 xl:px-50">
        <section id="home">
          <HomePage />
        </section>
        <section id="about">
          <AboutMePage />
        </section>
        <FlowyText />
        <section id="work" className="scroll-mt-20">
          <WorkPage />
        </section>
        <section id="projects">
          <ProjectPage />
        </section>
        <section id="skills">
          <SkillsPage />
        </section>
      </main>
      <Footer />
    </>
  );
};
