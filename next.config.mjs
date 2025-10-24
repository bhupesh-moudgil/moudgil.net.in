/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export static HTML for GitHub Pages
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
