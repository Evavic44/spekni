const { redirect } = require('next/dist/server/api-utils');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ['res.cloudinary.com', 'avatars.githubusercontent.com'],
  },
};