import { formatDate, getPosts } from '@/app/(main)/blog/util'
import BlogNav from '@/components/ui/BlogNav'
import Image from 'next/image'
import Script from 'next/script'
import mdCSS from '@/app/markdown.module.css'
import 'highlight.js/styles/atom-one-dark.css'

const baseUrl = "http://localhost:3000"

export default async function Blog({ params }) {
  const { slug } = await params
  const { default: Post, metadata } = await import(`@/app/(main)/blog/posts/${slug}.mdx`)
  return (
    <section className="px-2 mx-auto sm:container">
      <h1 className="my-2 mt-5 text-2xl font-semibold tracking-tighter title sm:text-7xl">
        {metadata.title}
      </h1>
      <h2 className="mt-2 mb-8 text-2xl text-gray-400">{formatDate(metadata.publishedTime)}</h2>
      <div id="blog-cover">
        <Image
          src={metadata.cover}
          alt="Cover Image"
          className="rounded shadow-full"
          width={1200}
          height={600}
          style={{ width: '100%', height: 'auto' }}
          sizes="100vw"
        />
      </div>
      <article className="container mx-auto max-w-[850px]">
        <div className="flex m-3">
          <div>
            <Image
              src='/codabool.jpg'
              alt='CodaBool'
              className="rounded-full shadow-full"
              width={100}
              height={100}
              quality={75}
            />
          </div>
          <div className="mx-4 mt-8">
            <h2 className="text-3xl font-light text-gray-600">CodaBool</h2>
          </div>
        </div>
        <div className={mdCSS.markdown}>
          <Post />
        </div>
      </article>
      <BlogNav current={Number(metadata.id)} />
      <Script
        src="https://utteranc.es/client.js"
        repo="codabool/CodaBool.com"
        issue-term="pathname"
        crossOrigin="anonymous"
        lazyOnload
        async
      />
    </section>
  )
}

export const dynamicParams = false

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map(post => ({
    slug: String(post.metadata.id),
  }))
}


export async function generateMetadata({ params }) {
  const { slug } = await params
  const { default: Post, metadata } = await import(`@/app/(main)/blog/posts/${slug}.mdx`)
  if (!Post) {
    return
  }

  let {
    title,
    publishedTime,
    description,
    image,
  } = metadata
  let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}
