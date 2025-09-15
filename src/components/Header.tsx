import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { useNavigate } from "react-router-dom";

function resume() {
  window.open("/Resume.pdf", "_blank");
}

const hover_color = "hover:text-cerise";
const mobile_text = "block text-black hover:text-cerise";

export const Header = () => {
  const navigate = useNavigate();

  const handleNav = (id: string) => {
    navigate(`/${id}`);
  };
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const closeMenu = () => {
    setIsExpanded(false);
  };

  return (
    <div className="fixed top-0 left-0 h-20 w-full z-50 bg-background/90 flex flex-row items-center justify-between sm:justify-around">
      <button
        onClick={() => {
          const home = document.getElementById("home");
          if (home) {
            home.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", "/");
          }
        }}
        className="ml-6 sm:ml-0 font-inria font-bold text-text-dark text-lg md:text-2xl hover:text-cerise"
      >
        Sylvia Yung
      </button>
      <div className="hidden sm:flex font-inria text-lg md:text-xl text-black gap-16">
        <button onClick={() => handleNav("about")} className={hover_color}>
          About me
        </button>
        <button onClick={() => handleNav("work")} className={hover_color}>
          Work
        </button>
        <button onClick={() => handleNav("projects")} className={hover_color}>
          Projects
        </button>
        <button onClick={() => handleNav("skills")} className={hover_color}>
          Skills
        </button>
      </div>
      <button
        type="button"
        onClick={resume}
        className="font-inria text-base sm:text-lg xl:text-lg text-text-dark font-semibold rounded-full h-8 w-20 sm:w-22 xl:h-10 xl:w-28 bg-cerise/80 shadow-lg ml-25 sm:ml-6 hover:bg-cerise/50"
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
        <div className="flex items-center z-50 fixed w-full text-base top-20 justify-evenly bg-background/90 sm:hidden p-8 font-inria">
          <button
            onClick={() => {
              handleNav("about");
              closeMenu();
            }}
            className={mobile_text}
          >
            About me
          </button>
          <button
            onClick={() => {
              handleNav("work");
              closeMenu();
            }}
            className={mobile_text}
          >
            Work
          </button>
          <button
            onClick={() => {
              handleNav("projects");
              closeMenu();
            }}
            className={mobile_text}
          >
            Projects
          </button>
          <button
            onClick={() => {
              handleNav("skills");
              closeMenu();
            }}
            className={mobile_text}
          >
            Skills
          </button>
        </div>
      )}
    </div>
  );
};
