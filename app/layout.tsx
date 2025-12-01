import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { personalData } from '@/data/data';
import { Navbar } from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';

const supreme = localFont({
  src: '../public/fonts/Supreme-Variable.woff2',
  variable: '--font-supreme',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${personalData.name} | Full Stack Web Developer`,
    template: `%s | ${personalData.name}`,
  },
  description: personalData.description,
  openGraph: {
    title: `${personalData.name} | Full Stack Web Developer`,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body
        className={`${supreme.variable} bg-background mx-auto min-h-screen max-w-2xl px-6 py-12 font-sans antialiased sm:py-24`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Navbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
