import React from 'react';
import type { Metadata } from 'next';
import InfrastructurePage from './InfrastructurePage';

export const metadata: Metadata = {
  title: 'Cloud Infrastructure & DevOps Solutions | Sociodigit',
  description: 'AWS, GCP, and Azure cloud engineering, Kubernetes orchestration, Terraform IaC, and 24/7 infrastructure monitoring.',
  alternates: {
    canonical: 'https://sociodigit.in/services/infrastructure',
    languages: {
      'en': 'https://sociodigit.in/services/infrastructure',
      'x-default': 'https://sociodigit.in/services/infrastructure',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/services/infrastructure',
    title: 'Cloud Infrastructure & DevOps Solutions | Sociodigit',
    description: 'AWS, GCP, and Azure cloud engineering, Kubernetes orchestration, Terraform IaC, and 24/7 infrastructure monitoring.',
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
    title: 'Cloud Infrastructure & DevOps Solutions | Sociodigit',
    description: 'AWS, GCP, and Azure cloud engineering, Kubernetes orchestration, Terraform IaC, and 24/7 infrastructure monitoring.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://sociodigit.in/services/infrastructure#main",
    "url": "https://sociodigit.in/services/infrastructure",
    "name": "Cloud Infrastructure",
    "description": "AWS, GCP, and Azure cloud engineering, Kubernetes orchestration, Terraform IaC, and 24/7 infrastructure monitoring.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/services/infrastructure#breadcrumb",
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
        "name": "Cloud Infrastructure",
        "item": "https://sociodigit.in/services/infrastructure"
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
      <InfrastructurePage />
    </>
  );
}
