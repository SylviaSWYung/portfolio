export const AboutMePage = () => {
  return (
    <section id="about" className="pt-10 lg:pt-20 xl:pt-25">
      <h2 className="font-semibold text-black italic text-3xl sm:text-4xl mb-5">
        About me.
      </h2>
      <div className="flex flex-col sm:flex-row sm:gap-10">
        <p className="z-10 text-end justify-center items-center flex text-sm md:text-base xl:text-xl">
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
        <img
          src="aboutme/aboutme.png"
          alt=""
          className="self-center h-3/4 w-3/4 sm:h-1/3 sm:w-1/3 xl:h-2/5 xl:w-2/5"
        />
      </div>
    </section>
  );
};
