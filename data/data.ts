import { Icons } from '@/components/icons';

export const personalData = {
  name: 'Oliver Dean Johnston',
  avatarUrl: '/images/me.avif',
  initials: 'ODJ',
  location: 'Leeds, United Kingdom',
  description: 'Full Stack Web Developer at Flaunt Digital',
  summary: (): string => {
    const currentYear = new Date().getFullYear();
    const startYear = 2023;
    const yearsOfExperience = currentYear - startYear;

    return `I'm a **full stack developer** at Flaunt Digital, focused on building performant, accessible web applications. I have **${yearsOfExperience} years** of experience. Outside work, I enjoy tech and gaming.`;
  },
} as const;

export const navbarData = [
  { type: 'nav' as const, href: '/', icon: Icons.home, label: 'Home' },
  { type: 'contact' as const, href: 'https://github.com/oliverdjohnston', icon: Icons.github, label: 'GitHub' },
  {
    type: 'contact' as const,
    href: 'https://www.linkedin.com/in/oliver-dean-johnston-50096b243/',
    icon: Icons.linkedin,
    label: 'LinkedIn',
  },
  { type: 'contact' as const, href: 'mailto:oliverdeanjohnson@gmail.com', icon: Icons.email, label: 'Email' },
] as const;
