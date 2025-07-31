import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { Link } from "react-router-dom";

function resume() {
  window.open("/Resume.pdf", "_blank");
}

const hover_color = "hover:text-cerise";
const mobile_text = "block text-black hover:text-cerise";

export const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const closeMenu = () => {
    setIsExpanded(false);
  };

  return (
    <div className="fixed top-0 left-0 h-20 w-full z-50 bg-FCFCFC/70 backdrop-blur-sm flex flex-row items-center justify-between sm:justify-around">
      <a
        href="#homepage"
        className="ml-6 sm:ml-0 font-inria font-bold text-text-dark text-lg md:text-2xl hover:text-cerise"
      >
        Sylvia Yung
      </a>
      <div className="hidden sm:flex font-inria text-lg md:text-xl text-black gap-16">
        <a href="#about" className={hover_color}>
          About me
        </a>
        <a href="#projects" className={hover_color}>
          Project
        </a>
        <a href="#skills" className={hover_color}>
          Skills
        </a>
        <a href="#work" className={hover_color}>
          Work
        </a>
      </div>
      <button
        type="button"
        onClick={resume}
        className="font-inria text-base sm:text-lg xl:text-lg text-text-dark font-bold rounded-full h-8 w-20 sm:w-22 xl:h-10 xl:w-28 bg-cerise/80 shadow-lg ml-6 hover:bg-cerise/50"
      >
        Resume
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
        <div className="flex items-center z-50 fixed w-full text-base top-15 justify-evenly bg-white/80 sm:hidden p-8 font-inria ">
          <Link to="/about" className={mobile_text} onClick={closeMenu}>
            About me
          </Link>
          <Link to="/projects" className={mobile_text} onClick={closeMenu}>
            Project
          </Link>
          <Link to="/skills" className={mobile_text} onClick={closeMenu}>
            Skills
          </Link>
          <Link to="/work" className={mobile_text} onClick={closeMenu}>
            Work
          </Link>
        </div>
      )}
    </div>
  );
};
