import { Link } from 'react-router'

function a({ href, ...props }) {
  if (href.startsWith('/')) {
    return <Link to={href} {...props} />
  }

  if (href.startsWith('#')) {
    return <a href={href} {...props} />
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
}

function p(props) {
  return (
    <p className="font-light">&emsp;{props.children}</p>
  )
}

const Video = props => {
  let { size, pos, full, grid, ...rest } = props

  if (!size) size = 'md'
  let margin = 'none'
  if (pos === 'center') {
    margin = '0 auto 0 auto'
  }
  const style = {
    boxShadow: '0 0 1rem rgba(0, 0, 0, 0.6)',
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
    <video {...rest} style={style} className={`d-block blog-video-${size}`}></video>
  )
}

const Img = ({ src, size, float }) => {
  if (!size) size = 'sm'
  return (
    <div
      className={`img-container blog-img-${size}`}
      style={{ margin: `${float ? 'none' : '2rem auto 2rem auto'}`, maxWidth: `${float && '50rem'}` }}
    >
      <img
        src={src}
        alt='image'
        loading="lazy"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />
    </div>
  )
}

export default {
  a,
  p,
  Video,
  Img,
}
