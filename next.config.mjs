/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // <--- CRITICAL: Makes the app lightweight for Cloud Run
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Allow Sanity images
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com', // Allow YouTube thumbnails
      }
    ],
  },
};

export default nextConfig;