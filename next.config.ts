import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Keep Turbopack from treating the parent Desktop folder as the workspace root.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
