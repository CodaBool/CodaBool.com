import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navigation() {
  const router = useRouter()
  const style = {
    cursor: 'pointer',
    fontSize: '2rem',
    lineHeight: '1',
    margin: '0 2rem 0 2rem'
  }
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand onClick={() => router.push('/blog')} style={style}>CodaBool</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Link href="/blog">
            <div className={`${router.asPath.includes('/blog') && 'active'} nav-link`} style={style}>Blog</div>
          </Link>
          <Link href="/projects">
            <div className={`${router.asPath.includes('/projects') && 'active'} nav-link`} style={style}>Projects</div>
          </Link>
          <Link href="/about">
            <div className={`${router.asPath.includes('/about') && 'active'} nav-link`} style={style}>About</div>
          </Link>
          <Link href="/contact">
            <div className={`${router.asPath.includes('/contact') && 'active'} nav-link`} style={style}>Contact</div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}