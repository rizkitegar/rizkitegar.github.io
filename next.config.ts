import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow next/image to serve local public folder images
    localPatterns: [
      {
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
