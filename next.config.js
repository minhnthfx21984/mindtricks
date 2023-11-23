/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    SERVER_URL: process.env.SERVER_URL,
  },
};

module.exports = nextConfig;
