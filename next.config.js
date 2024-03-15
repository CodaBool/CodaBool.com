const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require("remark-prism")],
    providerImportSource: "@mdx-js/react",
  },
})
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/landing/index.html'
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
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)?', // Matches all pages
  //       headers: [
  //         {
  //           key: 'Content-Security-Policy',
  //           value: "frame-src https://www.youtube.com; frame-ancestors 'self' https://www.youtube.com",
  //         }
  //       ]
  //     }
  //   ]
  // }
})