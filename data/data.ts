import { Icons } from '@/components/icons';

export const navbarData = [{ href: '/', icon: Icons.home, label: 'Home' }] as const;

export const contactData = {
  email: 'hello@example.com',
  tel: '+123456789',
  social: {
    GitHub: {
      name: 'GitHub',
      url: 'https://github.com/',
      icon: Icons.github,
      navbar: true,
    },
    LinkedIn: {
      name: 'LinkedIn',
      url: 'https://linkedin.com/',
      icon: Icons.linkedin,
      navbar: true,
    },
    Email: {
      name: 'Email',
      url: 'mailto:you@example.com',
      icon: Icons.email,
      navbar: true,
    },
  },
} as const;
