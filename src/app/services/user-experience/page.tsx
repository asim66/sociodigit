import React from 'react';
import type { Metadata } from 'next';
import UserExperiencePage from './UserExperiencePage';

export const metadata: Metadata = {
  title: 'UX Research & Interface Design Services | Sociodigit',
  description: 'User research, wireframing, interactive prototyping, usability testing, and accessible UI/UX design systems.',
  alternates: {
    canonical: 'https://sociodigit.in/services/user-experience',
    languages: {
      'en': 'https://sociodigit.in/services/user-experience',
      'x-default': 'https://sociodigit.in/services/user-experience',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/services/user-experience',
    title: 'UX Research & Interface Design Services | Sociodigit',
    description: 'User research, wireframing, interactive prototyping, usability testing, and accessible UI/UX design systems.',
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
    title: 'UX Research & Interface Design Services | Sociodigit',
    description: 'User research, wireframing, interactive prototyping, usability testing, and accessible UI/UX design systems.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://sociodigit.in/services/user-experience#main",
    "url": "https://sociodigit.in/services/user-experience",
    "name": "User Experience Design",
    "description": "User research, wireframing, interactive prototyping, usability testing, and accessible UI/UX design systems.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/services/user-experience#breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sociodigit.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "User Experience Design",
        "item": "https://sociodigit.in/services/user-experience"
      }
    ]
  }
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UserExperiencePage />
    </>
  );
}
