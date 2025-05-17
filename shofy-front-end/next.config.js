/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'i.ibb.co',
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: 'res.cloudinary.com',
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: 'lh3.googleusercontent.com',
        pathname: "**",
      }
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@assets': path.join(__dirname, 'public/assets'),
    };
    return config;
  },
}

module.exports = nextConfig
