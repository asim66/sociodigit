/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['lucide-react', 'motion', 'motion/react'],
  },
};

export default nextConfig;
