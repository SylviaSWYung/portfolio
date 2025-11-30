import { HeaderNavItem } from "@/lib/types";
import { SheetMenu } from "./SheetMenu";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useHeaderPill } from "@/lib/hooks/useHeaderPill";

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

export const Header = () => {
  const { active } = useHeaderPill(navigation);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  return (
    <header className="sticky top-4 z-50 sm:items-center flex flex-col m-3 gap-2 mx-auto w-[min(1600px,92%)]">
      {/* Sheet Menu for mobile */}
      <SheetMenu navItems={navigation} className="sm:hidden" />

      {/* Dekstop version */}
      <div className="relative hidden sm:flex top-0 items-center rounded-full bg-rose py-4 px-6 overflow-hidden">
        <nav className="sm:flex hidden justify-around items-center gap-10 text-white text-xl">
          {navigation.map((item) => (
            <Link
              to={item.href}
              key={item.title}
              className={
                "hover:text-text-dark relative transition-colors cursor-pointer z-10 " +
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
                width: (itemRefs.current[active]?.offsetWidth ?? 0) + 20,
                left: (itemRefs.current[active]?.offsetLeft ?? 0) + -10,
              }}
            />
          )}
        </nav>
      </div>
    </header>
  );
};
