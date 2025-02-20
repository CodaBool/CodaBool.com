import { notFound } from 'next/navigation'
import MDX from '@/components/mdx'
import { formatDate, getBlogPosts } from '@/app/(main)/blog/util'
import BlogNav from '@/components/ui/BlogNav'
import Image from 'next/image'
import Script from 'next/script'

const baseUrl = "http://localhost:3000"

export async function generateStaticParams() {
  return getBlogPosts().map(post => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  let post = getBlogPosts().find((post) => post.slug === slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedTime,
    description,
    image,
  } = post.metadata
  let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
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

export default async function Blog({ params }) {
  const { slug } = await params

  const post = getBlogPosts().find(post => post.slug === slug)

  if (!post) notFound()

  return (
    <section className="px-2 mx-auto sm:container">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedTime,
            dateModified: post.metadata.publishedTime,
            description: post.metadata.description,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className="my-2 mt-5 text-2xl font-semibold tracking-tighter title sm:text-7xl">
        {post.metadata.title}
      </h1>
      <h2 className="mt-2 mb-8 text-2xl text-gray-400">{formatDate(post.metadata.publishedTime)}</h2>
      <div id="blog-cover">
        <Image
          src={post.metadata.cover}
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
              quality={80}
            />
          </div>
          <div className="mx-4 mt-8">
            <h2 className="text-3xl font-light text-gray-600">CodaBool</h2>
          </div>
        </div>
        <MDX source={post.content} />
      </article>
      <BlogNav current={Number(post.metadata.id)} />
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
