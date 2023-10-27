import { useState } from 'react'
import Blog from '../../components/Blog'
import getFiles from '../../lib/mdx'
import { Fade } from 'react-awesome-reveal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function blog({ blogs }) {
  const [hero, setHero] = useState(blogs[0])
  const [moreBlogs, setMoreBlogs] = useState(blogs.slice(1))
  
  let i = 0, j, tempArr, chunk = 2, splitBlogs = []
  for (i = 0 , j = moreBlogs.length; i < j; i += chunk) {
    tempArr = moreBlogs.slice(i, i + chunk)
    splitBlogs.push(tempArr)
  }


  return (
    <>
      {hero && <Blog meta={hero.meta} isHero />}
      <hr/>
      {moreBlogs.length > 0 && 
        splitBlogs.map((cols, index) => (
          <Row key={index}>
            {cols.map(blog => (
              <Col sm={12} md={6} key={blog.meta.title}>
                {/* <Fade triggerOnce direction="up"> */}
                  <Blog meta={blog.meta} />
                {/* </Fade> */}
              </Col>
            ))}
          </Row>
        ))
      }
    </>
  )
}

export async function getStaticProps() {
  const blogs = await getFiles()
  blogs.forEach(blog => {blog.data = null})
  return { props: { blogs } }
}