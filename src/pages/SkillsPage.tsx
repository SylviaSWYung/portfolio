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
    <section id="skills" className="mt-10">
      <h2 className="font-semibold text-black italic text-3xl sm:text-5xl mb-5">
        Skills.
      </h2>
      <p className="text-base sm:text-lg m-5 text-center">
        Not sure what that little icon means? Just hover or tap to reveal the
        secret!
      </p>
      <div className="flex gap-5 justify-center flex-col items-end mb-10">
        {skillCategories.map((category) => (
          <div key={category.title} className="">
            <h2 className="text-xl lg:text-2xl font-bold text-rose mb-3 text-end">
              {category.title}
            </h2>
            <div className="flex flex-wrap justify-end gap-2">
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
                      className="w-15 h-15 rounded-full border-2 border-rose bg-white object-contain cursor-pointer"
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
