import React from 'react';
import type { Metadata } from 'next';
import HealthcarePage from './HealthcarePage';

export const metadata: Metadata = {
  title: 'Healthcare Software Development & HealthTech Solutions | Sociodigit',
  description: 'Custom healthcare software development, patient portals, EHR/EMR integrations, telemedicine apps, and intelligent medical data systems by Sociodigit.',
  keywords: [
    'healthcare software development',
    'patient portal development',
    'telemedicine app development',
    'EHR EMR integration',
    'hospital management software HIMS',
    'healthtech software company',
    'digital health solutions',
    'medical app development'
  ],
  alternates: {
    canonical: 'https://sociodigit.in/industries/healthcare',
    languages: {
      'en': 'https://sociodigit.in/industries/healthcare',
      'x-default': 'https://sociodigit.in/industries/healthcare',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/industries/healthcare',
    title: 'Healthcare Software Development & HealthTech Solutions | Sociodigit',
    description: 'Custom healthcare software development, patient portals, EHR/EMR integrations, telemedicine apps, and intelligent medical data systems.',
    siteName: 'Sociodigit',
    images: [{
      url: 'https://sociodigit.in/og-banner.jpg',
      width: 1200,
      height: 630,
      alt: 'Sociodigit Healthcare Software Solutions',
    }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sociodigit',
    title: 'Healthcare Software Development & HealthTech Solutions | Sociodigit',
    description: 'Custom healthcare software development, patient portals, EHR/EMR integrations, telemedicine apps, and intelligent medical data systems.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://sociodigit.in/industries/healthcare#main",
    "url": "https://sociodigit.in/industries/healthcare",
    "name": "Healthcare Software Development & HealthTech Solutions",
    "description": "Custom healthcare software development, patient portals, EHR/EMR integrations, telemedicine apps, and intelligent medical data systems.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/industries/healthcare#breadcrumb",
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
        "name": "Industries",
        "item": "https://sociodigit.in/industries"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Healthcare IT Solutions",
        "item": "https://sociodigit.in/industries/healthcare"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://sociodigit.in/industries/healthcare#service",
    "name": "Healthcare Software Engineering & HealthTech Solutions",
    "serviceType": "Healthcare IT Software Engineering",
    "description": "End-to-end custom software development for healthcare providers, telemedicine startups, diagnostic networks, and hospital systems.",
    "provider": {
      "@type": "Organization",
      "name": "Sociodigit",
      "url": "https://sociodigit.in"
    },
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Healthcare IT Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Telemedicine & Remote Patient Monitoring (RPM)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "EHR / EMR Interoperability & Integration" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Patient Portals & Mobile Apps" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Clinical Analytics & Decision Support Tools" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hospital Information Management Systems (HIMS)" } }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://sociodigit.in/industries/healthcare#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What type of healthcare software does Sociodigit build?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We design and build custom telemedicine platforms, patient engagement portals, EMR/EHR system integrations, digital lab management systems, clinic scheduling software, and hospital management backbones."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate custom applications with existing EMR and lab databases?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We build bi-directional APIs and data connectors to connect custom mobile or web portals seamlessly with legacy hospital EMRs, laboratory information systems, and pharmacy databases."
        }
      },
      {
        "@type": "Question",
        "name": "Can you build custom telemedicine mobile applications for iOS & Android?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We build WebRTC video consultation platforms, integrated scheduling, e-prescriptions, patient chat, automated appointment reminders, and device data synchronization."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a custom healthcare platform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard telemedicine or patient portal app takes 8 to 12 weeks. Comprehensive enterprise hospital platforms or multi-location clinical suites typically require 14 to 20 weeks."
        }
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
      <HealthcarePage />
    </>
  );
}
