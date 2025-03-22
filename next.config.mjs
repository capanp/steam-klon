/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_URL:
      process.env.NODE_ENV === 'production'
        ? 'https://www.anadomain.com' // Üretim ortamı
        : 'http://localhost:3000',    // Yerel geliştirme ortamı
  },
  images: {
    unoptimized: true, // Görsellerin optimize edilmesi devre dışı bırakılır
  },
};

export default nextConfig;