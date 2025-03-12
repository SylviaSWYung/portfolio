import { motion } from "framer-motion";
import { useState } from "react";

const inText =
  "text-base sm:text-2xl xl:text-3xl text-text-dark border-b-1 border-dashed";
const titleProject =
  "border-t-1 border-headerborder flex items-center h-16 justify-between w-full";

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
      link: "--",
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
    <div className="flex flex-col min-h-screen items-center">
      <h1 className="font-inria text-headerborder text-3xl sm:text-4xl mt-10 mb-5">
        Projects
      </h1>
      {/*Boks for bilde */}
      <div className="border-4 text-headerborder bg-button/50 rounded-3xl m-4 p-2 h-40 w-80 flex items-center justify-center overflow:hidden">
        {projectPicture ? (
          <img
            src={projectPicture}
            alt="Project"
            className="w-full h-full object-contain rounded-xl"
          />
        ) : (
          <p></p>
        )}
      </div>
      <div className="flex-col w-4/5 overflow-hidden font-inria text-text-dark text-xl sm:text-3xl border-b-1 border-headerborder">
        <motion.img
          className="size-1/12"
          src="chicken.gif"
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
            <button className="flex justify-end h-1/2">
              <img
                src="github.svg"
                alt="github"
                onClick={() => window.open(project.link, "_blank")}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
