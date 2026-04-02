import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";
const githubPagesBasePath =
  isGitHubPagesBuild && repositoryName ? `/${repositoryName}` : undefined;

const nextConfig: NextConfig = {
  assetPrefix: githubPagesBasePath,
  basePath: githubPagesBasePath,
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  transpilePackages: ["@repo/types"],
};

export default nextConfig;
