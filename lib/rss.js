const RSS = require("rss")
const fs = require("node:fs")
const path = require("path")

// uses rss package
// https://www.npmjs.com/package/rss

// example 
// https://github.com/ismaelrumzan/vercel-22078/blob/master/scripts/generateRSS.js

async function mdx() {
  const root = "./"
  const files = await fs.readdirSync(path.join(root, 'pages/blog'))
  const mdxFiles = files.filter(name => !name.includes('index.js'))
  const blogs = mdxFiles.map(file => {
    const data = fs.readFileSync(path.join(`${root}/pages/blog/${file}`), 'utf8')
    const firstCut = String(data).split('const meta = ')[1]
    const secondCut = firstCut.split('}')[0] + '}'
    const meta = JSON.parse(secondCut)
    meta.name = file
    return {data, meta}
  })

  // should return in newest blogs first
  blogs.sort((a, b) => {
    return Number(Date.parse(b.meta.created)) - Number(Date.parse(a.meta.created))
  })
  return blogs
}

const feed = new RSS({
  title: "test",
  feed_url: "https://codabool.com/rss",  
})

mdx().then(blogs => {
  for (const blog of blogs) {
    // console.log(blog.meta)

    console.log("adding", blog.meta.title, "@", blog.meta.number)
    feed.item({
      title: blog.meta.title,
      description: blog.meta.excerpt,
      url: `https://codabool.com/blog/${blog.meta.number}`,
      author: "CodaBool",
      categories: blog.meta.tags?.split(" ") || [],
      date: blog.meta.created,
    })
  }

  const xml = feed.xml({indent: true})

  fs.writeFileSync('./public/rss.xml', xml, { encoding: 'utf-8' });
})
