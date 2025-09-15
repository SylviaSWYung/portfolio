import { motion } from "framer-motion";
import { useState } from "react";

const inText =
  "text-base sm:text-lg xl:text-xl text-black border-b-2 border-cerise border-dashed";
const titleProject =
  "border-t-1 border-cerise text-black flex items-center h-15 sm:h-20 justify-between w-full cursor-pointer hover:text-cerise ";

export const ProjectPage = () => {
  const [projectPicture, setProjectPicture] = useState<string | null>(null);

  const projects = [
    {
      name: "My Website",
      image: "project/portfolio.png",
      link: "https://github.com/SylviaSWYung/portfolio",
      skills: "Portfolio",
    },
    {
      name: "NotaFlow",
      image: "project/notaflow.png",
      link: "https://github.com/SylviaSWYung/NotaFlow",
      skills: "React + TS",
    },
    {
      name: "Ravioli",
      image: "project/Infoskjermen.png",
      link: "https://github.com/appKom/ravioli",
      skills: "React + TS",
    },
    {
      name: "Movie Library",
      image: "project/MovieLibrary.png",
      link: "https://github.com/SylviaSWYung/Movie_library",
      skills: "Java",
    },
  ];

  return (
    <section id="projects" className="pt-10 lg:pt-20">
      <div className="flex flex-col xl:justify-around lg:w-full w-6/7 mx-auto xl:flex-row h-full items-center lg:px-20 lg:gap-x-14 lg:h-full">
        {/* Title for mobile */}
        <h1 className="xl:hidden font-inria font-bold text-cerise text-2xl sm:text-4xl mt-10 mb-5">
          Projects
        </h1>
        {/*Boks for bilde */}
        <div className="flex lg:flex-col items-end justify-center overflow:hidden xl:order-2">
          <img
            src="div/totoro.gif"
            alt=""
            className="hidden lg:block w-24 h-24 ml-4"
          />
          <div className="flex items-center justify-center border-4 text-royalblue border-cerise bg-cerise/10 rounded-3xl mb-5 xl:mb-4 p-2 w-5/6 lg:w-full lg:max-w-[500px] h-50 lg:h-80 overflow-hidden aspect-video">
            {projectPicture ? (
              <img
                src={projectPicture}
                alt="Project"
                className="w-full h-full object-contain rounded-xl"
              />
            ) : (
              <div>
                <p className="hidden xl:block text-2xl text-center">
                  Explore projects by hovering over them!
                </p>
                <p className="xl:hidden font-inria text-center text-lg">
                  Click on a project to view more details!
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex-col w-full xl:w-2/5 overflow-hidden font-inria text-base sm:text-2xl border-b-1 border-cerise xl:order-1">
          {/* Title for pc version */}
          <h1 className="hidden xl:block font-inria text-cerise lg:text-4xl font-bold mb-10">
            Projects
          </h1>
          <motion.img
            className="size-1/12"
            src="div/chicken.gif"
            alt=""
            animate={{
              x: [0, 350, 350, 0],
              scaleX: [1, 1, -1, -1],
            }}
            transition={{
              duration: 50,
              times: [0, 0.55, 0.55, 1],
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {projects.map((project, index) => (
            <div
              key={index}
              className={titleProject}
              onMouseEnter={() => setProjectPicture(project.image)}
              onMouseLeave={() => setProjectPicture(null)}
            >
              <span className="flex-1">{project.name}</span>
              <span className={`mr-9 ${inText}`}>{project.skills}</span>
              <button
                className="flex justify-end h-8 w-8 sm:h-10 sm:w-10"
                onClick={() => window.open(project.link, "_blank")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-full h-full fill-curent cursor-pointer fill-royalblue hover:fill-cerise"
                >
                  <path
                    d="M12.2047 0.00001C6.56031 -0.005731 1.74628 4.08615 0.842541 9.6577C-0.061195 15.2293 3.2126 
                          20.6331 8.56941 22.4118C9.14823 22.5177 9.35294 22.1577 9.35294 21.8541C9.35294 21.5506 9.35294 
                          20.8588 9.35294 19.8988C6.14117 20.5977 5.46353 18.3529 5.46353 18.3529C5.25046 17.6572 4.79779 
                          17.0595 4.18588 16.6659C3.14823 15.96 4.27059 15.96 4.27059 15.96C5.00761 16.0641 5.65578 16.5014 
                          6.02823 17.1459C6.34368 17.7179 6.87393 18.1406 7.50179 18.3208C8.12965 18.5009 8.8034 18.4236 
                          9.37411 18.1059C9.41842 17.5252 9.66876 16.9794 10.08 16.5671C7.5247 16.2777 4.84235 15.2894 
                          4.84235 10.92C4.82481 9.7786 5.24688 8.67412 6.02117 7.8353C5.67632 6.84285 5.71662 5.7571 6.13412 
                          4.79295C6.13412 4.79295 7.10117 4.48236 9.29647 5.97177C11.1816 5.45419 13.1713 5.45419 15.0565 
                          5.97177C17.2518 4.48236 18.2118 4.79295 18.2118 4.79295C18.6351 5.74689 18.6854 6.82486 18.3529 
                          7.81412C19.1272 8.65294 19.5493 9.7574 19.5318 10.8988C19.5318 15.3177 16.8424 16.2847 14.28 
                          16.5459C14.8359 17.1047 15.1218 17.8774 15.0635 18.6635C15.0635 20.2024 15.0635 21.4447 15.0635 
                          21.8188C15.0635 22.1929 15.2682 22.4824 15.8541 22.3694C21.1473 20.5447 24.3569 15.1728 23.4554 
                          9.6469C22.5539 4.1211 17.8034 0.04779 12.2047 0.00001z"
                  ></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
