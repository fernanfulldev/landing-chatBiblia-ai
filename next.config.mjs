/** @type {import('next').NextConfig} */
const nextConfig = {
  // ⚠️ Elimina o comenta esta línea
  // output: 'export',

  images: {
    unoptimized: true, // Esto está bien si sigues sin usar `next/image` optimizado
  },
};

export default nextConfig;
