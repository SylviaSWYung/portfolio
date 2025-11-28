const buttonStyle =
  "text-lg md:text-2xl text-white hover:text-text-dark rounded-full h-10 w-26 md:h-12 xl:h-14 md:w-33 xl:w-38 bg-rose shadow-lg hover:bg-rose/90 cursor-pointer";

export const HomePage = () => {
  return (
    <section id="home" className="pt-20 lg:pt-5">
      <div className="flex flex-col items-center">
        <img
          className="mx-auto max-w-full lg:max-w-[900px] object-contain"
          src="homepage/homepage.png"
          alt="homepage picture"
        />

        <div className="flex items-center justify-center">
          {/*Buttons*/}
          <div className="flex flex-wrap justify-center mt-10 sm:mt-6 gap-6 lg:gap-15">
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
            <button
              type="button"
              className={buttonStyle}
              onClick={() => window.open("/Resume.pdf", "_blank")}
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
