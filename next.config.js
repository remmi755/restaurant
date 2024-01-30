// const dns = require("dns");
//
// dns.setDefaultResultOrder("ipv4first");

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["res.cloudinary.com"],

    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "lh3.googleusercontent.com",
    //     port: "",
    //     pathname: "/**",
    //   },
    // ],
  },
};

module.exports = nextConfig;
