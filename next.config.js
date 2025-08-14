/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'geolocation=(self)' },
  { key: 'Content-Security-Policy', value:
    "default-src 'self'; img-src 'self' data: https://*.mapbox.com; style-src 'self' 'unsafe-inline' https://*.mapbox.com; script-src 'self' https://*.mapbox.com 'unsafe-eval'; connect-src 'self' https://api.mapbox.com https://events.mapbox.com " + (process.env.NEXT_PUBLIC_API_WS || '') }
];

const nextConfig = {
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  },
  reactStrictMode: true
};

module.exports = nextConfig;
