import { Icons } from '@/components/icons';

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
