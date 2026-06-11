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
    description: [
      'Worked on internal and client projects using HTML, CSS/SCSS, JavaScript, React, Gatsby, Laravel, Inertia, Tailwind CSS and MySQL.',
      'Built and maintained internal tools with Laravel, Blade and Tailwind CSS.',
      'Collaborated within an Agile team using Git, pull requests, ActiveCollab tasks and daily stand-ups.',
    ],
  },
  {
    company: 'Flaunt Digital',
    location: 'Leeds',
    title: 'Junior Web Developer',
    logoUrl: '/images/flaunt-digital.jpg',
    start: 'Oct 2024',
    end: 'Present',
    description: [
      'Redesigned internal tools using Laravel, Blade and Tailwind CSS, improving responsiveness and user experience.',
      'Developed Google Apps Script automations integrating with services such as ActiveCollab and the Google Ads API to improve internal efficiency.',
      'Delivered CMS driven frontend projects using Gatsby, Contentful and GraphQL.',
      'Managed deployments and local development environments using Laravel Forge and Laravel Valet, with Netlify and Vercel for client projects.',
      'Migrated internal tools from AWS to Laravel Forge.',
      'Worked with a variety of members within the company such as designers, senior developers, project managers and members of the SEO team.',
    ],
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
  external: {
    name: 'Website',
    icon: Icons.external,
  },
  nextjs: {
    name: 'Next.js',
    icon: Icons.nextjs,
  },
  python: {
    name: 'Python',
    icon: Icons.python,
  },
  docker: {
    name: 'Docker',
    icon: Icons.docker,
  },
  fastapi: {
    name: 'FastAPI',
    icon: Icons.fastapi,
  },
  postgresql: {
    name: 'PostgreSQL',
    icon: Icons.postgresql,
  },
  redis: {
    name: 'Redis',
    icon: Icons.redis,
  },
  shadcn: {
    name: 'shadcn',
    icon: Icons.shadcn,
  },
  openai: {
    name: 'OpenAI',
    icon: Icons.openai,
  },
  rq: {
    name: 'RQ',
    icon: Icons.rq,
  },
  claude: {
    name: 'Claude',
    icon: Icons.claude,
  },
  copilot: {
    name: 'Copilot',
    icon: Icons.copilot,
  },
  supabase: {
    name: 'Supabase',
    icon: Icons.supabase,
  },
  opencode: {
    name: 'OpenCode',
    icon: Icons.opencode,
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

  {
    title: 'Trump Tracker',
    dates: '2026',
    active: true,
    description:
      "Trump Tracker ingests Donald Trump's public comments from YouTube captions, Factba.se transcripts and Truth Social. It uses an LLM to detect company mentions and confirm he was the speaker, then captures Polygon.io stock prices at fixed intervals afterward to measure whether his remarks move the market.",
    detailedDescription:
      "I built Trump Tracker to test whether Donald Trump's public comments have any measurable relationship with stock price movement. The system ingests his remarks from three sources: YouTube live captions, Factba.se transcripts and Truth Social, then uses OpenAI's GPT-5 Nano to detect company mentions and decide whether Trump actually said the relevant line or whether it came from someone else in the transcript. Each mention is scored for confidence and promotion intensity before being resolved to a US stock ticker. This turned out to be more complex than simple name matching because casual brand names are often ambiguous. To handle that, I built a multi stage resolution pipeline combining override rules, brand disambiguation and LLM fallbacks, with Polygon.io used to map a resolved name to a concrete ticker. Once a mention passes the confidence checks, the backend captures Polygon.io price snapshots at fixed event relative intervals after the comment which are: +15 minutes, +30 minutes, +1 hour, +4 hours and +1 day. Each user or admin can configure their own Discord webhook and email alerts. The platform also includes a live Next.js dashboard built with Tailwind, a human review queue for borderline matches the system isn't fully confident in and a separate pipeline that tracks the stock portfolios of Trump and his cabinet officials using public OGE financial disclosures. The most challenging part was making mention detection reliable, especially with messy YouTube captions and cases where transcript text had to be attributed to the correct speaker. I also had to handle market hours, weekends and Polygon.io boundaries so that price snapshots aligned to when the comment was actually made rather than when the system happened to process it. This project made me much more comfortable with FastAPI, Redis/RQ queues, Supabase/PostgreSQL, Next.js, TypeScript, Docker and using LLMs as one stage of a larger data pipeline rather than just as a chatbot.",
    keyFeatures: [
      'LLM powered company mention detection from YouTube captions, Factba.se transcripts and Truth Social',
      'Speaker attribution to reduce false positives from messy transcript data',
      'Confidence and promotion-intensity scoring for each detected mention',
      'Multi stage name to ticker resolution with override rules and brand disambiguation',
      'Event-relative stock price tracking at +15m, +30m, +1h, +4h, and +1d intervals',
      'Per user Discord webhook and email alerting with deduplication',
      'Live SSE dashboard streaming mentions, prices, and queue status',
      'Human review queue for borderline confidence mentions',
      'Cabinet portfolio tracking from public OGE financial disclosures',
    ],
    technologies: [
      'nextjs',
      'react',
      'typescript',
      'fastapi',
      'python',
      'postgresql',
      'redis',
      'tailwind',
      'shadcn',
      'docker',
      'openai',
      'rq',
    ],
    links: [
      {
        type: 'external',
        href: 'https://trumptracker.cc/',
      },
    ],
    image: '/images/projects/trump-tracker.png',
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
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Redis', icon: 'redis' },
      { name: 'Supabase', icon: 'supabase' },
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
      { name: 'shadcn/ui', icon: 'shadcn' },
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
      { name: 'OpenAI', icon: 'openai' },
      { name: 'Claude', icon: 'claude' },
      { name: 'Copilot', icon: 'copilot' },
      { name: 'OpenCode', icon: 'opencode' },
    ],
  },
] as const;
