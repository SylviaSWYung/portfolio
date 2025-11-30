export type HeaderNavItem = {
  title: string;
  href: string;
  section: string;
};

export type Skill = {
  src: string;
  label: string;
};

export type Category = {
  title: string;
  skills: Skill[];
};
