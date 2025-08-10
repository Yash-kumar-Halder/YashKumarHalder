import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '', // leave empty for default
        pathname: '/**', // match all paths
      },
    ],
  },
};

export default nextConfig;
