export default {
  pageExtensions: ["js", "jsx", "mdx"],
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/index.html'
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/rss.xml',
        headers: [
          {
            key: 'content-type',
            value: 'text/xml',
          },
        ],
      },
    ]
  },
}
