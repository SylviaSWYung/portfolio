// const titleForBox = "font-inria text-2xl lg:text-3xl text-cerise mb-2";
// const textInBox =
//   "font-inria text-text-dark text-md sm:text-xl lg:text-2xl xl:text-2xl";
// const box =
//   "flex p-4 sm:p-8 lg:px-15 lg:h-full border-2 border-cerise rounded-5xl text-center items-center justify-around lg:justify-center w-full";

import { Tooltip } from "@mui/material";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

type Skill = {
  src: string;
  label: string;
};

type Category = {
  title: string;
  skills: Skill[];
};

const skillCategories: Category[] = [
  {
    title: "Tools & Platforms",
    skills: [
      { src: "/skills/toolsPlatforms/git.png", label: "Git" },
      { src: "/skills/toolsPlatforms/github.png", label: "GitHub" },
      { src: "/skills/toolsPlatforms/vscode.png", label: "Vscode" },
      { src: "/skills/toolsPlatforms/intellij.png", label: "Intellij" },
      { src: "/skills/toolsPlatforms/jenkins.png", label: "Jenkins" },
      { src: "/skills/toolsPlatforms/maven.png", label: "Maven" },
      { src: "/skills/toolsPlatforms/splunk.png", label: "Splunk" },
      { src: "/skills/toolsPlatforms/figma.png", label: "Figma" },
    ],
  },
  {
    title: "Framework & Libraries",
    skills: [
      { src: "/skills/framework/mui.png", label: "Mui" },
      { src: "/skills/framework/motion.png", label: "Motion" },
      { src: "/skills/framework/kafka.png", label: "Kafka" },
      { src: "/skills/framework/springboot.png", label: "Springboot" },
      { src: "/skills/framework/firebase.png", label: "Firebase" },
      { src: "/skills/framework/sqlite.png", label: "Sqlite" },
      { src: "/skills/framework/tailwind.png", label: "Tailwind" },
      { src: "/skills/framework/vite.png", label: "Vite" },
      { src: "/skills/framework/react.png", label: "React" },
    ],
  },
  {
    title: "Language",
    skills: [
      { src: "/skills/language/javascript.png", label: "Javascript" },
      { src: "/skills/language/kotlin.png", label: "Kotlin" },
      { src: "/skills/language/python.png", label: "Python" },
      { src: "/skills/language/java.png", label: "Java" },
      { src: "/skills/language/html.png", label: "HTML" },
      { src: "/skills/language/css.png", label: "CSS" },
      { src: "/skills/language/typescript.png", label: "Typescript" },
    ],
  },
];

export const SkillsPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openTooltip, setOpenToolTip] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = (label: string) => {
    setOpenToolTip((prev) => (prev === label ? null : label));
  };

  return (
    <section id="skills" className="min-h-screen py-10 xl:py-20 text-center">
      <h1 className="font-inria text-2xl sm:text-4xl text-cerise font-bold mb-5 sm:mb-10">
        Skills
      </h1>
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
                  title={skill.label}
                  key={skill.label}
                  arrow
                  open={isMobile ? openTooltip === skill.label : false}
                  disableHoverListener={isMobile}
                  disableFocusListener={isMobile}
                  disableTouchListener={isMobile}
                >
                  <motion.img
                    src={skill.src}
                    alt={skill.label}
                    whileHover={!isMobile ? { scale: 1.15 } : {}}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-15 h-15 rounded-full border-2 border-cerise bg-white object-contain cursor-pointer"
                    onClick={() => isMobile && handleClick(skill.label)}
                  />
                </Tooltip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
