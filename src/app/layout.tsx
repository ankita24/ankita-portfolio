import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '../styles/tailwind.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Ankita Panigrahi — Senior Full-Stack Engineer',
  description:
    'Portfolio of Ankita Panigrahi, a senior software engineer with 9+ years building React, TypeScript, Node.js and mobile products.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Ankita Panigrahi — Senior Engineer',
    description: 'React, TypeScript and full-stack products, shipped end to end.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
    type: 'website',
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {children}
</body>
    </html>
  );
}