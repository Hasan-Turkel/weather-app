/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    //? farklı domainlerden alınan image'ler için ilgili domainler config dosyasında belirtilmelidir.
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.weatherapi.com",
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  