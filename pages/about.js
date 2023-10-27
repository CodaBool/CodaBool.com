import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Fade } from "react-awesome-reveal"
import { useRef, useState } from 'react'
import Img from 'next/image'
import axios from 'axios'

let count = 0

export default function About() {
  const [show, setShow] = useState(false);
  const password = useRef(null)

  function adminCheck() {
    count++
    if (count > 5) {
      setShow(true)
      setTimeout(() => {
        if (password) {
          if (password.current) {
            password.current.value = ''
            password.current.focus()
          }
        }
      }, 500)
    }
  }
  function login() {
    axios.post('/api/login', { password: password.current.value })
      .then(res => alert('Successfully logged in!'))
      .catch(err => console.log(err.response.data))
  }

  function checkEnter(e) {
    if (e.keyCode === 13) {
      login()
      setShow(false)
    }
  }

  return (
    <div className="my-5">
      <style global jsx>{`
        @keyframes sway {
          0% { transform: rotate(0deg); } 
          50% { transform: rotate(10deg); } 
          100% { transform: rotate(0deg); } 
        }
        .group-img-container > div {
          border-radius: 2rem;
          box-shadow: 0 0 .3rem grey;
        }
      `}</style>
      <Row>
        <Col lg={6} className="my-4">
          <div className="rounded-circle mx-auto about-img" style={{maxWidth: 300, maxHeight: 300, boxShadow: '0 0 1rem grey'}}>
            <Img className="rounded-circle" alt="me" sizes="100vw" src="/assets/authorImg/codabool-lg.jpg" width={300} height={300} priority style={{ width: '100%', height: 'auto' }} placeholder="blur" blurDataURL="/assets/authorImg/codabool-lg.jpg" />
          </div>
        </Col>
        <Col lg={6} className="mb-4">
          {/* <Fade triggerOnce direction="up"> */}
            <h1 className="display-4 m-2">Hello, <div className="d-inline-block" style={{animation: 'sway 5s infinite'}}>👋</div></h1>
          {/* </Fade> */}
          {/* <Fade triggerOnce delay={500}> */}
            <p className="m-1" style={{fontSize: '1.3rem'}}>&emsp;I am a DevOps engineer, but I also do full-stack development outside of work. I mainly work with AWS and for my full stack projects I enjoy Next.js  which uses serverless technology for its backend. I like to use PostgreSQL + Prisma for my database solutions. Please feel free to look around at my projects, blog or reach out to me. Thanks for visiting. </p>
          {/* </Fade> */}
        </Col>
      </Row>
      <br/>
      <Row>
        <Col lg={6} className="mb-4">
          {/* <Fade triggerOnce direction="up" delay={1000}> */}
            <h1 className="display-4 m-2">About me. 💻</h1>
          {/* </Fade> */}
          {/* <Fade triggerOnce delay={1300}> */}
            <p className="m-1" style={{fontSize: '1.3rem'}}>&emsp;I graduated December of 2020. My Bachelor's is in Computing Technology and Software Development. I am pursuing my Master's degree in Computer Science at Georgia Tech Online. I put all my projects as public open source on github under <a href="https://github.com/CodaBool?tab=repositories" style={{textDecoration: 'none', color: 'black'}}>CodaBool</a>, so take a look. </p>
          {/* </Fade> */}
        </Col>
        <Col lg={6} className="group-img-container">
          <Img
            src="/assets/images/gamejam-group.jpg"
            alt="group"
            className="rounded shadow"
            sizes="100vw"
            width={540}
            height={396}
            style={{ width: '100%', height: 'auto' }}
            priority
            placeholder="blur"
            blurDataURL="/assets/images/gamejam-group.jpg"
          />
        </Col>
      </Row>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control placeholder="password" onKeyDown={checkEnter} type="password" ref={password} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={login}>Login</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}