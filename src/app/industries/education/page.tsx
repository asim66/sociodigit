import React from 'react';
import type { Metadata } from 'next';
import EducationPage from './EducationPage';

export const metadata: Metadata = {
  title: 'EdTech & Learning Management Platform Development | Sociodigit',
  description: 'Scalable LMS platforms, virtual classrooms, interactive learning apps, and educational analytics software.',
  alternates: {
    canonical: 'https://sociodigit.in/industries/education',
    languages: {
      'en': 'https://sociodigit.in/industries/education',
      'x-default': 'https://sociodigit.in/industries/education',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/industries/education',
    title: 'EdTech & Learning Management Platform Development | Sociodigit',
    description: 'Scalable LMS platforms, virtual classrooms, interactive learning apps, and educational analytics software.',
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
    title: 'EdTech & Learning Management Platform Development | Sociodigit',
    description: 'Scalable LMS platforms, virtual classrooms, interactive learning apps, and educational analytics software.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://sociodigit.in/industries/education#main",
    "url": "https://sociodigit.in/industries/education",
    "name": "EdTech Solutions",
    "description": "Scalable LMS platforms, virtual classrooms, interactive learning apps, and educational analytics software.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/industries/education#breadcrumb",
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
        "name": "EdTech Solutions",
        "item": "https://sociodigit.in/industries/education"
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
      <EducationPage />
    </>
  );
}
