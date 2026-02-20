import type { NextConfig } from "next";

const nextConfig: NextConfig & { eslint?: any } = {

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
