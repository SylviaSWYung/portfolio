import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { skillCategories } from "@/lib/skills";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export const SkillsPage = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [openTooltip, setOpenToolTip] = useState<string | null>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const handleClick = (label: string) => {
    setOpenToolTip((prev) => (prev === label ? null : label));
  };

  if (isMobile === null) return null;

  return (
    <section id="skills" className="pt-10 py-10 xl:py-20 text-center">
      <h1 className="font-inria text-2xl sm:text-4xl text-cerise font-bold mb-5 sm:mb-10">
        Skills
      </h1>
      <div className="font-inria text-sm sm:text-lg m-5">
        ✨ Not sure what that little icon means? Just hover or tap to reveal the
        secret!
      </div>
      <div className="flex gap-5 xl:gap-16 justify-center flex-wrap lg:w-full mx-auto">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="border-2 border-cerise rounded-2xl p-4 w-58"
          >
            <h2 className="font-inria text-base lg:text-base font-semibold text-cerise mb-8">
              {category.title}
            </h2>
            <div className="grid grid-cols-2 gap-4 place-items-center">
              {category.skills.map((skill) => (
                <Tooltip
                  key={skill.label}
                  {...(isMobile
                    ? {
                        open: openTooltip === skill.label,
                        disableHoverListener: true,
                        disableFocusListener: true,
                        disableTouchListener: true,
                      }
                    : {})}
                >
                  {" "}
                  <TooltipTrigger
                    asChild
                    onClick={() => isMobile && handleClick(skill.label)}
                  >
                    <motion.img
                      src={skill.src}
                      alt={skill.label}
                      whileHover={!isMobile ? { scale: 1.15 } : {}}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-15 h-15 rounded-full border-2 border-cerise bg-white object-contain cursor-pointer"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{skill.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
