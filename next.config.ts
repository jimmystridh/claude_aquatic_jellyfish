import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/claude_aquatic_jellyfish',
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
