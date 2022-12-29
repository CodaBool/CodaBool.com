import Image from 'next/image'
import Pagination from 'react-bootstrap/Pagination'
import Row from 'react-bootstrap/Row'
import { HouseDoorFill } from 'react-bootstrap-icons'
import { useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'
import { format } from 'timeago.js'
import { NUM_OF_BLOGS } from '../constants'
import mdCSS from '../styles/markdown.module.css'
import { Suspense, useRef, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'

// found an alternative way of parsing and using remark with next-mdx-remote
// https://github.com/vercel/next.js/blob/canary/examples/with-mdx-remote/utils/mdxUtils.js

const Img = ({ src, size, float }) => {
  if (!size) size = 'sm'
  return (
    <div 
      className={`img-container blog-img-${size}`} 
      style={{margin: `${float ? 'none' : '2rem auto 2rem auto'}`, maxWidth: `${float && '50rem'}`}}
    >
      <style global jsx>{`
        .blog img {
          object-fit: contain;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
        .img-container {
          width: 100%;
          max-height: 50rem;
          max-width: 100rem;
          position: relative;
        }
        .blog-img-lg {
          height: 40rem;
        }
        .blog-img-md {
          height: 30rem;
        }
        .blog-img-sm {
          width: 50%;
          height: 20rem;
        }
        @media (max-width: 1000px) {
          .blog-img-lg {
            height: 30rem;
          }
          .blog-img-md {
            height: 20rem;
          }
          .blog-img-sm {
            width: 100%;
            height: 10rem;
          }
        }
        @media (max-width: 500px) {
          .blog-img-lg {
            height: 20rem;
          }
          .blog-img-md {
            height: 15rem;
          }
          .blog-img-sm {
            width: 100%;
            height: 10rem;
          }
        }
      `}</style>
      <Image src={src} sizes="60vw" fill alt='image' quality={50} />
    </div>
  )
}
const Video = props => {
  let {size, pos, full, grid, volume} = props
  const ref = useRef()
  useEffect(() => {
    if (volume) {
      ref.current.volume = volume
    }
  }, [])

  if (!size) size = 'md'
  let margin = 'none'
  if (pos === 'center') {
    margin = '0 auto 0 auto'
  }
  const style = {
    maxWidth: '80rem',
    boxShadow: '0 0 1rem rgba(128, 128, 128, 0.2)',
    borderRadius: '1rem',
    margin
  }
  if (full) {
    style.width = '100%'
  }
  if (grid) {
    // style.width = '40%'
    style.height = '100%'
    style.margin = '1rem'
  }
  
  // style.width = `${props.grid ? '40%' : '75%;'}`
  return (
    <>
      <style global jsx>{`
        .blog-video-sm {
          width: 40%;
        }
        .blog-video-md {
          width: 75%;
        }
        .blog-video-lg {
          width: 100%;
        }
        .video-grid {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
        }
        .img-grid {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
        }
        @media (max-width: 900px) {
          .blog-video-md, .blog-video-lg {
            width: 100%;
          }
        }
        @media (max-width: 600px) {
          .blog-video-sm {
            width: 100%;
          }
        }
      `}</style>
      <video {...props} ref={ref} style={style} className={`d-block blog-video-${size}`}></video>
    </>
  )
}
const components = {
  Img: Img,
  Video: Video,
  p: pushingP
}

function pushingP(props) {
  return (
    <p>&emsp;{props.children}</p>
  )
}


const BlogNav = ({ current, total }) => {
  const router = useRouter()
  return (
    <Row>
      <Pagination className="mx-auto my-5" size="lg" style={{width: '13rem'}}>
        {current > 1 && 
          <Pagination.First 
            onClick={() => {
              window.scrollTo(0, 0)
              router.push(`/blog/${current - 1}`)
            }}
          />}
        <Pagination.Item 
          onClick={() => {
            window.scrollTo(0, 0)
            router.push('/blog')
          }}
        >
          <HouseDoorFill size={20} />
        </Pagination.Item>
        {current < total &&
          <Pagination.Last 
            onClick={() => {
              window.scrollTo(0, 0)
              router.push(`/blog/${Number(current) + 1}`)
            }}
          />
        }
      </Pagination>
    </Row>
  )
}

export default function Layout({ children, meta }) {
  return (
    <Suspense fallback={<Spinner />}>
      <MDXProvider components={components}>
        <h1 className="display-3 mt-3">{meta.title}</h1>
        <h4 className="text-muted my-2">{format(meta.created)}</h4>
        <style global jsx>{`
          #blog-cover div {
            border-radius: 1rem;
            box-shadow: 0 0 1rem rgba(128, 128, 128, 0.5);
          }
          #author-img div {
            border-radius: 50%;
            box-shadow: 0 0 1rem rgba(128, 128, 128, 0.5);
          }
        `}</style>
        <div id="blog-cover">
          <Image
            src={meta.cover}
            alt="Cover Image"
            width={1200}
            height={600}
            style={{ width: '100%', height: 'auto' }}
            sizes="100vw"
          />
        </div>
        <div className="d-flex mt-3 ms-4">
          <div id="author-img">
            <Image
              src='/assets/authorImg/codabool.jpg'
              alt='CodaBool'
              className="rounded-circle"
              width={100}
              height={100}
              quality={80}
            />
          </div>
          <div className="ms-3 mt-4">
            <h2 style={{fontWeight: '300'}}>CodaBool</h2>
          </div>
        </div>
        <div className="blog">
          <div className={mdCSS.markdown}>
            {children}
          </div>
        </div>
        <BlogNav total={NUM_OF_BLOGS} current={meta.number} />
      </MDXProvider>
    </Suspense>
  )
}