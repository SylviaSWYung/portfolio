import { works } from "@/lib/work";

export const WorkPage = () => {
  return (
    <section id="work">
      <div className="flex flex-col">
        <h2 className="font-semibold text-black italic text-3xl sm:text-5xl mb-5 self-end">
          Experience.
        </h2>
        <div className="flex justify-center">
          <div className="flex flex-col xl:flex-row justify-evenly gap-y-5">
            {works.map((work, index) => (
              <div
                key={index}
                className={`flex-col justify-items-center ${
                  index !== works.length - 1 ? "border-b-2 border-rose" : ""
                }`}
              >
                <div className="flex">
                  <img
                    src={work.image}
                    alt=""
                    className="w-32 h-32 object-contain"
                  />
                  <span className="flex text-base sm:text-xl font-bold italic items-center text-center">
                    {work.position}
                  </span>
                </div>
                <span className="flex text-sm sm:text-base text-justify my-4">
                  {work.about}
                </span>
                <span className="flex font-bold italic text-center text-sm sm:text-base mb-5">
                  {work.skills}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
