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

export const navbarData = [{ href: '/', icon: Icons.home, label: 'Home' }] as const;

export const contactData = {
  social: {
    GitHub: {
      name: 'GitHub',
      url: 'https://github.com/oliverdjohnston',
      icon: Icons.github,
      navbar: true,
    },
    LinkedIn: {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/oliver-dean-johnston-50096b243/',
      icon: Icons.linkedin,
      navbar: true,
    },
    Email: {
      name: 'Email',
      url: 'mailto:oliverdeanjohnson@gmail.com',
      icon: Icons.email,
      navbar: true,
    },
  },
} as const;
