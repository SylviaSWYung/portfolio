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

  const closeMenu = () => {
    setIsExpanded(false);
  };

  return (
    <div className="h-15 bg-header border-b-1 border-headerborder flex items-center justify-between sm:justify-around">
      <Link
        to="/"
        className="ml-6 sm:ml-0 font-inria text-text-dark text-lg md:text-2xl"
      >
        Sylvia Suet Wai Yung
      </Link>
      <div className="hidden sm:flex font-inria text-lg md:text-2xl text-text-dark gap-16 hover:text-gray-900">
        <Link to="/about">ABOUT ME</Link>
        <Link to="/projects">PROJECT</Link>
        <Link to="/skills">SKILLS</Link>
      </div>
      <button
        type="button"
        onClick={resume}
        className="font-inria text-base sm:text-lg xl:text-xl text-text-dark border-1 rounded-full h-8 w-20 sm:w-22 xl:h-10 xl:w-28 bg-button/50 shadow-lg ml-6 hover:bg-hover/50"
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
        <div className="flex items-center z-10 absolute w-full text-base top-15 justify-evenly bg-header sm:hidden p-8 font-inria ">
          <Link
            to="/about"
            className="block text-text-dark hover:text-gray-900"
            onClick={closeMenu}
          >
            ABOUT ME
          </Link>
          <Link
            to="/projects"
            className="block text-text-dark hover:text-gray-900"
            onClick={closeMenu}
          >
            PROJECT
          </Link>
          <Link
            to="/skills"
            className="block text-text-dark hover:text-gray-900"
            onClick={closeMenu}
          >
            SKILLS
          </Link>
        </div>
      )}
    </div>
  );
};
