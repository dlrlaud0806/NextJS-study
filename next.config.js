/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  compilerOptions: {
    baseUrl: ".",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
