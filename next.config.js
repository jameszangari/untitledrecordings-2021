/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.scdn.co"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.song.link/v1-alpha.1/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
