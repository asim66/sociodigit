import React from 'react';
import type { Metadata } from 'next';
import SoftwareDevelopmentCompanyBhubaneswarPage from './SoftwareDevelopmentCompanyBhubaneswarPage';

export const metadata: Metadata = {
  title: 'Software Development Company in Bhubaneswar | Sociodigit',
  description: 'Top software development company in Bhubaneswar. We engineer custom web apps, scalable SaaS architectures, mobile apps, and enterprise cloud solutions.',
  alternates: {
    canonical: 'https://sociodigit.in/software-development-company-bhubaneswar',
    languages: {
      'en': 'https://sociodigit.in/software-development-company-bhubaneswar',
      'x-default': 'https://sociodigit.in/software-development-company-bhubaneswar',
    },
  },
  authors: [{ name: 'Sociodigit' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://sociodigit.in/software-development-company-bhubaneswar',
    title: 'Software Development Company in Bhubaneswar | Sociodigit',
    description: 'Top software development company in Bhubaneswar. We engineer custom web apps, scalable SaaS architectures, mobile apps, and enterprise cloud solutions.',
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
    title: 'Software Development Company in Bhubaneswar | Sociodigit',
    description: 'Top software development company in Bhubaneswar. We engineer custom web apps, scalable SaaS architectures, mobile apps, and enterprise cloud solutions.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://sociodigit.in/software-development-company-bhubaneswar#localbusiness",
    "name": "Sociodigit — Software Development Company Bhubaneswar",
    "url": "https://sociodigit.in/software-development-company-bhubaneswar",
    "logo": "https://sociodigit.in/logo-dark.png",
    "image": "https://sociodigit.in/og-banner.jpg",
    "description": "Enterprise software development company in Bhubaneswar building custom web applications, SaaS platforms, cloud infrastructure, and mobile apps across Odisha.",
    "telephone": "+91-7008381630",
    "email": "hi@sociodigit.in",
    "priceRange": "₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "HP4, Phase 2, Brit Colony, Laxmisagar",
      "addressLocality": "Bhubaneswar",
      "addressRegion": "Odisha",
      "postalCode": "751006",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "20.2724",
      "longitude": "85.8488"
    },
    "areaServed": [
      { "@type": "City", "name": "Bhubaneswar" },
      { "@type": "State", "name": "Odisha" },
      { "@type": "City", "name": "Cuttack" },
      { "@type": "City", "name": "Rourkela" },
      { "@type": "City", "name": "Puri" },
      { "@type": "Country", "name": "India" }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/sociodigit",
      "https://twitter.com/sociodigit",
      "https://www.instagram.com/sociodigit",
      "https://www.facebook.com/sociodigit"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://sociodigit.in/software-development-company-bhubaneswar#service",
    "name": "Software Development Services Bhubaneswar",
    "serviceType": "Custom Software Engineering, SaaS Architecture & Cloud DevOps",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Bhubaneswar"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Engineering Offerings",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Enterprise Web Applications (Next.js, Node.js, Go)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud Native Architecture & AWS / GCP Migration" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Microservices & Secure REST / GraphQL API Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automated QA, Playwright & Continuous Delivery Pipelines" } }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://sociodigit.in/software-development-company-bhubaneswar#breadcrumb",
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
        "name": "Software Development Company Bhubaneswar",
        "item": "https://sociodigit.in/software-development-company-bhubaneswar"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://sociodigit.in/software-development-company-bhubaneswar#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why choose Sociodigit as your software development company in Bhubaneswar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sociodigit combines senior full-stack software architects, modern microservices paradigms (Next.js, Go, Python, PostgreSQL), automated CI/CD pipelines, and cloud expertise on AWS & GCP. We engineer resilient software built for high concurrent traffic and enterprise scale."
        }
      },
      {
        "@type": "Question",
        "name": "What tech stacks do you specialize in for custom software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We build with Next.js, React, Node.js, Go, Python, PostgreSQL, Redis, Docker, Kubernetes, AWS, Google Cloud, and Terraform, ensuring fast load times and clean, maintainable code."
        }
      },
      {
        "@type": "Question",
        "name": "Can you handle legacy codebase modernization and cloud migration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in refactoring monolithic legacy codebases into scalable microservices or serverless architectures with automated testing and zero business downtime."
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
      <SoftwareDevelopmentCompanyBhubaneswarPage />
    </>
  );
}
