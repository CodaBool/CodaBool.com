import RSS from 'rss'
import { getPosts } from '../app/(main)/blog/util.js'
import fs from 'fs'
// example
// https://github.com/ismaelrumzan/vercel-22078/blob/master/scripts/generateRSS.js

async function mdx() {

  console.log(posts)

  // should return in newest blogs first
  blogs.sort((a, b) => {
    return Number(Date.parse(b.meta.created)) - Number(Date.parse(a.meta.created))
  })
  return blogs
}

const feed = new RSS({
  title: "test",
  feed_url: "https://codabool.com/rss",
  image_url: "https://raw.githubusercontent.com/CodaBool/CodaBool.com/main/app/icon.jpg",
  // categories: [""],
  // pubDate
})

const posts = getPosts()
posts.map(blog => {
  console.log("adding", blog.metadata.id, blog.metadata.title)
  feed.item({
    title: blog.metadata.title,
    description: blog.metadata.excerpt,
    url: `https://codabool.com/blog/${blog.metadata.id}`,
    guid: String(blog.metadata.id),
    author: "CodaBool",
    categories: blog.metadata.tags?.split(", ") || [],
    date: blog.metadata.publishedTime,
  })
})

const xml = feed.xml({ indent: true })
console.log("writing to public/rss.xml")
fs.writeFileSync('./public/rss.xml', xml, { encoding: 'utf-8' });
