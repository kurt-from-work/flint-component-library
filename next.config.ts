import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/flint-component-library" : "",
  assetPrefix: isProd ? "/flint-component-library/" : "",
  images: {
    unoptimized: true,
  },
  devIndicators: {
    position: "bottom-right",
  },
};

export default nextConfig;
