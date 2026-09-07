import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
  async redirects() {
    return [
      {
        source: '/ressources/ia-commerce-intelligent',
        destination: '/ressources/assistant-achat-ia-ecommerce',
        permanent: true,
      },
      {
        source: '/ressources/quand-le-commerce-devient-intelligent',
        destination: '/ressources/assistant-achat-ia-ecommerce',
        permanent: true,
      },
      {
        // « Aide au choix » disait la même chose que la recherche : la page a
        // été retirée plutôt que maintenue en double. L'URL était indexable,
        // donc elle redirige vers l'usage qui l'absorbe.
        source: '/produits/aide-au-choix',
        destination: '/moteur-recherche-conversationnel-ecommerce',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
