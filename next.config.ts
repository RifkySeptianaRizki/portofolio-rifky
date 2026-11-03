import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/cv",
        destination: "/CV-Rifky-Septiana-Rizki.pdf",
      },
      {
        source: "/CV",
        destination: "/CV-Rifky-Septiana-Rizki.pdf",
      },
    ];
  },
};

export default nextConfig;

