import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

import { ThemeProvider } from 'next-themes';

import { baseUrl, navbarData, personalData, skillsData } from '@/data/data';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Navbar } from '@/components/navbar';

const supreme = localFont({
  src: '../public/fonts/Supreme-Variable.woff2',
  variable: '--font-supreme',
  display: 'swap',
});

const title = `${personalData.name} | Full Stack Web Developer`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: title,
    template: `%s | ${personalData.name}`,
  },
  description: personalData.seoDescription,
  keywords: [
    'Oliver Dean Johnston',
    'Full Stack Developer',
    'Web Developer',
    'Next.js',
    'React',
    'TypeScript',
    'Leeds',
  ],
  authors: [{ name: personalData.name }],
  creator: personalData.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: '/',
    siteName: personalData.name,
    title,
    description: personalData.seoDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: personalData.seoDescription,
  },
  icons: {
    icon: '/icons/icon.svg',
    apple: '/icons/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const contactLinks = navbarData.filter((item) => item.type === 'contact');

const profilePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: baseUrl,
  mainEntity: {
    '@type': 'Person',
    name: personalData.name,
    email: contactLinks.find((item) => item.href.startsWith('mailto:'))?.href.replace('mailto:', ''),
    jobTitle: 'Full Stack Web Developer',
    description: personalData.seoDescription,
    url: baseUrl,
    image: `${baseUrl}${personalData.avatarUrl}`,
    worksFor: { '@type': 'Organization', name: 'Flaunt Digital', url: 'https://flauntdigital.com' },
    knowsAbout: skillsData.flatMap((group) => group.skills.map((skill) => skill.name)),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Leeds',
      addressCountry: 'GB',
    },
    sameAs: contactLinks.filter((item) => item.href.startsWith('http')).map((item) => item.href),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body className={`${supreme.variable}`}>
        <noscript>
          <style>{'[data-intro],[data-intro-dock]{opacity:1!important}'}</style>
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }} />
        <div className="mx-auto min-h-screen max-w-2xl px-6 py-12 font-sans antialiased sm:py-24">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
            <Navbar />
          </ThemeProvider>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
