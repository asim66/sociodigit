import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'Applebot',
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'anthropic-ai',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
          'CCBot',
          'cohere-ai',
          'Bytespider',
          'Diffbot',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://sociodigit.in/sitemap.xml',
    host: 'https://sociodigit.in',
  };
}
