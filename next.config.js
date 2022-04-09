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
  }
})