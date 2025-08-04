import { motion } from "framer-motion";
import { AnimatedText } from "../components/AnimatedText";
import { Star } from "../components/Star";

const buttonStyle =
  "font-inria text-lg sm:text-2xl text-text-dark font-bold rounded-full h-10 w-26 sm:h-12 xl:h-14 sm:w-33 xl:w-38 bg-cerise/80 shadow-lg mx-2 hover:bg-cerise/50";
const MotionStar = motion.create(Star);

export const HomePage = () => {
  return (
    <section id="homepage" className="scroll-mt-20 min-h-screen">
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-evenly sm:items-center sm:gap-x-4 sm:max-w-full sm:min-h-[calc(100vh-10rem)]">
        <div className="relative flex justify-center sm:order-1 md:order-2">
          <img
            className="rounded-full mx-auto my-12 max-w-1/2 sm:max-w-sm"
            src="homepage/Sylvia2.jpg"
            alt="Picture of Sylvia"
          />
        </div>

        {/*Text og button */}
        <div className="flex flex-col ml-8 mr-8 sm:mr-0 sm:ml-0 sm:order-2 md:order-1 sm:w-full sm:max-w-[400px] xl:max-w-[600px]">
          <p className="flex justify-center lg:justify-normal font-inria text-black text-4xl xl:text-5xl sm:mb-5">
            Hi, My name is
          </p>
          <p className="flex justify-center font-inria text-cerise text-4xl sm:text-6xl mt-4 mb-6 xl:text-7xl">
            Sylvia Yung
          </p>
          <div className="font-inria flex justify-center sm:h-20 sm:mt-5">
            {
              <AnimatedText
                textArray={[
                  "Web Developer",
                  "Cell & Molecular biologist",
                  "Full-Stack Developer",
                  "Software Developer",
                  "Backend Developer",
                ]}
                typingSpeed={150}
                pauseBetweenTexts={2000}
              />
            }
          </div>

          {/*Buttons*/}
          <div className="flex justify-center mt-10 sm:mt-6">
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
        {/*I mobil versjon - under buttons. */}
        <MotionStar
          className="sm:hidden left-10 rotate-12 w-1/3 mt-10"
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/*Hidden i mobil versjon, men venstre side av bildet */}
        <MotionStar
          className="hidden sm:absolute sm:hidden lg:block lg:w-1/12 lg:h-1/12 lg:top-1/3"
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/*Hidden i mobil versjon, men nedre venstre side av teksten */}
        <MotionStar
          className="hidden sm:absolute sm:w-1/5 sm:right-3/8 sm:hidden lg:block lg:right-3/4 sm:top-7/12 sm:-rotate-20"
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};
