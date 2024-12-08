import mdCSS from '@/app/markdown.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import React from 'react'

// highlight code blocks
// https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md
// https://github.com/highlightjs/highlight.js/tree/main/src/languages
import rehypeHighlight from 'rehype-highlight'
import python from 'highlight.js/lib/languages/python'
import javascript from 'highlight.js/lib/languages/javascript'
import dockerfile from 'highlight.js/lib/languages/dockerfile'
import bash from 'highlight.js/lib/languages/bash'
import ini from 'highlight.js/lib/languages/ini'
import css from 'highlight.js/lib/languages/css'
import xml from 'highlight.js/lib/languages/xml'
import yaml from 'highlight.js/lib/languages/yaml'
import go from 'highlight.js/lib/languages/go'
import json from 'highlight.js/lib/languages/json'
import nginx from 'highlight.js/lib/languages/nginx'
import 'highlight.js/styles/atom-one-dark.css'

const languages = {
  dockerfile,
  bash,
  javascript,
  python,
  css,
  xml,
  yaml,
  go,
  json,
  nginx,
  ini, // includes toml
}

function a(props) {
  let href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function heading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }
  Heading.displayName = `Heading${level}`
  return Heading
}

function p(props) {
  return (
    <p className="font-light">&emsp;{props.children}</p>
  )
}

const Video = props => {
  let { size, pos, full, grid } = props

  if (!size) size = 'md'
  let margin = 'none'
  if (pos === 'center') {
    margin = '0 auto 0 auto'
  }
  const style = {
    // maxWidth: '80rem',
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
      {/* <style global jsx>{`
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
      `}</style> */}
      <video {...props} style={style} className={`d-block blog-video-${size}`}></video>
    </>
  )
}

const Img = ({ src, size, float }) => {
  if (!size) size = 'sm'
  return (
    <div
      className={`img-container blog-img-${size}`}
      style={{ margin: `${float ? 'none' : '2rem auto 2rem auto'}`, maxWidth: `${float && '50rem'}` }}
    >
      <Image src={src} sizes="60vw" fill alt='image' quality={50} />
    </div>
  )
}

export default function CustomMDX(props) {
  return (
    <div className={mdCSS.markdown}>
      <MDXRemote
        {...props}
        components={{
          h1: heading(1),
          h2: heading(2),
          h3: heading(3),
          h4: heading(4),
          h5: heading(5),
          h6: heading(6),
          a,
          p,
          Video,
          Img,
        }}
        options={{
          mdxOptions: {
            rehypePlugins: [
              [
                rehypeHighlight,
                { languages },
              ]
            ],
          },
        }}
      />
    </div>
  )
}
