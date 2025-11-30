import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  AboutMePage,
  HomePage,
  ProjectPage,
  SkillsPage,
  WorkPage,
} from "./pages";
import { FlowyText, Footer, Header } from "./components";

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
        <section id="home" className="scroll-mt-20">
          <HomePage />
        </section>
        <section id="about">
          <AboutMePage />
        </section>
        <FlowyText />
        <section id="work" className="scroll-mt-20">
          <WorkPage />
        </section>
        <section id="projects" className="scroll-mt-10">
          <ProjectPage />
        </section>
        <section id="skills" className="scroll-mt-6">
          <SkillsPage />
        </section>
      </main>
      <Footer />
    </>
  );
};
