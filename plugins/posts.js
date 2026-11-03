import fs from 'node:fs'
import path from 'node:path'
import RSS from 'rss'

const POSTS_DIR = path.resolve('content/posts')
const VIRTUAL_ID = 'virtual:posts'
const RESOLVED_ID = '\0' + VIRTUAL_ID
const SITE = 'https://codabool.com'

// reads `export const metadata = {...}` from each post without compiling the MDX
// this keeps post bodies out of the main bundle, they get lazy loaded per page
export function readPosts() {
  return fs.readdirSync(POSTS_DIR)
    .filter(f => f.endsWith('.mdx'))
    .map(f => {
      const src = fs.readFileSync(path.join(POSTS_DIR, f), 'utf-8')
      const match = src.match(/export const metadata = (\{[\s\S]*?\n\})/)
      if (!match) throw new Error(`${f} is missing "export const metadata"`)
      return new Function(`return ${match[1]}`)()
    })
    .sort((a, b) => new Date(b.publishedTime) - new Date(a.publishedTime))
}

function rss() {
  // example
  // https://github.com/ismaelrumzan/vercel-22078/blob/master/scripts/generateRSS.js
  const feed = new RSS({
    title: 'CodaBool',
    feed_url: 'https://codabool.com/rss.xml',
    site_url: 'https://codabool.com',
    image_url: 'https://codabool.com/icon.jpg',
  })
  for (const post of readPosts()) {
    feed.item({
      title: post.title,
      description: post.description,
      url: `https://codabool.com/blog/${post.id}`,
      guid: String(post.id),
      author: 'CodaBool',
      categories: post.tags?.split(', ') || [],
      date: post.publishedTime,
    })
  }
  return feed.xml({ indent: true })
}

const escape = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// copies the built index.html with a post's title, description, and og tags
// so crawlers and link previews see them without running js
function postHtml(html, post) {
  const title = escape(`${post.title} | CodaBool`)
  const description = escape(post.description)
  const url = `${SITE}/blog/${post.id}`
  const image = `${SITE}${post.cover}`
  const tags = [
    ['og:type', 'article'],
    ['og:site_name', 'CodaBool'],
    ['og:title', title],
    ['og:description', description],
    ['og:url', url],
    ['og:image', image],
    ['article:published_time', post.publishedTime],
  ].map(([k, v]) => `<meta property="${k}" content="${v}" />`)
  tags.push(
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<link rel="canonical" href="${url}" />`,
  )
  return html
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${description}`)
    .replace('</head>', `  ${tags.join('\n    ')}\n  </head>`)
}

export default function posts() {
  return {
    name: 'codabool:posts',
    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID
    },
    load(id) {
      if (id === RESOLVED_ID) {
        return `export default ${JSON.stringify(readPosts())}`
      }
    },
    // metadata edits in dev need the manifest rebuilt too
    handleHotUpdate({ file, server, modules }) {
      if (!file.startsWith(POSTS_DIR)) return
      const mod = server.moduleGraph.getModuleById(RESOLVED_ID)
      if (!mod) return
      server.moduleGraph.invalidateModule(mod)
      return [...modules, mod]
    },
    configureServer(server) {
      server.middlewares.use('/rss.xml', (req, res) => {
        res.setHeader('content-type', 'text/xml')
        res.end(rss())
      })
    },
    generateBundle() {
      if (this.environment.name !== 'client') return
      this.emitFile({ type: 'asset', fileName: 'rss.xml', source: rss() })
    },
    // blog/<id>.html is served at /blog/<id> by workers assets
    writeBundle(options, bundle) {
      if (this.environment.name !== 'client') return
      const html = bundle['index.html'].source
      fs.mkdirSync(path.join(options.dir, 'blog'), { recursive: true })
      for (const post of readPosts()) {
        fs.writeFileSync(path.join(options.dir, 'blog', `${post.id}.html`), postHtml(html, post))
      }
    },
  }
}
