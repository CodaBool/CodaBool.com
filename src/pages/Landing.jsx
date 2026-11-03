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
  const [loading, setLoading] = useState(null)

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
      <div className="landing-container">
        <div className="terminal">
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
                <div className="size-32 shrink-0 mr-6 mb-2">
                  <img src="/logos/terminal.gif" width={120} height={120} alt="" />
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
        {!showNav &&
          <button
            className="fixed bottom-0 inset-x-0 z-10 pb-4 text-center cursor-pointer"
            onClick={() => { setShowNav(true); setShowTerminal(true) }}
          >
            Click here to skip
          </button>
        }
      </div>
    </div>
  )
}
