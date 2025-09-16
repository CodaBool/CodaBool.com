import nextMDX from "@next/mdx"

// highlight code blocks
// https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md
// https://github.com/highlightjs/highlight.js/tree/main/src/languages
import rehypeHighlight from 'rehype-highlight'
import python from 'highlight.js/lib/languages/python'
import javascript from 'highlight.js/lib/languages/javascript'
import dockerfile from 'highlight.js/lib/languages/dockerfile'
import bash from 'highlight.js/lib/languages/bash'
import ini from 'highlight.js/lib/languages/ini'
import css from 'highlight.js/lib/languages/css'
import xml from 'highlight.js/lib/languages/xml'
import yaml from 'highlight.js/lib/languages/yaml'
import go from 'highlight.js/lib/languages/go'
import json from 'highlight.js/lib/languages/json'
import nginx from 'highlight.js/lib/languages/nginx'
import diff from 'highlight.js/lib/languages/diff'
import makefile from 'highlight.js/lib/languages/makefile'
import vim from 'highlight.js/lib/languages/vim'
import sql from 'highlight.js/lib/languages/sql'
import rust from 'highlight.js/lib/languages/rust'
import r from 'highlight.js/lib/languages/r'

const languages = {
  dockerfile,
  bash,
  javascript,
  python,
  css,
  xml,
  yaml,
  go,
  json,
  nginx,
  makefile,
  diff,
  vim,
  sql,
  rust,
  r,
  ini, // includes toml
}

const withMDX = nextMDX({
  options: {
    rehypePlugins: [
      [
        rehypeHighlight,
        { languages },
      ]
    ],
  },
});

export default withMDX({
  pageExtensions: ["js", "jsx", "mdx", "md"],
  images: {
    qualities: [25, 50, 75],
  },
  reactStrictMode: false,
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
})
