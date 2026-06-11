import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

import { navbarData, personalData } from '@/data/data';
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
  description: personalData.description,
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
    description: personalData.description,
    images: [{ url: personalData.avatarUrl, alt: personalData.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: personalData.description,
    images: [personalData.avatarUrl],
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
  icons: {
    icon: '/images/me.avif',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: personalData.name,
  jobTitle: 'Full Stack Web Developer',
  url: baseUrl,
  image: `${baseUrl}${personalData.avatarUrl}`,
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
