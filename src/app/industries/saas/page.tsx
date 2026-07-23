import React from 'react';
import type { Metadata } from 'next';
import SaasPage from './SaasPage';

export const metadata: Metadata = {
  title: 'SaaS Product Engineering & Scale Services | Sociodigit',
  description: 'Multi-tenant architecture, subscription billing systems, microservices, and AI features for B2B & B2C SaaS platforms.',
  alternates: {
    canonical: 'https://sociodigit.in/industries/saas',
    languages: {
      'en': 'https://sociodigit.in/industries/saas',
      'x-default': 'https://sociodigit.in/industries/saas',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/industries/saas',
    title: 'SaaS Product Engineering & Scale Services | Sociodigit',
    description: 'Multi-tenant architecture, subscription billing systems, microservices, and AI features for B2B & B2C SaaS platforms.',
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
    title: 'SaaS Product Engineering & Scale Services | Sociodigit',
    description: 'Multi-tenant architecture, subscription billing systems, microservices, and AI features for B2B & B2C SaaS platforms.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://sociodigit.in/industries/saas#main",
    "url": "https://sociodigit.in/industries/saas",
    "name": "SaaS Product Engineering",
    "description": "Multi-tenant architecture, subscription billing systems, microservices, and AI features for B2B & B2C SaaS platforms.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/industries/saas#breadcrumb",
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
        "name": "SaaS Product Engineering",
        "item": "https://sociodigit.in/industries/saas"
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
      <SaasPage />
    </>
  );
}
