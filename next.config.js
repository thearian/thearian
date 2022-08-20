/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'unpkg.com',
      'arian.storage.iran.liara.space'
    ],
  },
  experimental: {
    images: {
      unoptimized: true
    }
  }
}

module.exports = nextConfig
