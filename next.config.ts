import type { NextConfig } from "next";

const GITHUB_REPO = process.env.GITHUB_REPO;

const nextConfig: NextConfig = {
  /* config options here */
  output: GITHUB_REPO ? "export" : "standalone",
  basePath: GITHUB_REPO ? `/${GITHUB_REPO}` : "",
  assetPrefix: "/",
};

export default nextConfig;
