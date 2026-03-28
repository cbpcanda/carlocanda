import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/dms/image/**",
      },
      {
        protocol: "https",
        hostname: "cdn.tech.eu",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "mindanews.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
