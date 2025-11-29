import { buttonStyle } from "@/lib/classnames";
import { projects } from "@/lib/project";
import { useState } from "react";

export const ProjectPage = () => {
  const [showMore, setShowMore] = useState(false);
  const PREVIEW_COUNT = 3;
  const visibleProjects = showMore
    ? projects
    : projects.slice(0, PREVIEW_COUNT);

  return (
    <section id="projects" className="mt-10">
      <div className="flex flex-col">
        <h1 className="font-semibold text-black italic text-3xl sm:text-5xl mb-5">
          Projects.
        </h1>

        <div className="flex justify-center">
          <div className="flex flex-col justify-evenly gap-y-5 md:gap-y-10">
            {visibleProjects.map((project, index) => (
              <div key={index}>
                <div className="flex flex-col md:flex-row justify-between sm:gap-4 lg:gap-8">
                  <img
                    src={project.image}
                    alt=""
                    className="w-full md:w-1/2 md:h-1/2 border-2 border-gray-300 rounded-sm self-center"
                  />
                  <div className="flex flex-col text-center my-2 md:w-xl">
                    <span className="font-bold text-rose text-center text-2xl">
                      {project.name}
                    </span>
                    <div className="flex gap-2 justify-between items-center my-2">
                      <span className="text-sm italic font-semibold text-start md:text-base">
                        {project.skills}
                      </span>
                      <button
                        onClick={() => window.open(project.link, "_blank")}
                        className="h-8 w-8"
                      >
                        <img src="../public/div/github.svg" alt="github" />
                      </button>
                    </div>
                    <span className="text-base text-end my-2 md:text-base">
                      {project.description}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {projects.length > PREVIEW_COUNT && (
              <button
                onClick={() => setShowMore(!showMore)}
                className={buttonStyle + ` self-center`}
              >
                {showMore ? "View Less" : "View More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
