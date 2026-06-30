import React from 'react';
import type { Metadata } from 'next';
import ServicesPage from './ServicesPage';

export const metadata: Metadata = {
  title: 'Full-Stack Digital Services — Software, DevOps, Design & Marketing | Sociodigit',
  description: "Explore Sociodigit's complete service suite: custom software development, cloud & DevOps, QA automation, UI/UX product design, digital marketing, and strategic consulting — all under one roof.",
  alternates: {
    canonical: 'https://sociodigit.in/services',
    languages: {
      'en': 'https://sociodigit.in/services',
      'x-default': 'https://sociodigit.in/services',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/services',
    title: 'Full-Stack Digital Services — Software, DevOps, Design & Marketing | Sociodigit',
    description: "Explore Sociodigit's complete service suite: custom software development, cloud & DevOps, QA automation, UI/UX product design, digital marketing, and strategic consulting — all under one roof.",
    siteName: 'Sociodigit',
    images: [{
      url: 'https://sociodigit.in/og-banner.jpg',
      width: 1200,
      height: 630,
    }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sociodigit',
    title: 'Full-Stack Digital Services — Software, DevOps, Design & Marketing | Sociodigit',
    description: "Explore Sociodigit's complete service suite: custom software development, cloud & DevOps, QA automation, UI/UX product design, digital marketing, and strategic consulting — all under one roof.",
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

export default function Page() {
  return <ServicesPage />;
}
