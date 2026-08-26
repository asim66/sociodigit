import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '../data/blogPosts';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sociodigit.in';

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `/blog/${post.slug}`,
    priority: 0.75,
    changeFrequency: 'monthly' as const,
    lastModified: post.isoDate.split('T')[0],
  }));

  const routes = [
    // Core Pages
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const, lastModified: '2026-08-26' },
    { url: '/about', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: '2026-08-25' },
    { url: '/contact', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: '2026-08-24' },
    { url: '/blog', priority: 0.8, changeFrequency: 'weekly' as const, lastModified: '2026-08-23' },
    ...blogRoutes,
    { url: '/careers', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-08-15' },
    { url: '/case-studies', priority: 0.85, changeFrequency: 'weekly' as const, lastModified: '2026-08-26' },
    { url: '/csr', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-08-10' },
    { url: '/hotel-fraud-control', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-18' },
    
    // Bhubaneswar Hubs (High Intent)
    { url: '/seo-agency-bhubaneswar', priority: 0.95, changeFrequency: 'weekly' as const, lastModified: '2026-08-26' },
    { url: '/digital-marketing-agency-bhubaneswar', priority: 0.95, changeFrequency: 'weekly' as const, lastModified: '2026-08-26' },
    { url: '/software-development-company-bhubaneswar', priority: 0.95, changeFrequency: 'weekly' as const, lastModified: '2026-08-26' },

    // Services
    { url: '/services', priority: 0.9, changeFrequency: 'weekly' as const, lastModified: '2026-08-22' },
    { url: '/services/software-development', priority: 0.85, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { url: '/services/devops', priority: 0.85, changeFrequency: 'monthly' as const, lastModified: '2026-08-20' },
    { url: '/services/digital-marketing', priority: 0.85, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { url: '/services/qa-automation', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-19' },
    { url: '/services/security-consulting', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-16' },
    { url: '/services/content-strategy', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-17' },
    { url: '/services/digital-transformation', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-18' },
    { url: '/services/user-experience', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-15' },
    { url: '/services/consulting', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-14' },
    { url: '/services/product-design', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-15' },
    { url: '/services/custom-apps', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-18' },
    { url: '/services/infrastructure', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-17' },
    { url: '/services/strategy-roadmap', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-14' },
    { url: '/services/tech-audit', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-16' },
    
    // Industries
    { url: '/industries', priority: 0.85, changeFrequency: 'weekly' as const, lastModified: '2026-08-20' },
    { url: '/industries/startups', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-12' },
    { url: '/industries/ecommerce', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-14' },
    { url: '/industries/fintech', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-15' },
    { url: '/industries/healthcare', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-13' },
    { url: '/industries/education', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-11' },
    { url: '/industries/hospitality-hotels', priority: 0.85, changeFrequency: 'monthly' as const, lastModified: '2026-08-22' },
    { url: '/industries/enterprises', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-12' },
    { url: '/industries/non-profits', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-08-08' },
    { url: '/industries/saas', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-16' },

    // Legal Compliance
    { url: '/privacy-policy', priority: 0.5, changeFrequency: 'yearly' as const, lastModified: '2026-08-26' },
    { url: '/terms-of-service', priority: 0.5, changeFrequency: 'yearly' as const, lastModified: '2026-08-26' },
    { url: '/cookie-policy', priority: 0.5, changeFrequency: 'yearly' as const, lastModified: '2026-08-26' },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(route.lastModified).toISOString(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
