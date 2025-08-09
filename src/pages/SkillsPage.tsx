const titleForBox = "font-inria text-2xl lg:text-3xl text-cerise mb-2";
const textInBox =
  "font-inria text-text-dark text-md sm:text-xl lg:text-2xl xl:text-2xl";
const box =
  "flex p-4 sm:p-8 lg:px-15 lg:h-full border-2 border-cerise rounded-5xl text-center items-center justify-around lg:justify-center w-full";

export const SkillsPage = () => {
  return (
    <section id="skills" className="min-h-screen py-20">
      <div className="w-7/8 lg:w-full mx-auto my-4 sm:my-6">
        <h1 className="font-inria text-4xl text-cerise font-bold mb-10 text-center">
          Skills
        </h1>
        {/* Skillboxs */}
        <div className="flex flex-col lg:flex-row lg:justify-evenly md:mt-10 xl:w-7xl xl:mx-auto">
          {/* Code & Syntax */}
          <div className="flex flex-col items-center mt-4">
            <h2 className={titleForBox}>Code & Syntax</h2>
            <div className={`${box} ${textInBox} lg:flex-col`}>
              <p>
                Kotlin <br />
                Java <br />
                Python <br />
                JavaScript <br />
              </p>
              <p>
                TypeScript <br />
                CSS <br />
                HTML <br />
              </p>
            </div>
          </div>
          {/* Tech and Frameworks */}
          <div className="flex flex-col items-center mt-4">
            <h2 className={titleForBox}>Tech & Frameworks</h2>
            <div className={`${box} ${textInBox} lg:flex-col`}>
              <p>
                React <br />
                TailwindCSS <br />
                MUI Components <br />
                Motion Framework <br />
                Vite <br />
              </p>
              <p>
                JavaFX <br />
                Spring Boot <br />
                SQLite3 <br />
                Kafka <br />
                Firebase <br />
              </p>
            </div>
          </div>
          {/* Development Tools */}
          <div className="flex flex-col items-center mt-4 mb-4 lg:mb-0">
            <h2 className={titleForBox}>Development Tools</h2>
            <div className={`${box} ${textInBox} lg:flex-col`}>
              <p>
                Git <br />
                GitHub <br />
                VS Code <br />
                IntelliJ <br />
                Jenkins <br />
              </p>
              <p>
                Figma <br />
                Splunk <br />
                Maven <br />
                Podman <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
