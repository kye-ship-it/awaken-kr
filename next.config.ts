import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://awaken-korea.vercel.app/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
