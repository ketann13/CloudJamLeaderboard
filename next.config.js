/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // For Docker deployment
  experimental: {
    serverActions: true,
  },
  // On platforms like Netlify without the Next Image optimizer plugin,
  // serve images directly from /public to avoid 404s on /_next/image.
  images: {
    unoptimized: true,
  },
  env: {
    GCP_PROJECT_ID: process.env.GCP_PROJECT_ID,
    GCS_BUCKET_NAME: process.env.GCS_BUCKET_NAME,
    CSV_FILE_NAME: process.env.CSV_FILE_NAME,
  },
}

module.exports = nextConfig