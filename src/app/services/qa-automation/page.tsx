import React from 'react';
import type { Metadata } from 'next';
import QaAutomationPage from './QaAutomationPage';

export const metadata: Metadata = {
  title: 'QA Automation & Software Testing Services | Sociodigit',
  description: 'End-to-end automated testing, performance engineering, API testing, and continuous integration QA pipelines.',
  alternates: {
    canonical: 'https://sociodigit.in/services/qa-automation',
    languages: {
      'en': 'https://sociodigit.in/services/qa-automation',
      'x-default': 'https://sociodigit.in/services/qa-automation',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/services/qa-automation',
    title: 'QA Automation & Software Testing Services | Sociodigit',
    description: 'End-to-end automated testing, performance engineering, API testing, and continuous integration QA pipelines.',
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
    title: 'QA Automation & Software Testing Services | Sociodigit',
    description: 'End-to-end automated testing, performance engineering, API testing, and continuous integration QA pipelines.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://sociodigit.in/services/qa-automation#main",
    "url": "https://sociodigit.in/services/qa-automation",
    "name": "QA Automation",
    "description": "End-to-end automated testing, performance engineering, API testing, and continuous integration QA pipelines.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/services/qa-automation#breadcrumb",
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
        "name": "QA Automation",
        "item": "https://sociodigit.in/services/qa-automation"
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
      <QaAutomationPage />
    </>
  );
}
