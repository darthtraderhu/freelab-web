// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Figyelmen kívül hagyja az ESLint hibákat buildeléskor
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Figyelmen kívül hagyja a TypeScript típus-hibákat buildeléskor
    ignoreBuildErrors: true,
  },
};

export default nextConfig;