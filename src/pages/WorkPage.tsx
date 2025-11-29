import { works } from "@/lib/work";

export const WorkPage = () => {
  return (
    <section id="work">
      <div className="flex flex-col">
        <h2 className="font-semibold text-black italic text-3xl sm:text-5xl mb-5 self-end">
          Experience.
        </h2>

        <div className="flex justify-center">
          <div className="flex flex-col justify-evenly gap-y-5">
            {works.map((work, index) => (
              <div
                key={index}
                className={`${
                  index !== works.length - 1 ? "border-b-2 border-rose" : ""
                } pb-5`}
              >
                <div className="flex flex-col sm:flex-row sm:gap-x-6">
                  <img
                    src={work.image}
                    alt=""
                    className="w-32 h-32 object-contain mx-auto sm:mx-0 self-center"
                  />
                  <div className="flex flex-col text-center sm:text-left mt-2 sm:mt-0">
                    <span className="font-bold italic text-center sm:text-end sm:text-xl">
                      {work.position}
                    </span>
                    <span className="text-sm text-justify my-4 md:text-base">
                      {work.about}
                    </span>
                    <span className="font-bold italic text-sm text-center">
                      {work.skills}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
