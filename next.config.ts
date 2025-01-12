const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? "/UI-bulider/" : "",
  basePath: isProd ? "/UI-builder" : "",
  output: "export",
};

export default nextConfig;
