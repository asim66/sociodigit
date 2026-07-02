import React from 'react';
import type { Metadata } from 'next';
import SoftwareDevelopmentPage from './SoftwareDevelopmentPage';

export const metadata: Metadata = {
  title: 'Custom Software & Web App Development | React, Node.js, Python | Sociodigit',
  description: 'We build high-performance SaaS platforms, enterprise web apps, microservices, and APIs using React, Next.js, Node.js, and Python. 200+ projects shipped. 99.9% uptime SLA. Built to last.',
  alternates: {
    canonical: 'https://sociodigit.in/services/software-development',
    languages: {
      'en': 'https://sociodigit.in/services/software-development',
      'x-default': 'https://sociodigit.in/services/software-development',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/services/software-development',
    title: 'Custom Software & Web App Development | React, Node.js, Python | Sociodigit',
    description: 'We build high-performance SaaS platforms, enterprise web apps, microservices, and APIs using React, Next.js, Node.js, and Python. 200+ projects shipped. 99.9% uptime SLA. Built to last.',
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
    title: 'Custom Software & Web App Development | React, Node.js, Python | Sociodigit',
    description: 'We build high-performance SaaS platforms, enterprise web apps, microservices, and APIs using React, Next.js, Node.js, and Python. 200+ projects shipped. 99.9% uptime SLA. Built to last.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://sociodigit.in/services/software-development#service",
    "name": "Software Development",
    "alternateName": "Software & Web Dev",
    "url": "https://sociodigit.in/services/software-development",
    "description": "High-performance, scalable software engineering with clean, secure code built to last.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    },
    "serviceType": [
      "Custom SaaS Platforms",
      "Enterprise Web Apps",
      "API Development",
      "Legacy Modernization",
      "Microservices"
    ],
    "offers": {
      "@type": "Offer",
      "url": "https://sociodigit.in/contact"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://sociodigit.in/#organization",
    "name": "Sociodigit",
    "url": "https://sociodigit.in/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://sociodigit.in/logo-dark.png"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "HP4, Phase 2, Brit Colony, Laxmisagar",
      "addressLocality": "Bhubaneswar",
      "postalCode": "751006"
    },
    "telephone": "+91 7008381630",
    "email": "hi@sociodigit.in",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91 7008381630",
        "email": "hi@sociodigit.in"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/services/software-development#breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Services",
        "item": "https://sociodigit.in/services"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Software Development",
        "item": "https://sociodigit.in/services/software-development"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://sociodigit.in/services/software-development#webpage",
    "url": "https://sociodigit.in/services/software-development",
    "name": "Software & Web Dev",
    "inLanguage": "en",
    "about": {
      "@id": "https://sociodigit.in/services/software-development#service"
    },
    "breadcrumb": {
      "@id": "https://sociodigit.in/services/software-development#breadcrumb"
    }
  }
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SoftwareDevelopmentPage />
    </>
  );
}
