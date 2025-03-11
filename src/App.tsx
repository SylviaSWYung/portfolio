import { Header } from "./components/Header";
import { AboutMePage } from "./pages/AboutMePage";
import { HomePage } from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { ProjectPage } from "./pages/ProjectPage";
import { SkillsPage } from "./pages/SkillsPage";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/skills" element={<SkillsPage />} />
      </Routes>
    </>
  );
};
