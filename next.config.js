/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'theryanvogel.com' }],
        destination: 'https://ryan.ceo/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.theryanvogel.com' }],
        destination: 'https://ryan.ceo/:path*',
        permanent: true,
      },
      {
        source: '/tab',
        destination: 'https://gist.githubusercontent.com/R44VC0RP/380055cc28ddead2f18396a35743115a/raw/556ad650af60776ee3702121dff715fc6169bf2a/cursor-ptt.sh',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
