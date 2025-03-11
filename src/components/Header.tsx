import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { Link } from "react-router-dom";

function resume() {
  window.open("/Resume.pdf", "_blank");
}

export const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="h-15 sm:h-18 bg-header border-b-1 border-headerborder flex items-center justify-between sm:justify-around">
      <Link
        to="/"
        className="ml-6 sm:ml-0 font-inria text-text-dark text-2xl xl:text-3xl"
      >
        Sylvia Suet Wai Yung
      </Link>
      <div className="hidden sm:flex font-inria xl:mr-50 text-2xl xl:text-3xl text-text-dark gap-16 hover:text-gray-900">
        <Link to="/about">ABOUT ME</Link>
        <Link to="/projects">PROJECT</Link>
        <Link to="/skills">SKILLS</Link>
      </div>
      <button
        type="button"
        onClick={resume}
        className="font-inria text-lg xl:text-xl text-text-dark border-1 rounded-full h-8 w-22 xl:h-10 xl:w-28 bg-button/50 shadow-lg ml-8 hover:bg-hover/50"
      >
        RESUME
      </button>
      <button
        onClick={toggleMenu}
        type="button"
        className="items-center mr-4 h-10 justify-center rounded-lg sm:hidden"
      >
        <HamburgerMenu />
      </button>
      {/* Mobile Dropdown menu */}
      {isExpanded && (
        <div className="flex flex-col items-center z-10 absolute w-full top-15 bg-header sm:hidden p-8 font-inria ">
          <a href="/about" className="block text-text-dark hover:text-gray-900">
            ABOUT ME
          </a>
          <a
            href="/projects"
            className="block text-text-dark hover:text-gray-900"
          >
            PROJECT
          </a>
          <a
            href="/contact"
            className="block text-text-dark hover:text-gray-900"
          >
            SKILLS
          </a>
        </div>
      )}
    </div>
  );
};
