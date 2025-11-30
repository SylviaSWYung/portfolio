import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { HeaderNavItem } from "@/lib/types";
import { Link } from "react-router-dom";

type HeaderProps = {
  navItems: HeaderNavItem[];
  className?: string;
};

export const SheetMenu = ({ navItems, className }: HeaderProps) => {
  return (
    <nav className={className}>
      <Sheet>
        <SheetTrigger asChild>
          <button className="cursor-pointer fixed top-5 right-5 z-50 p-1 bg-rose rounded-md shadow-md">
            <Menu className="w-10 h-10 text-white" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-rose text-white">
          <SheetHeader className="flex gap-5">
            <SheetTitle className="text-white text-2xl">
              Where to, Bestie?
            </SheetTitle>
            <SheetDescription className="text-white text-md text-center">
              Your journey through my little corner of the internet starts here
            </SheetDescription>
          </SheetHeader>
          <nav className="flex flex-col gap-6 ml-2 text-lg text-center font-semibold">
            {navItems.map((item) => {
              return (
                <SheetClose asChild key={item.title}>
                  <Link to={item.href}>{item.title}</Link>
                </SheetClose>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
};
