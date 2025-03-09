import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

function resume() {
  window.open("/Resume.pdf", "_blank");
}

export const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="h-15 bg-header border-b-1 border-headerborder flex items-center justify-between">
      <h1 className="ml-6 font-inria text-text-dark text-2xl ">
        Sylvia Suet Wai Yung
      </h1>
      <button
        type="button"
        onClick={resume}
        className="font-inria text-lg text-text-dark border-1 rounded-2xl h-8 w-22 bg-button/50 shadow-lg ml-8 hover:bg-hover/50"
      >
        RESUME
      </button>
      <button
        onClick={toggleMenu}
        type="button"
        className="items-center mr-4 h-10 justify-center rounded-lg md:hidden"
      >
        <HamburgerMenu />
      </button>
      {/* Dropdown menu */}
      {isExpanded && (
        <div className="flex flex-col items-center absolute w-full top-15 bg-header ${isExpanded ? 'block' : 'hidden'} p-8 font-inria ">
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
