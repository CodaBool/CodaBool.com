import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'
import { useRouter } from 'next/router'

const style = {
  cursor: 'pointer',
  fontSize: '2rem',
  lineHeight: '1',
  margin: '0 2rem 0 2rem'
}

export default function Navigation() {
  const router = useRouter()
  return (
    <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
      <Navbar.Brand onClick={() => router.push('/blog')} style={style}>CodaBool</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" data-toggle="collapse" data-target="#responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav className="ms-auto">
          <Link href="/blog" passHref legacyBehavior>
            <Nav.Link className={`${router.asPath.includes('/blog') && 'active'}`} to="/blog" style={style} eventKey="1">Blog</Nav.Link>
          </Link>
          <Link href="/projects" passHref legacyBehavior>
            <Nav.Link className={`${router.asPath.includes('/projects') && 'active'}`} to="/projects" style={style} eventKey="2">Projects</Nav.Link>
          </Link>
          <Link href="/about" passHref legacyBehavior>
            <Nav.Link className={`${router.asPath.includes('/about') && 'active'}`} to="/about" style={style} eventKey="3">About</Nav.Link>
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <Nav.Link className={`${router.asPath.includes('/contact') && 'active'}`} to="/contact" style={style} eventKey="4">Contact</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}