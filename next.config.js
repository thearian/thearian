/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['unpkg.com'],
  },
  experimental: {
    images: {
      unoptimized: true
    }
  }
}

module.exports = nextConfig
