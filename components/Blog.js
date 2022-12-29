import { format } from 'timeago.js'
import { useRouter } from 'next/router'
import Img from 'next/image'

export default function Blog({ meta }) {
  const router = useRouter()

  return (
    <div 
      onClick={() => {
        window.scrollTo(0, 0)
        router.push(`/blog/${meta.name.split('.mdx')[0]}`)
      }}
      style={{ cursor: 'pointer' }}
      className="my-4 blog-card"
    >
      <style global jsx>{`
        .blog-card div {
          overflow: hidden;
        }
        .blog-card:hover img {
          transform: scale(1.02);
        }
        .blog-card-img {
          transition: transform .3s ease;
        }
        .blog-card:hover {
          background-color: rgba(123, 129, 209, 0.05);
          box-shadow: 0 0 3rem 1rem rgba(123, 129, 209, 0.1);
        }
        .blog-card {
          background-color: rgba(211, 211, 211, 0.08);
          box-shadow: 0 0 2rem .5rem rgba(211, 211, 211, 0.05);
        }
        .blog-card h3 {
          text-decoration-color: rgba(0, 0, 0, 0);
          transition: text-decoration-color .3s ease;
        }
        .blog-card:hover h3 {
          text-decoration: underline;
          text-decoration-color: rgba(0, 0, 0, 0.2);
        }
      `}</style>
      <Img
        src={meta.cover}
        alt="Cover"
        className="blog-card-img"
        sizes="100vw"
        width={588}
        height={294}
        style={{ width: '100%', height: 'auto' }}
        quality={50}
      />
      <h3 className="mx-2 mt-2">{meta.title}</h3>
      <p className="text-muted ps-2">{format(meta.created)}</p>
      <p className="p-1">&emsp;{meta.excerpt}</p>
    </div>
  )
}
