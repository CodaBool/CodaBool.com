import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Img from 'next/image'

export default function Footer() {
  return (
    <footer className="my-3">
      <Container>
        <Row>
          <Col sm={4} className="mt-3 mx-auto">
              <hr />
              <p className="text-muted text-center">
                DevOps Engineer and Full-stack Dev. I run this as a personal blog and hub for my projects. If you are interested in contacting me my business email is:
              </p>
              <p className="text-center"><a href="mailto:codabool@pm.me">CodaBool@pm.me</a></p>
          </Col>
        </Row>
        <Row>
          <div className="text-muted">
            <hr/>
          </div>
        </Row>
        <Row className="ms-2">
          <div className="mx-auto" style={{maxWidth: '12rem'}}>
            <a href="https://github.com/codabool" className="me-3">
              <Img
                src="/assets/logos/git-logo.jpg"
                alt="github"
                className="rounded-circle"
                width={60}
                height={60}
                />
            </a>
            <a href="https://twitter.com/coda_bool" className="me-3">
              <Img
                src="/assets/logos/twitter-logo.jpg"
                alt="twitter"
                className="rounded-circle"
                width={60}
                height={60}
              />
            </a>
          </div>
        </Row>
      </Container>
    </footer>
  )
}
