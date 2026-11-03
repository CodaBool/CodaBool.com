import { useEffect } from 'react'
import { Routes, Route, Outlet, useLocation } from 'react-router'
import NavBar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Landing from '@/pages/Landing'
import About from '@/pages/About'
import Blog from '@/pages/Blog'
import Post from '@/pages/Post'
import Projects from '@/pages/Projects'
import Contact from '@/pages/Contact'
import Maps from '@/pages/Maps'
import Module from '@/pages/Module'
import NotFound from '@/pages/NotFound'

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route element={<MainLayout />}>
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<ExternalLayout />}>
        <Route path="/maps" element={<Maps />} />
        <Route path="/module" element={<Module />} />
      </Route>
    </Routes>
  )
}

function MainLayout() {
  return (
    <>
      <NavBar />
      <div className="font-inter">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

// pages linked to from itch.io, no nav or footer
function ExternalLayout() {
  return <Outlet />
}
