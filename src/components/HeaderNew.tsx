import { HeaderNavItem } from "@/lib/types";
import { SheetMenu } from "./SheetMenu";

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
  return <SheetMenu navItems={navigation} />;
};
