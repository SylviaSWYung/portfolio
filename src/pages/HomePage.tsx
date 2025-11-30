import { Skeleton } from "@/components/ui/skeleton";
import { buttonStyle } from "@/lib/classnames";
import { useState } from "react";

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section id="home" className="pt-20 md:pt-5 md:pb-10">
      <div className="flex flex-col items-center">
        {isLoading && (
          <Skeleton className="mx-auto lg:max-w-[900px] w-full aspect-2158/1506 bg-gray-200" />
        )}

        <img
          className={`mx-auto lg:max-w-[900px] object-contain w-full ${isLoading ? "hidden" : ""}`}
          src="homepage/homepage.png"
          alt="homepage picture"
          onLoad={() => setIsLoading(false)}
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
