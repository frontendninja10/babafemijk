/** @type {import('next').NextConfig} */
const nextConfig = {};

export const images = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "cdn.sanity.io",
      port: "",
    },
    {
      protocol: "https",
      hostname: "res.cloudinary.com",
      pathname: "/dezx6ryl0/**",
    },
  ],
};

// export default nextConfig;
