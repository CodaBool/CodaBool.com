import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Fade } from "react-awesome-reveal"

export default function Contact() {
  return (
    <Row className="mt-5 mb-5">
      <Col lg={6} className="mb-5">
        <h1 className="display-1">Email. ✉️</h1>
        {/* <Fade triggerOnce direction="up"> */}
          <h2>Business email</h2>
          <h2><a href="mailto:contact@codabool.com">contact@codabool.com</a></h2>
        {/* </Fade> */}
      </Col>
      <Col lg={6}>
        <h1 className="display-2">Connect. 🐦</h1>
        {/* <Fade triggerOnce direction="up" delay={500}> */}
          <h2>You can follow me on Twitter</h2>
          <h2><a href="https://twitter.com/coda_bool">@Coda_Bool</a></h2>
        {/* </Fade>  */}
      </Col>
    </Row>
  )
}