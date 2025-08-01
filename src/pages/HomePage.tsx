import { motion } from "framer-motion";
import { AnimatedText } from "../components/AnimatedText";

const buttonStyle =
  "font-inria text-lg sm:text-2xl text-text-dark font-bold rounded-full h-8 w-22 sm:h-12 xl:h-14 sm:w-33 xl:w-38 bg-cerise/80 shadow-lg mx-2 hover:bg-cerise/50";

export const HomePage = () => {
  return (
    <section id="homepage" className="scroll-mt-20 min-h-screen">
      <div className="flex flex-col md:flex-row md:flex-wrap sm:justify-evenly sm:items-center sm:gap-x-4 sm:max-w-full sm:min-h-[calc(100vh-10rem)]">
        <div className="relative flex justify-center md:order-2">
          <img
            className="rounded-full mx-auto my-12 max-w-sm"
            src="/Sylvia2.jpg"
            alt="Picture of Sylvia"
          />
        </div>

        {/*Text og button */}
        <div className="flex flex-col ml-8 mr-8 sm:mr-0 sm:ml-0 sm:order-1 sm:w-full sm:max-w-[400px] xl:max-w-[600px]">
          <p className="font-inria text-black text-4xl xl:text-5xl sm:mb-5">
            Hi, My name is
          </p>
          <p className="flex justify-center sm:justify-center font-inria text-cerise text-4xl sm:text-6xl mt-4 mb-6 xl:text-7xl">
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
        {/*I mobil versjon - under buttons. */}
        <motion.img
          className="sm:hidden left-10 mt-5 rotate-12 w-1/3"
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
        {/* <motion.img
          className="hidden sm:absolute sm:hidden lg:block sm:right-1/3 sm:bottom-1/2 sm:max-w-1/4 sm:rotate-10 sm:scale-40"
          src="bow.png"
          alt=""
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        /> */}
        {/*Hidden i mobil versjon, men nedre venstre side av teksten */}
        {/* <motion.img
          className="hidden sm:absolute sm:w-1/4 sm:right-3/8 sm:hidden lg:block lg:right-3/4 sm:top-7/12 sm:-rotate-30 sm:scale-40"
          src="bow.png"
          alt=""
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        /> */}
      </div>
    </section>
  );
};
