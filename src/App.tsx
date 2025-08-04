import { Header } from "./components/Header";
import { AboutMePage } from "./pages/AboutMePage";
import { HomePage } from "./pages/HomePage";
import { ProjectPage } from "./pages/ProjectPage";
import { SkillsPage } from "./pages/SkillsPage";

export const App = () => {
  return (
    <>
      <Header />
      <main className="pt-20 scroll-smooth lg:px-40">
        <HomePage />
        <img src="div/waveStar.png" alt="" className="sm:mb-10" />
        <AboutMePage />
        <ProjectPage />
        <SkillsPage />
      </main>
    </>
  );
};
