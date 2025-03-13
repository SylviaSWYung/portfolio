import { motion } from "framer-motion";
import { AnimatedText } from "../components/AnimatedText";

const buttonStyle =
  "font-inria text-lg sm:text-2xl text-text-dark border-1 rounded-full h-8 w-22 sm:h-12 xl:h-14 sm:w-33 xl:w-38 bg-button/50 shadow-lg mx-2 hover:bg-hover/50";

export const HomePage = () => {
  return (
    //Mulig fjerne flex-wrap?
    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-evenly sm:items-center sm:gap-x-4 sm:max-w-full sm:h-[calc(100vh-4.5rem)]">
      <div className="relative flex justify-center sm:order-2">
        {/*På høyre side av bildet*/}
        <motion.img
          className="absolute sm:hidden xl:block left-9/12 top-3/4 sm:left-11/12 -rotate-10 sm:rotate-10 max-w-16 sm:max-w-1/4 sm:top-3/4"
          src="bow.png"
          alt=""
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <img
          className="rounded-full mx-auto my-12 w-full max-w-[200px] sm:max-w-[350px] lg:max-w-[400px]"
          src="/Sylvia.jpg"
          alt="Picture of Sylvia"
        />
      </div>

      {/*Text og button */}
      <div className="flex flex-col ml-8 mr-8 sm:mr-0 sm:ml-0 sm:order-1 sm:w-full sm:max-w-[400px] xl:max-w-[800px]">
        <p className="font-inria text-text-light text-4xl xl:text-5xl sm:mb-5">
          Hi, My name is
        </p>
        <p className="flex justify-center sm:justify-center font-inria text-headerborder text-4xl sm:text-6xl mt-4 mb-6 xl:text-7xl">
          {" "}
          Sylvia Yung
        </p>
        <div className="font-inria h-14 sm:h-20 sm:mt-5">
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
        <div className="flex justify-center mt-4 sm:mt-6">
          <button
            type="button"
            className={buttonStyle}
            onClick={() =>
              window.open("https://www.linkedin.com/in/sylvia-yung", "_blank")
            }
          >
            LinkedIn
          </button>
          <button
            type="button"
            className={buttonStyle}
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
        className="relative left-10 mt-5 rotate-12 w-1/3 sm:w-1/15 sm:absolute lg:block sm:left-1/12 sm:top-1/9 sm:rotate-25 "
        src="bow.png"
        alt=""
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/*Hidden i mobil versjon, men venstre side av bildet */}
      <motion.img
        className="hidden sm:absolute sm:hidden lg:block sm:right-1/3 sm:top-1/6 sm:-rotate-10 sm:scale-40"
        src="bow.png"
        alt=""
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/*Hidden i mobil versjon, men nedre venstre side av teksten */}
      <motion.img
        className="hidden sm:absolute sm:w-1/4 sm:block sm:right-3/8 lg:block lg:right-3/4 sm:top-7/12 sm:-rotate-30 sm:scale-40"
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
  );
};
