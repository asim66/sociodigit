import React from 'react';
import type { Metadata } from 'next';
import SoftwareDevelopmentPage from './SoftwareDevelopmentPage';

export const metadata: Metadata = {
  title: 'Custom Software & SaaS Development Services | Sociodigit',
  description: 'Sociodigit engineers scalable B2B SaaS platforms, enterprise microservices, high-throughput APIs, and AI applications with Next.js 15, TypeScript, Go, Python, and AWS.',
  keywords: [
    'Custom Software Development',
    'SaaS Development Company',
    'Enterprise Web Application Development',
    'Microservices Architecture',
    'API Engineering',
    'Next.js Software Development',
    'AI Integration Services',
    'High Concurrency Backend',
    'Cloud Native Software Engineering'
  ],
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
    title: 'Custom Software & SaaS Development Services | Sociodigit',
    description: 'We engineer high-performance SaaS platforms, enterprise web applications, microservices, and APIs with Next.js 15, React, Node.js, Go, and Python.',
    siteName: 'Sociodigit',
    images: [{
      url: 'https://sociodigit.in/og-banner.jpg',
      width: 1200,
      height: 630,
      alt: 'Sociodigit Software & SaaS Development Engineering',
    }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sociodigit',
    title: 'Custom Software & SaaS Development Services | Sociodigit',
    description: 'We engineer high-performance SaaS platforms, enterprise web applications, microservices, and APIs with Next.js 15, React, Node.js, Go, and Python.',
    images: ['https://sociodigit.in/og-banner.jpg'],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://sociodigit.in/services/software-development#service",
    "name": "Custom Software & SaaS Development",
    "alternateName": "Software & Web Engineering",
    "url": "https://sociodigit.in/services/software-development",
    "description": "High-performance, scalable software engineering with clean architecture, strict TypeScript, and secure cloud infrastructure built for long-term scalability.",
    "provider": {
      "@id": "https://sociodigit.in/#organization"
    },
    "serviceType": [
      "Custom SaaS Platforms",
      "Enterprise Web Applications",
      "High-Throughput Microservices",
      "API Development & Integration",
      "Generative AI & RAG Systems",
      "Cloud Native Architecture",
      "Legacy System Modernization"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "B2B SaaS Platform Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enterprise Web Applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "High-Throughput Microservices & APIs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Generative AI & LLM Systems Integration"
          }
        }
      ]
    },
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
        "name": "Home",
        "item": "https://sociodigit.in"
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
        "name": "Software Development",
        "item": "https://sociodigit.in/services/software-development"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who owns the intellectual property, source code, and cloud infrastructure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You retain 100% exclusive ownership of all intellectual property, source code repositories, databases, and deployment keys from day one. All code is committed directly to your private GitHub/GitLab repository."
        }
      },
      {
        "@type": "Question",
        "name": "How do you prevent technical debt and ensure code quality?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We practice strict engineering hygiene: 100% type-safe TypeScript, strict linting rules, Domain-Driven Design (DDD), automated CI/CD validation with Playwright and Jest (>90% test coverage target), and mandatory peer code reviews."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate with our existing legacy systems or proprietary databases?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We architect zero-downtime ETL pipelines, wrap legacy SOAP or SQL databases with performant REST/GraphQL microservices, and ensure zero disruption to current business operations."
        }
      },
      {
        "@type": "Question",
        "name": "What is your typical project timeline and sprint cadence?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MVP platforms are typically engineered and shipped to production in 6 to 10 weeks. Enterprise systems average 12 to 16 weeks. We work in disciplined 2-week agile sprints with working staging demos delivered every alternate Friday."
        }
      },
      {
        "@type": "Question",
        "name": "What post-launch warranty, maintenance, and support do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every project includes a comprehensive 30 to 90-day post-launch warranty covering bug fixes and performance tuning at zero extra charge, followed by flexible SLA retainers."
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
      <SoftwareDevelopmentPage />
    </>
  );
}
