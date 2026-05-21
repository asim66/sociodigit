/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true,
  allowedDevOrigins: ['localhost', '127.0.0.1', '192.168.29.225'],
};

export default nextConfig;
