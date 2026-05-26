import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/chatscope-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
