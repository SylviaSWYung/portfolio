import { motion } from "framer-motion";

const titleForBox = "font-inria text-2xl lg:text-3xl text-headerborder mb-2";
const textInBox =
  "font-inria text-text-dark text-md sm:text-xl lg:text-2xl xl:text-2xl";
const box =
  "flex p-4 sm:p-8 lg:px-15 lg:h-full border-2 border-headerborder rounded-5xl text-center items-center justify-center w-full";

export const SkillsPage = () => {
  return (
    <div className="w-7/8 lg:w-full mx-auto my-4 sm:my-6">
      <div className="flex flex-row items-center justify-center">
        <motion.img
          className="relative hidden xl:block rotate-10 w-1/12 "
          src="bow.png"
          alt=""
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <h1 className="font-inria text-center text-3xl sm:text-5xl lg:text-6xl text-headerborder border-b-1 w-7/8 lg:w-1/3 ">
          Skills
        </h1>
        <motion.img
          className="relative hidden xl:block -rotate-10 w-1/12"
          src="bow.png"
          alt=""
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      {/* Skillboxs */}
      <div className="flex flex-col lg:flex-row lg:justify-evenly md:mt-10 xl:w-7xl xl:mx-auto">
        {/* Code & Syntax */}
        <div className="flex flex-col items-center mt-4">
          <h2 className={titleForBox}>Code & Syntax</h2>
          <div className={`${box} ${textInBox} lg:flex-col`}>
            <p>
              Java <br />
              Python <br />
              JavaScript <br />
            </p>
            <p>
              TypeScript <br />
              CSS <br />
              HTML <br />
            </p>
          </div>
        </div>
        {/* Tech and Frameworks */}
        <div className="flex flex-col items-center mt-4">
          <h2 className={titleForBox}>Tech & Frameworks</h2>
          <div className={`${box} ${textInBox} lg:flex-col`}>
            <p>
              React <br />
              TailwindCSS <br />
              MUI Components <br />
              Vite <br />
            </p>
            <p>
              JavaFX <br />
              Motion Framework <br />
              Maven <br />
              Spring Boot <br />
              SQLite3 <br />
            </p>
          </div>
        </div>
        {/* Development Tools */}
        <div className="flex flex-col items-center mt-4 mb-4 lg:mb-0">
          <h2 className={titleForBox}>Development Tools</h2>
          <div className={`${box} ${textInBox}`}>
            <p>
              Git <br />
              GitHub <br />
              Figma <br />
              VS Code <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
