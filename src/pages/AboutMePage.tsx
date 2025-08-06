import { motion } from "motion/react";

// A page about me

export const AboutMePage = () => {
  return (
    <section id="about" className="min-h-screen py-22">
      <div className="flex flex-col lg:flex-row items-center mx-auto lg:gap-x-10 xl:gap-x-30 justify-center w-6/7 sm:w-full">
        <div className="flex flex-col">
          <p className="font-inria font-bold text-cerise text-4xl mb-5">
            About me
          </p>
          {/* picture desktop version */}
          <motion.img
            src="aboutme/aboutmedesktop.png"
            alt=""
            animate={{
              rotate: [0, -1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative hidden lg:block w-[300px] xl:w-[400px]"
          />
        </div>
        {/* picture mobile version */}
        <img
          src="aboutme/aboutmemobile.png"
          alt=""
          className="h-7/8 w-7/8 md:h-3/5 md:w-3/5 mr-2 lg:hidden"
        />
        <p className="z-10 font-inria text-center text-sm md:text-2xl xl:text-lg lg:w-2/6 w-4/5">
          With a background in Cell & Molecular Biology from NTNU, I took a bold
          step toward my true passion—technology. Instead of pursuing a master's
          in biology, I switched to Computer Science and never looked back!
          <br />
          <br />
          Through various projects and a leadership role, I've embraced both my
          creativity and problem-solving skills. I thrive in tech that blends
          innovation with aesthetics and enjoy building solutions that are both
          functional and visually appealing. <br />
          <br />
          In just two years, I've learned so much and can't wait to grow even
          more. I'm highly motivated, social, and always eager to tackle new
          challenges!
        </p>
      </div>
      {/* picture mobile version */}
      <img
        src="aboutme/aboutmemobile2.png"
        alt=""
        className="h-2/3 w-2/3 md:h-1/2 md:w-1/2 lg:hidden block mx-auto"
      />
    </section>
  );
};
