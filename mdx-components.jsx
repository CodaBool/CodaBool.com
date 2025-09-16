
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
// highlight code blocks
// https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md
// https://github.com/highlightjs/highlight.js/tree/main/src/languages


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
    boxShadow: '0 0 1rem rgba(128, 128, 128, 0.2)',
    borderRadius: '1rem',
    margin
  }
  if (full) {
    style.width = '100%'
  }
  if (grid) {
    style.height = '100%'
    style.margin = '1rem'
  }

  return (
    <video {...props} style={style} className={`d-block blog-video-${size}`}></video>
  )
}

const Img = ({ src, size, float }) => {
  if (!size) size = 'sm'
  return (
    <div
      className={`img-container blog-img-${size}`}
      style={{ margin: `${float ? 'none' : '2rem auto 2rem auto'}`, maxWidth: `${float && '50rem'}` }}
    >
      <Image src={src} sizes="60vw" fill alt='image' quality={75} />
    </div>
  )
}

const components = {
  a,
  p,
  Video,
  Img,
}

export function useMDXComponents() {
  return components
}
