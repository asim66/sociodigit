import React from 'react';
import type { Metadata } from 'next';
import DevOpsPage from './DevOpsPage';

export const metadata: Metadata = {
  title: 'Cloud & DevOps Engineering — AWS, GCP, Kubernetes, CI/CD | Sociodigit',
  description: "Automate your infrastructure and achieve 99.99% uptime with Sociodigit's DevOps experts. We build CI/CD pipelines, Kubernetes clusters, and multi-cloud architectures that scale without friction.",
  alternates: {
    canonical: 'https://sociodigit.in/services/devops',
    languages: {
      'en': 'https://sociodigit.in/services/devops',
      'x-default': 'https://sociodigit.in/services/devops',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/services/devops',
    title: 'Cloud & DevOps Engineering — AWS, GCP, Kubernetes, CI/CD | Sociodigit',
    description: "Automate your infrastructure and achieve 99.99% uptime with Sociodigit's DevOps experts. We build CI/CD pipelines, Kubernetes clusters, and multi-cloud architectures that scale without friction.",
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
    title: 'Cloud & DevOps Engineering — AWS, GCP, Kubernetes, CI/CD | Sociodigit',
    description: "Automate your infrastructure and achieve 99.99% uptime with Sociodigit's DevOps experts. We build CI/CD pipelines, Kubernetes clusters, and multi-cloud architectures that scale without friction.",
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
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
    "email": "hi@sociodigit.in",
    "telephone": "+91 7008381630",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "HP4, Phase 2, Brit Colony, Laxmisagar",
      "addressLocality": "Bhubaneswar",
      "postalCode": "751006"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://sociodigit.in/services/devops#service",
    "name": "Cloud & DevOps",
    "url": "https://sociodigit.in/services/devops",
    "serviceType": "Cloud & DevOps",
    "description": "Automate your infrastructure, scale with confidence, and guarantee 99.9% uptime. Our DevOps experts build the engineering foundation that lets your product grow without limits.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    },
    "brand": {
      "@id": "https://sociodigit.in/#organization"
    },
    "category": "Cloud infrastructure, CI/CD, Kubernetes & Docker, Monitoring & Logging, Security Automation, Disaster Recovery",
    "offers": {
      "@type": "Offer",
      "url": "https://sociodigit.in/services/devops"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/services/devops#breadcrumb",
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
        "name": "Services",
        "item": "https://sociodigit.in/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Cloud & DevOps",
        "item": "https://sociodigit.in/services/devops"
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
      <DevOpsPage />
    </>
  );
}
