import { HeaderNavItem } from "@/lib/types";
import { SheetMenu } from "./SheetMenu";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const navigation: HeaderNavItem[] = [
  {
    title: "Home",
    href: "/",
    section: "home",
  },
  {
    title: "About Me",
    href: "/about",
    section: "about",
  },
  {
    title: "Work",
    href: "/work",
    section: "work",
  },
  {
    title: "Project",
    href: "/projects",
    section: "projects",
  },
  {
    title: "Skills",
    href: "/skills",
    section: "skills",
  },
];

export const HeaderNew = () => {
  const [active, setActive] = useState("Home");
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const sections = navigation
      .map((n) => document.getElementById(n.section))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 },
    );
    sections.forEach((sec) => observer.observe(sec!));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-4 z-50 md:items-center flex flex-col m-3 gap-2 mx-auto w-[min(1600px,92%)]">
      {/* Sheet Menu for mobile */}
      <SheetMenu navItems={navigation} className="md:hidden" />

      {/* Dekstop version */}
      <div className="relative hidden md:flex top-0 items-center rounded-full bg-rose p-4 overflow-hidden">
        <nav className="md:flex hidden justify-around items-center gap-10 text-white font-semibold text-xl">
          {navigation.map((item) => (
            <Link
              to={item.href}
              key={item.title}
              className={
                "hover:text-gray-200 relative transition-colors cursor-pointer z-10 " +
                (active === item.section ? "text-black" : "text-white")
              }
              ref={(el) => {
                itemRefs.current[item.section] = el;
              }}
            >
              {item.title}
            </Link>
          ))}

          {active && (
            <motion.div
              layout
              transition={{ type: "tween", stiffness: 300, damping: 30 }}
              className="absolute bg-white rounded-full p-5"
              style={{
                width: itemRefs.current[active]?.offsetWidth ?? 0,
                left: itemRefs.current[active]?.offsetLeft ?? 0,
              }}
            />
          )}
        </nav>
      </div>
    </header>
  );
};
