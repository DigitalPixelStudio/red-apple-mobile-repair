import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Red Apple Mobile Repair Store',
    short_name: 'Red Apple',
    description: 'Expert iPhone, MacBook & Smartphone Repair Services in Bangalore',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ff2d55',
    scope: '/',
    orientation: 'portrait',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
