import React from 'react';
import type { Metadata } from 'next';
import SecurityConsultingPage from './SecurityConsultingPage';

export const metadata: Metadata = {
  title: 'Cybersecurity Consulting & Penetration Testing | Sociodigit',
  description: 'Penetration testing, vulnerability assessments, cloud security hardening, SOC 2 & ISO 27001 compliance advisory, and 24/7 threat monitoring.',
  alternates: {
    canonical: 'https://sociodigit.in/services/security-consulting',
    languages: {
      'en': 'https://sociodigit.in/services/security-consulting',
      'x-default': 'https://sociodigit.in/services/security-consulting',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/services/security-consulting',
    title: 'Cybersecurity Consulting & Penetration Testing | Sociodigit',
    description: 'Penetration testing, vulnerability assessments, cloud security hardening, SOC 2 & ISO 27001 compliance advisory, and 24/7 threat monitoring.',
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
    title: 'Cybersecurity Consulting & Penetration Testing | Sociodigit',
    description: 'Penetration testing, vulnerability assessments, cloud security hardening, SOC 2 & ISO 27001 compliance advisory, and 24/7 threat monitoring.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://sociodigit.in/services/security-consulting#main",
    "url": "https://sociodigit.in/services/security-consulting",
    "name": "Security Consulting",
    "description": "Penetration testing, vulnerability assessments, cloud security hardening, SOC 2 & ISO 27001 compliance advisory, and 24/7 threat monitoring.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/services/security-consulting#breadcrumb",
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
        "name": "Security Consulting",
        "item": "https://sociodigit.in/services/security-consulting"
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
      <SecurityConsultingPage />
    </>
  );
}
