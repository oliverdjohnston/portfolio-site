import { FaEnvelope, FaGithub, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa';
import { FaHouse } from 'react-icons/fa6';
import { SiInertia, SiJavascript, SiLaravel, SiMysql, SiPhp, SiReact, SiTailwindcss } from 'react-icons/si';

export const Icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
  home: FaHouse,
  sun: FaSun,
  moon: FaMoon,
  php: SiPhp,
  laravel: SiLaravel,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  mysql: SiMysql,
  react: SiReact,
  inertia: SiInertia,
} as const;
