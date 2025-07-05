import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/learning-materials-app' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/learning-materials-app/' : '',
};

export default nextConfig;
