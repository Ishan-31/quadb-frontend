/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60 * 5 * 6,
    domains: [
      "ik.imagekit.io",
    ],
  },
  staticPageGenerationTimeout: 2000
}

module.exports = nextConfig
