import { motion } from "framer-motion";
import { AnimatedText } from "../components/AnimatedText";

export const DashboardPage = () => {
  return (
    //Mulig fjerne flex-wrap?
    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center sm:items-center sm:gap-x-4 sm:max-w-full overflow-hidden">
      <div className="relative flex justify-center sm:order-2">
        <motion.img
          className="absolute sm:hidden left-2/5 sm:left-8/12 -rotate-10 scale-20"
          src="bow.png"
          alt=""
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <img
          className="h-1/2 w-1/2 rounded-3xl mt-16 mb-12 sm:mt-0 sm:w-full sm:max-w-[500px]"
          src="/Sylvia.jpg"
          alt="Picture of Sylvia"
        />
      </div>

      <div className="flex flex-col ml-8 mr-8 sm:order-1 sm:w-1/3 sm:max-w-[600px]">
        <p className="font-inria text-text-light text-4xl"> Hi, My name is</p>
        <p className="flex justify-end sm:justify-center font-inria text-headerborder text-6xl mt-4 mb-6">
          {" "}
          Sylvia Yung
        </p>
        <div className="font-inria h-20">
          {
            <AnimatedText
              textArray={[
                "Web Developer",
                "Cell & Molecular biologist",
                "Developer",
                "Computer Scientist",
              ]}
              typingSpeed={150}
              pauseBetweenTexts={2000}
            />
          }
        </div>
      </div>

      {/*Buttons*/}
      <div className="flex justify-center mt-8 sm:order-3">
        <button
          type="button"
          className="font-inria text-lg text-text-dark border-1 rounded-2xl h-8 w-22 bg-button/50 shadow-lg mr-2 hover:bg-hover/50"
          onClick={() =>
            window.open("https://www.linkedin.com/in/sylvia-yung", "_blank")
          }
        >
          LinkedIn
        </button>
        <button
          type="button"
          className="font-inria text-lg text-text-dark border-1 rounded-2xl h-8 w-22 bg-button/50 shadow-lg ml-2 hover:bg-hover/50"
          onClick={() =>
            window.open("https://github.com/SylviaSWYung", "_blank")
          }
        >
          GitHub
        </button>
      </div>
      <motion.img
        className="relative sm:hidden left-10 mt-5 rotate-12 size-1/3"
        src="bow.png"
        alt=""
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
