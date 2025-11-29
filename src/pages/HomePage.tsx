import { buttonStyle } from "@/lib/classnames";

export const HomePage = () => {
  return (
    <section id="home" className="pt-20 lg:pt-5">
      <div className="flex flex-col items-center">
        <img
          className="mx-auto lg:max-w-[900px] object-contain w-full"
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
