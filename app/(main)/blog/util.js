import fs from 'fs'
import path from 'path'

export async function getPosts() {
  const mdxFiles = fs.readdirSync(path.join(process.cwd(), 'app', '(main)', 'blog', 'posts'))
  const posts = mdxFiles.map(async f => {
    return await import(`@/app/(main)/blog/posts/${f}`)
  })
  const postsData = await Promise.all(posts)
  const results = postsData.map(post => ({
    default: post.default,
    metadata: post.metadata
  }))
  return results.sort((a, b) => {
    if (
      new Date(a.metadata.publishedTime) > new Date(b.metadata.publishedTime)
    ) {
      return -1
    }
    return 1
  })
}

export function formatDate(date, includeRelative = false) {
  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
