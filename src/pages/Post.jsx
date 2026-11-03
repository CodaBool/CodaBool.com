import { Suspense } from 'react'
import { useParams } from 'react-router'
import { MDXProvider } from '@mdx-js/react'
import { formatDate, getPost } from '@/lib/posts'
import useTitle from '@/lib/useTitle'
import BlogNav from '@/components/BlogNav'
import Comments from '@/components/Comments'
import components from '@/components/mdx-components'
import NotFound from '@/pages/NotFound'
import mdCSS from '@/styles/markdown.module.css'

export default function PostPage() {
  const { slug } = useParams()
  const post = getPost(slug)
  useTitle(post?.metadata.title, post?.metadata.description)

  if (!post) return <NotFound />
  const { metadata, Post } = post

  return (
    <section className="px-2 mx-auto sm:container">
      <h1 className="my-2 mt-5 text-2xl font-semibold tracking-tighter title sm:text-7xl">
        {metadata.title}
      </h1>
      <h2 className="mt-2 mb-8 text-2xl text-gray-400">{formatDate(metadata.publishedTime)}</h2>
      <div id="blog-cover">
        <img
          src={metadata.cover}
          alt="Cover Image"
          className="rounded shadow-full"
          width={1200}
          height={600}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <article className="container mx-auto max-w-[850px]">
        <div className="flex m-3">
          <div>
            <img
              src='/codabool.jpg'
              alt='CodaBool'
              className="rounded-full shadow-full"
              width={100}
              height={100}
            />
          </div>
          <div className="mx-4 mt-8">
            <h2 className="text-3xl font-light text-gray-400">CodaBool</h2>
          </div>
        </div>
        <div className={mdCSS.markdown}>
          <MDXProvider components={components}>
            <Suspense fallback={<p className="text-xl text-gray-400">Loading...</p>}>
              <Post />
            </Suspense>
          </MDXProvider>
        </div>
      </article>
      <BlogNav current={Number(metadata.id)} />
      <Comments />
    </section>
  )
}
