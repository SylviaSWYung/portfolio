import { useEffect, useState } from "react";
import { HeaderNavItem } from "../types";

export const useHeaderPill = (navigation: HeaderNavItem[]) => {
  const [active, setActive] = useState("Home");

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
  }, [navigation]);

  return { active };
};
