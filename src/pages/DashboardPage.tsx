import { AnimatedText } from "../components/AnimatedText";

export const DashboardPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <img
          className="h-1/2 w-1/2 rounded-3xl mt-16 mb-12"
          src="/Sylvia.jpg"
          alt="Picture of Sylvia"
        />
      </div>
      <div className="flex flex-col ml-8 mr-8">
        <p className="flex font-inria text-text-light text-4xl">
          {" "}
          Hi, My name is
        </p>
        <p className="flex justify-end font-inria text-headerborder text-6xl mt-4 mb-6">
          {" "}
          Sylvia Yung
        </p>
        <div className="flex font-inria h-20">
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
      </div>
      <div className="flex justify-center mt-8">
        <button
          type="button"
          className="font-inria text-lg text-text-dark border-1 rounded-2xl h-8 w-22 bg-button/50 shadow-lg mr-2 hover:bg-hover/50"
          onClick={() =>
            window.open("https://www.linkedin.com/in/sylvia-yung", "_blank")
          }
        >
          LinkedId
        </button>
        <button
          type="button"
          className="font-inria text-lg text-text-dark border-1 rounded-2xl h-8 w-22 bg-button/50 shadow-lg ml-2 hover:bg-hover/50"
          onClick={() =>
            window.open("https://github.com/SylviaSWYung", "_blank")
          }
        >
          GitHub
        </button>
      </div>
    </div>
  );
};
