/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — deployable to Vercel/Netlify/any static host at $0.
  output: "export",
  // Required for static export: Next's image optimizer needs a server.
  images: { unoptimized: true },
  // Emit `about/index.html` instead of `about.html` so clean URLs work offline.
  trailingSlash: true,
};

export default nextConfig;
