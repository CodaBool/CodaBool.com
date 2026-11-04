import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import useTitle from '@/lib/useTitle'
import LineWriter from '@/components/landing/LineWriter'
import Terminal from '@/components/landing/Terminal'
import Morph from '@/components/landing/Morph'
import DisplayTime from '@/components/landing/DisplayTime'
import { progressBar, spinner } from '@/components/landing/script'
import '@/styles/landing.css'

export default function Landing() {
  useTitle()
  const navigate = useNavigate()
  const [showTerminal, setShowTerminal] = useState(false)
  const [showNav, setShowNav] = useState(false)
  const redirectTimer = useRef(null)
  const container = useRef(null)
  const skip = useRef(null)
  const [loading, setLoading] = useState(null)

  // on small screens the intro outgrows the viewport, so follow new lines unless the user scrolled up
  useEffect(() => {
    // the intro is over, start the terminal from the top
    if (showTerminal) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    let follow = true
    let lastY = window.scrollY
    // where the page sits when the terminal bottom clears the skip button
    const target = () => {
      const gap = (skip.current?.offsetHeight ?? 0) + 16
      return container.current.getBoundingClientRect().bottom + window.scrollY + gap - window.innerHeight
    }
    // new lines only ever push the bottom down, so scrolling up means the user took over
    const onScroll = () => {
      if (window.scrollY < lastY) follow = false
      else if (window.scrollY >= target() - 80) follow = true
      lastY = window.scrollY
    }
    // only scroll once the output passes the bottom, so the first load stays at the top
    const observer = new ResizeObserver(() => {
      const top = target()
      if (follow && top > window.scrollY) {
        window.scrollTo({ top, behavior: 'instant' })
        lastY = window.scrollY
      }
    })
    observer.observe(container.current)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [showTerminal])

  useEffect(() => {
    document.documentElement.classList.add('bg-[#16191A]')
    // the terminal border animation is timed to finish as the intro script does
    const terminalTimer = setTimeout(() => setShowTerminal(true), 28000)
    const navTimer = setTimeout(() => setShowNav(true), 9000)
    return () => {
      document.documentElement.classList.remove('bg-[#16191A]')
      clearTimeout(terminalTimer)
      clearTimeout(navTimer)
      clearTimeout(redirectTimer.current)
    }
  }, [])

  // gives the curl line a moment on screen before leaving
  function redirect(path) {
    clearTimeout(redirectTimer.current)
    setLoading({ text: `Fetching ${path}`, duration: 2500 })
    redirectTimer.current = setTimeout(() => navigate(path), 2500)
    return `curl https://CodaBool.com${path}`
  }

  const commands = {
    'see-projects': {
      description: 'go to my projects',
      run: () => redirect('/projects'),
    },
    'see-blog': {
      description: 'go to my blog',
      run: () => redirect('/blog'),
    },
    'see-contact': {
      description: 'how to reach me',
      run: () => 'Email: proxy.htrwd@passmail.com',
    },
  }

  return (
    <div id="index-body">
      {showTerminal && <Morph />}
      {showNav
        ? (
          <nav className="nav-group animate-in fade-in duration-1000">
            <Link to="/projects">Projects</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        )
        : <div className="h-20" />
      }
      <div className={`landing-container ${showTerminal ? '' : 'pb-20'}`}>
        <div ref={container} className="terminal">
          {!showTerminal &&
            <div className="p-4">
              <LineWriter lines={progressBar} interval={5} />
              <hr className="my-4 opacity-25" />
              <LineWriter lines={spinner} interval={5} />
            </div>
          }
          {showTerminal &&
            <>
              <div id="msg">
                <div className="size-20 sm:size-32 shrink-0 mr-4 sm:mr-6 mb-2">
                  <img src="/logos/terminal.gif" width={120} height={120} alt="" className="size-full" />
                </div>
                <div>
                  <h2>Terminal</h2>
                  <DisplayTime />
                  <p className="mt-2">Enter "help" for more information.</p>
                </div>
              </div>
              <Terminal
                msg="Welcome Home"
                commands={commands}
                loading={loading}
                notFound={cmd => `Error: ${cmd} command not found. Try typing 'help'`}
              />
            </>
          }
        </div>
        {!showTerminal &&
          <button
            ref={skip}
            className="fixed bottom-0 inset-x-0 z-10 py-3 text-center cursor-pointer bg-[#16191A]"
            onClick={() => { setShowNav(true); setShowTerminal(true) }}
          >
            <span className="sm:hidden">Skip</span>
            <span className="hidden sm:inline">Click here to skip</span>
          </button>
        }
      </div>
    </div>
  )
}
