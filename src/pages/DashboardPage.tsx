import { motion } from "framer-motion";
import { AnimatedText } from "../components/AnimatedText";

export const DashboardPage = () => {
  return (
    //Mulig fjerne flex-wrap?
    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-evenly sm:items-center sm:gap-x-4 sm:max-w-full sm:overflow-hidden sm:min-h-screen">
      <div className="relative flex justify-center sm:order-2">
        {/*På høyre side av bildet*/}
        <motion.img
          className="absolute left-2/5 sm:left-9/12 -rotate-10 sm:rotate-10 scale-20 sm:scale-30 sm:bottom-2/3"
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
          className="h-1/2 w-1/2 rounded-3xl mt-16 mb-12 sm:mt-0 sm:w-full sm:max-w-[450px]"
          src="/Sylvia.jpg"
          alt="Picture of Sylvia"
        />
      </div>

      {/*Text og button */}
      <div className="flex flex-col ml-8 mr-8 sm:mr-0 sm:ml-0 sm:order-1 sm:w-full sm:max-w-[800px]">
        <p className="font-inria text-text-light text-4xl sm:text-7xl sm:mb-5">
          Hi, My name is
        </p>
        <p className="flex justify-end sm:justify-center font-inria text-headerborder text-6xl mt-4 mb-6 sm:text-8xl">
          {" "}
          Sylvia Yung
        </p>
        <div className="font-inria h-20 sm:mt-5">
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

        {/*Buttons*/}
        <div className="flex justify-center mt-8">
          <button
            type="button"
            className="font-inria text-lg sm:text-3xl text-text-dark border-1 rounded-full h-8 w-22 sm:h-16 sm:w-44 bg-button/50 shadow-lg mr-2 hover:bg-hover/50"
            onClick={() =>
              window.open("https://www.linkedin.com/in/sylvia-yung", "_blank")
            }
          >
            LinkedIn
          </button>
          <button
            type="button"
            className="font-inria text-lg sm:text-3xl text-text-dark border-1 rounded-full h-8 w-22  sm:h-16 sm:w-44 bg-button/50 shadow-lg ml-2 hover:bg-hover/50"
            onClick={() =>
              window.open("https://github.com/SylviaSWYung", "_blank")
            }
          >
            GitHub
          </button>
        </div>
      </div>
      {/*I mobil versjon - under buttons. I computer version - over Hi, my name */}
      <motion.img
        className="relative sm:absolute sm:left-1/20 sm:size-50 sm:bottom-2/3 sm:rotate-25 left-10 mt-5 rotate-12 size-1/3"
        src="bow.png"
        alt=""
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/*Hidden i mobil versjon, men venstre side av bildet */}
      <motion.img
        className="hidden sm:absolute sm:block sm:right-1/3 sm:top-1/6 sm:-rotate-30 sm:scale-40"
        src="bow.png"
        alt=""
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/*Hidden i mobil versjon, men nedre venstre side av teksten */}
      <motion.img
        className="hidden sm:absolute sm:block sm:right-3/4 sm:top-3/5 sm:-rotate-30 sm:scale-40"
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
