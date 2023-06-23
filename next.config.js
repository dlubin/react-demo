/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/react-demo",
};

module.exports = nextConfig;
