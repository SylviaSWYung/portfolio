import { motion } from "framer-motion";

const buttonInText =
  "text-lg sm:text-2xl xl:text-3xl text-text-dark border-1 rounded-full h-10 w-26 sm:h-12 xl:h-16 sm:w-33 xl:w-44 bg-button";
const titleProject =
  "border-t-1 border-headerborder flex items-center justify-between h-18";

export const ProjectPage = () => {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <h1 className="font-inria text-headerborder text-4xl mt-10 mb-5">
        University Projects
      </h1>
      {/*Boks for bilde */}
      <div className="border-4 text-headerborder bg-button/50 rounded-4xl p-4 m-4 h-60 w-60">
        <p>Bilde her</p>
      </div>
      <div className="flex-col w-sm overflow-hidden font-inria text-text-dark text-3xl">
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
        <div className="border-t-1 border-headerborder flex items-center justify-between h-18">
          My Website
          <button
            type="button"
            className={buttonInText}
            onClick={() => window.open("__", "_blank")}
          >
            Portfolio
          </button>
        </div>
        <div className={titleProject}>
          NotaFlow
          <button
            type="button"
            className={buttonInText}
            onClick={() => window.open("__", "_blank")}
          >
            React + TS
          </button>
        </div>
        <div className={titleProject}>
          Ravioli
          <button
            type="button"
            className={buttonInText}
            onClick={() => window.open("__", "_blank")}
          >
            React + TS
          </button>
        </div>
        <div className={`${titleProject} border-b-1`}>
          Movie Library
          <button
            type="button"
            className={buttonInText}
            onClick={() => window.open("__", "_blank")}
          >
            Java
          </button>
        </div>
      </div>
    </div>
  );
};
