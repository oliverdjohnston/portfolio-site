import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

import { navbarData, personalData, skillsData } from '@/data/data';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Navbar } from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';

const supreme = localFont({
  src: '../public/fonts/Supreme-Variable.woff2',
  variable: '--font-supreme',
  display: 'swap',
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

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
    images: [{ url: personalData.avatarUrl, width: 1080, height: 1080, alt: personalData.name }],
  },
  twitter: {
    card: 'summary',
    title,
    description: personalData.seoDescription,
    images: [personalData.avatarUrl],
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

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: personalData.name,
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
  sameAs: navbarData.filter((item) => item.type === 'contact' && item.href.startsWith('http')).map((item) => item.href),
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
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
