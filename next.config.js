/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.discordapp.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
