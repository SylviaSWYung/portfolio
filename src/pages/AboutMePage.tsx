// A page about me
export const AboutMePage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center w-7/8 mx-auto lg:gap-x-10 xl:gap-x-30 justify-center">
      {/* picture mobile version */}
      <img
        src="aboutme/aboutmemobile.png"
        alt=""
        className="h-7/8 w-7/8 md:h-3/5 md:w-3/5 mr-2 lg:hidden"
      />
      {/* picture desktop version */}
      <img
        src="aboutme/aboutmedesktop.png"
        alt=""
        className="relative hidden lg:block lg:h-1/2 lg:w-1/2 xl:h-1/3 xl:w-1/3"
      />
      {/* about me text */}
      <p className="font-inria text-center text-md md:text-2xl xl:text-2xl lg:w-4/5">
        With a background in Cell & Molecular Biology from NTNU, I took a bold
        step toward my true passion—technology. Instead of pursuing a master's
        in biology, I switched to Computer Science and never looked back! <br />
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
      {/* picture mobile version */}
      <img
        src="aboutme/aboutmemobile2.png"
        alt=""
        className="h-2/3 w-2/3 md:h-1/2 md:w-1/2 lg:hidden"
      />
    </div>
  );
};
