import fs from 'fs'
import path from 'path'

export default async function mdx() {
  const root = process.cwd()
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