import { HeaderNavItem } from "@/lib/types";
import { SheetMenu } from "./SheetMenu";
import { Link } from "react-router-dom";

const navigation: HeaderNavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Me",
    href: "/about",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "Project",
    href: "/projects",
  },
  {
    title: "Skills",
    href: "/skills",
  },
];

export const HeaderNew = () => {
  return (
    <header className="sticky top-4 z-50 md:items-center flex flex-col m-3 gap-2 mx-auto w-[min(1600px,92%)]">
      {/* Sheet Menu for mobile */}
      <SheetMenu navItems={navigation} className="md:hidden" />

      {/* Dekstop version */}
      <nav className="hidden md:flex top-0 bg-rose p-4 rounded-full justify-around items-center gap-8 w-2/3 cursor-pointer text-white font-semibold text-xl">
        {navigation.map((item) => (
          <Link to={item.href} key={item.title}>
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};
