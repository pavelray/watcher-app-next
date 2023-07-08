const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.themoviedb.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.2embed.cc",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
