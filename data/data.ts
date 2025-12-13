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
    const birthYear = 2004;
    const age = currentYear - birthYear;

    return `I'm a ${age} year old **full stack developer** at Flaunt Digital, focused on building performant, accessible web applications. I have **${yearsOfExperience} years** of experience. Outside work, I enjoy tech and gaming.`;
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
    description: ['placeholder description 1', 'placeholder description 2', 'placeholder description 3'],
  },

  {
    company: 'Flaunt Digital',
    location: 'Leeds',
    title: 'Junior Web Developer',
    logoUrl: '/images/flaunt-digital.jpg',
    start: 'Oct 2024',
    end: 'Present',
    description: ['placeholder description 1', 'placeholder description 2', 'placeholder description 3'],
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
    description:
      'A dashboard I built for my group of friends to track our Steam Family Sharing libraries and figure out who should buy the next game.',
    detailedDescription: `I built this for my friends as we share games through Steam Family Sharing. We kept having the same argument about whose turn it was to buy the next game, so I made a dashboard that syncs with Steam's API to pull everyone's libraries and tracks what we've spent.
    It compares game prices from both Steam and CDKeys, and there's a "next buyer" algorithm that looks at recent spending (70%) and how long it's been since someone last bought something (30%). You upload your Steam licenses HTML file to get the initial purchase dates, then a cron job runs daily to track new games going forward.
    The annoying bits were Steam's API rate limits, had to add sleep delays everywhere, and matching game names between Steam and CDKeys was a pain. Ended up building a similarity matching thing to handle all the weird naming differences.`,
    keyFeatures: [
      'Steam library sync via Steam API',
      'Next buyer algorithm based on spending and purchase history',
      'Compare prices from Steam and CDKeys',
      'Monthly spending trends',
      'Library editor to manually adjust game data',
      'Family sharing support detection',
    ],
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
