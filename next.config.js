/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  
  // Target modern browsers - no legacy polyfills
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Serve images via custom loader (CDN: teenpattispingame.com.pk)
  images: {
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.ts',
  },

  async redirects() {
    return [
      { source: '/about', destination: '/about-us', permanent: true },
      { source: '/privacy', destination: '/privacy-policy', permanent: true },
      { source: '/download-3-patti-world', destination: '/download-teen-patti-spin', permanent: true },
      { source: '/deposit-money-in-3-patti-world', destination: '/deposit-money-in-teen-patti-spin', permanent: true },
      { source: '/withdraw-money-from-3-patti-world', destination: '/withdraw-money-from-teen-patti-spin', permanent: true },
      { source: '/register-3-patti-world-account', destination: '/register-teen-patti-spin-account', permanent: true },
      { source: '/login-3-patti-world', destination: '/login-teen-patti-spin', permanent: true },
      { source: '/3-patti-world-for-pc', destination: '/teen-patti-spin-for-pc', permanent: true },
      { source: '/download-3rr-game', destination: '/download-teen-patti-spin', permanent: true },
      { source: '/deposit-money-in-3rr-game', destination: '/deposit-money-in-teen-patti-spin', permanent: true },
      { source: '/withdraw-money-from-3rr-game', destination: '/withdraw-money-from-teen-patti-spin', permanent: true },
      { source: '/register-3rr-game-account', destination: '/register-teen-patti-spin-account', permanent: true },
      { source: '/login-3rr-game', destination: '/login-teen-patti-spin', permanent: true },
      { source: '/3rr-game-for-pc', destination: '/teen-patti-spin-for-pc', permanent: true },
      { source: '/download-3-patti-room', destination: '/download-teen-patti-spin', permanent: true },
      { source: '/deposit-money-in-3-patti-room', destination: '/deposit-money-in-teen-patti-spin', permanent: true },
      { source: '/withdraw-money-from-3-patti-room', destination: '/withdraw-money-from-teen-patti-spin', permanent: true },
      { source: '/register-3-patti-room-account', destination: '/register-teen-patti-spin-account', permanent: true },
      { source: '/login-3-patti-room', destination: '/login-teen-patti-spin', permanent: true },
      { source: '/3-patti-room-for-pc', destination: '/teen-patti-spin-for-pc', permanent: true },
      { source: '/download-card-rummy', destination: '/download-teen-patti-spin', permanent: true },
      { source: '/deposit-money-in-card-rummy', destination: '/deposit-money-in-teen-patti-spin', permanent: true },
      { source: '/withdraw-money-from-card-rummy', destination: '/withdraw-money-from-teen-patti-spin', permanent: true },
      { source: '/card-rummy-for-pc', destination: '/teen-patti-spin-for-pc', permanent: true },
      { source: '/blog/create-3-patti-world-account-and-login', destination: '/blog/create-teen-patti-spin-account-and-login', permanent: true },
      { source: '/blog/3-patti-world-bonuses-vip-guide', destination: '/blog/teen-patti-spin-bonuses-vip-guide', permanent: true },
      { source: '/blog/is-3-patti-world-safe-pakistan', destination: '/blog/is-teen-patti-spin-safe-pakistan', permanent: true },
      { source: '/blog/3-patti-world-tips-to-win', destination: '/blog/teen-patti-spin-tips-to-win', permanent: true },
      { source: '/\\$', destination: '/', permanent: true },
      { source: '/\\&', destination: '/', permanent: true },
    ];
  },

  // Optimize static file serving
  async rewrites() {
    return [
      {
        source: '/.well-known/:path*',
        destination: '/public/.well-known/:path*',
      },
    ];
  },

  // Optimize headers
  async headers() {
    return [
      // HTML pages: always revalidate so Googlebot gets fresh content
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https: https://teenpattispingame.com.pk",
              "font-src 'self' data:",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
      // Immutable cache only for fingerprinted static assets
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Public images: long cache but allow revalidation
      {
        source: '/:path*.webp',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/css/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'text/css',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Handle webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Enable proper static file handling
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // Optimize for development
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }

    // Target modern browsers - don't transpile modern JavaScript features
    if (!isServer) {
      config.target = ['web', 'es2022'];
      
      // Disable Next.js polyfills for modern browsers (Lighthouse: Legacy JavaScript)
      // Saves ~11KB - polyfills for Array.at, Object.hasOwn, etc. aren't needed for Chrome 90+, Safari 14+, etc.
      config.resolve.alias = {
        ...config.resolve.alias,
        '../build/polyfills/polyfill-module': false,
        'next/dist/build/polyfills/polyfill-module': false,
      };
    }

    return config;
  },

  // Enable experimental features
  experimental: {
    optimizeCss: true, // Critters inlines critical CSS
    inlineCss: true, // Inline CSS in HTML to eliminate render-blocking (improves FCP/LCP)
    scrollRestoration: true,
    optimizePackageImports: ['react-icons'],
  },
  
  // Modern module/nomodule pattern
  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}',
    },
  },
}

module.exports = nextConfig
