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

export const experiencesData = [
  {
    company: 'Flaunt Digital',
    location: 'Leeds',
    title: 'Apprentice Web Developer',
    logoUrl: '/images/flaunt-digital.jpg',
    start: 'Oct 2023',
    end: 'Oct 2024',
    description: ['placeholder description'],
  },

  {
    company: 'Flaunt Digital',
    location: 'Leeds',
    title: 'Junior Web Developer',
    logoUrl: '/images/flaunt-digital.jpg',
    start: 'Oct 2024',
    end: 'Present',
    description: ['placeholder description'],
  },
] as const;

export const badgeConfig = {
  github: {
    name: 'GitHub',
    icon: Icons.github,
  },
  php: {
    name: 'PHP',
    icon: Icons.php,
  },
  laravel: {
    name: 'Laravel',
    icon: Icons.laravel,
  },
  javascript: {
    name: 'JavaScript',
    icon: Icons.javascript,
  },
  tailwind: {
    name: 'Tailwind',
    icon: Icons.tailwind,
  },
  mysql: {
    name: 'MySQL',
    icon: Icons.mysql,
  },
  react: {
    name: 'React',
    icon: Icons.react,
  },
  inertia: {
    name: 'Inertia',
    icon: Icons.inertia,
  },
  typescript: {
    name: 'TypeScript',
    icon: Icons.typescript,
  },
} as const;

export const projectsData = [
  {
    title: 'Family Share Dashboard',
    dates: '2025',
    active: true,
    description: 'Placeholder description',
    detailedDescription: `Placeholder detailed description`,
    keyFeatures: ['Placeholder key feature 1', 'Placeholder key feature 2'],
    technologies: ['php', 'laravel', 'react', 'inertia', 'typescript', 'tailwind', 'mysql', 'javascript'],
    links: [
      {
        type: 'github',
        href: 'https://github.com/oliverdjohnston/family-share-laravel',
      },
    ],
    image: '/images/projects/family-share.png',
  },
] as const;

export const skillsData = [
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'PHP', icon: 'php' },
      { name: 'Python', icon: 'python' },
      { name: 'SQL', icon: 'sql' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'REST APIs', icon: 'restapis' },
      { name: 'GraphQL', icon: 'graphql' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Inertia.js', icon: 'inertia' },
      { name: 'Gatsby.js', icon: 'gatsby' },
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css3' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
  },
  {
    category: 'DevOps',
    skills: [
      { name: 'AWS', icon: 'aws' },
      { name: 'Docker', icon: 'docker' },
      { name: 'GitHub Actions', icon: 'githubactions' },
      { name: 'CI/CD', icon: 'cicd' },
      { name: 'BitBucket Pipelines', icon: 'bitbucketpipelines' },
    ],
  },
  {
    category: 'Practices',
    skills: [
      { name: 'Agile', icon: 'agile' },
      { name: 'Waterfall', icon: 'waterfall' },
      { name: 'OOP', icon: 'oop' },
      { name: 'TDD', icon: 'tdd' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Linux', icon: 'linux' },
      { name: 'Sentry', icon: 'sentry' },
      { name: 'BitBucket', icon: 'bitbucket' },
      { name: 'Laravel Forge', icon: 'laravelforge' },
      { name: 'Laravel Valet', icon: 'laravelvalet' },
    ],
  },
] as const;
