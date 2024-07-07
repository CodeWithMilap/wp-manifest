/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['placehold.co','a.storyblok.com'],
  },
};

export default nextConfig;
