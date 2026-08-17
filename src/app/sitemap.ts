import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sociodigit.in';
  const currentDate = new Date().toISOString();

  const routes = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/careers', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/case-studies', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/csr', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/hotel-fraud-control', priority: 0.8, changeFrequency: 'monthly' as const },
    
    // Services
    { url: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/services/software-development', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services/devops', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services/security-consulting', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services/content-strategy', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services/digital-marketing', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/seo-agency-bhubaneswar', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/services/digital-transformation', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services/user-experience', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services/qa-automation', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services/consulting', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services/product-design', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services/custom-apps', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services/infrastructure', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services/strategy-roadmap', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services/tech-audit', priority: 0.8, changeFrequency: 'monthly' as const },
    
    // Industries
    { url: '/industries', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/industries/startups', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/industries/ecommerce', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/industries/fintech', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/industries/healthcare', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/industries/education', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/industries/hospitality-hotels', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/industries/enterprises', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/industries/non-profits', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/industries/saas', priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
