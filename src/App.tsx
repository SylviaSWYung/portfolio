import { Header } from "./components/Header";
import { AboutMePage } from "./pages/AboutMePage";
import { HomePage } from "./pages/HomePage";
import { ProjectPage } from "./pages/ProjectPage";
import { SkillsPage } from "./pages/SkillsPage";

export const App = () => {
  return (
    <>
      <Header />
      <main className="pt-20 scroll-smooth lg:px-50 overflow-x-hidden">
        <HomePage />
        <img
          src="div/waveStar.png"
          alt=""
          className="w-full max-w-full h-auto"
        />
        <AboutMePage />
        <ProjectPage />
        <SkillsPage />
      </main>
    </>
  );
};
