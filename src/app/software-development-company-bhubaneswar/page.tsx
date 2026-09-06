import React from 'react';
import type { Metadata } from 'next';
import SoftwareDevelopmentCompanyBhubaneswarPage from './SoftwareDevelopmentCompanyBhubaneswarPage';

export const metadata: Metadata = {
  title: 'Top Software Development Company in Bhubaneswar, Odisha | Sociodigit',
  description: 'Top software development company in Bhubaneswar, Odisha. We engineer custom enterprise web apps, Next.js SaaS platforms, cloud DevOps, and API microservices.',
  keywords: [
    'software development company Bhubaneswar',
    'web development company Bhubaneswar',
    'best IT company in Bhubaneswar',
    'custom software development Odisha',
    'Next.js development company Bhubaneswar',
    'app developers Bhubaneswar',
    'IT consulting services Infocity Patia',
    'SaaS development agency Odisha',
  ],
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
    title: 'Top Software Development Company in Bhubaneswar, Odisha | Sociodigit',
    description: 'Top software development company in Bhubaneswar, Odisha. We engineer custom enterprise web apps, Next.js SaaS platforms, cloud DevOps, and API microservices.',
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
    title: 'Top Software Development Company in Bhubaneswar, Odisha | Sociodigit',
    description: 'Top software development company in Bhubaneswar, Odisha. We engineer custom enterprise web apps, Next.js SaaS platforms, cloud DevOps, and API microservices.',
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
    "hasMap": "https://maps.google.com/?q=20.2724,85.8488",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:30",
      "closes": "18:30"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "42",
      "bestRating": "5"
    },
    "areaServed": [
      { "@type": "City", "name": "Bhubaneswar" },
      { "@type": "AdministrativeArea", "name": "Patia, Bhubaneswar" },
      { "@type": "AdministrativeArea", "name": "Saheed Nagar, Bhubaneswar" },
      { "@type": "AdministrativeArea", "name": "Infocity, Bhubaneswar" },
      { "@type": "AdministrativeArea", "name": "Laxmisagar, Bhubaneswar" },
      { "@type": "AdministrativeArea", "name": "Jaydev Vihar, Bhubaneswar" },
      { "@type": "AdministrativeArea", "name": "Chandrasekharpur, Bhubaneswar" },
      { "@type": "City", "name": "Cuttack" },
      { "@type": "City", "name": "Rourkela" },
      { "@type": "City", "name": "Puri" },
      { "@type": "State", "name": "Odisha" },
      { "@type": "Country", "name": "India" }
    ],
    "knowsAbout": [
      "Custom Software Development",
      "Enterprise Web Applications (Next.js, Node.js, Go)",
      "SaaS Platform Architecture",
      "Cloud Infrastructure & DevOps (AWS, GCP)",
      "Microservices & REST / GraphQL APIs",
      "Automated QA & Playwright Testing",
      "Bhubaneswar IT Corridor Software Engineering"
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
