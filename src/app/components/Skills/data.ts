import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiRedux,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiMui,
  SiStyledcomponents,
  SiJest,
  SiTestinglibrary,
  SiWebpack,
  SiVite,
  SiEslint,
  SiPrettier
} from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon: IconType;
  level: number;
  color: string;
}

export interface TechBadge {
  name: string;
  icon: IconType;
  color: string;
}

export const MAIN_SKILLS: Skill[] = [
  {
    name: "React.js",
    icon: SiReact,
    level: 95,
    color: "#61DAFB"
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    level: 90,
    color: "#000000"
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    level: 85,
    color: "#3178C6"
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: 90,
    color: "#06B6D4"
  },
  {
    name: "Redux Toolkit",
    icon: SiRedux,
    level: 85,
    color: "#764ABC"
  },
  {
    name: "Git & GitHub",
    icon: FaGitAlt,
    level: 90,
    color: "#F05032"
  }
];

export const OTHER_TECH: TechBadge[] = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Sass", icon: SiSass, color: "#CC6699" },
  { name: "Material UI", icon: SiMui, color: "#007FFF" },
  { name: "Styled Components", icon: SiStyledcomponents, color: "#DB7093" },
  { name: "Jest", icon: SiJest, color: "#C21325" },
  { name: "Testing Library", icon: SiTestinglibrary, color: "#E33332" },
  { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "ESLint", icon: SiEslint, color: "#4B32C3" },
  { name: "Prettier", icon: SiPrettier, color: "#F7B93E" }
]; 