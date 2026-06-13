import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/alemran_portfolio",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
