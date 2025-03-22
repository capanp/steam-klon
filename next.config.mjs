/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: 'experimental-edge',
  },
  env: {
    NEXT_PUBLIC_BASE_URL:
      process.env.NODE_ENV === 'production'
        ? 'https://steam-klon.pages.dev/' // Ana domain
        : 'http://localhost:3000',    // Yerel geliştirme ortamı
  },
  images: {
    unoptimized: true, // Görsellerin optimize edilmesi devre dışı bırakılır
  }
};

export default nextConfig;