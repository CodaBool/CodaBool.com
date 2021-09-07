import { useState, useEffect } from 'react'

import { Fade } from "react-awesome-reveal"
import Terminal from 'custom-terminal-in-react'
import ViPlugin from 'terminal-in-react-vi-plugin'
import pseudoFileSystemPlugin from 'terminal-in-react-pseudo-file-system-plugin'
import TerminalAnimation from 'coda-line-writer'

import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { progressBar, spinner } from '../components/landingPage/type'
import Morph from '../components/landingPage/Morph'
import DisplayTime from '../components/landingPage/DisplayTime'
import Img from 'next/image'

const FileSystemPlugin = pseudoFileSystemPlugin()

export default function Index() {
  const [showTerminal, setShowTerminal] = useState(false)
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowTerminal(true)
    }, 28000)
    const timer2 = setTimeout(() => {
      setShowNav(true)
    }, 9000)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return(
    <div id="index-body">
      {showTerminal && <Morph />}
      {showNav &&
        <Fade>
          <div className="nav-group">
            <Nav.Link className="text-center" href="/projects" id='nav'>Projects</Nav.Link>
            <Nav.Link className="text-center" href="/blog" id='nav'>Blog</Nav.Link>
            <Nav.Link className="text-center" href="/contact" id='nav'>Contact</Nav.Link>
          </div>
        </Fade>
      }
      {!showNav && <div style={{height: '5rem'}}></div>}
      <Container>
        <div className='terminal'>
          {!showTerminal &&
            <div className="p-3">
              <TerminalAnimation
                lines={progressBar}
                interval={5}
              />
              <hr />
              <TerminalAnimation
                lines={spinner}
                interval={5}
              />
            </div>
          }
          {showTerminal &&
            <>
              <div id="msg">
                <div style={{ width: '8rem', height: '8rem'}} className="me-4 mb-2">
                  <Img src="/assets/logos/terminal.gif" layout="responsive" width={200} height={200} />
                </div>
                <div>
                  <h2>Terminal</h2>
                  <DisplayTime />
                  <p className="mt-2">Enter "help" for more information.</p>
                </div>
              </div>
              <Terminal 
                color='rgb(150, 170, 120)'
                outputColor='rgb(150, 170, 120)'
                msg='Welcome Home'
                backgroundColor='rgba(0, 0, 0, 0)'
                hideTopBar={true}
                allowTabs={false}
                style={{ fontWeight: "bold", fontSize: "1.5em", height: '100%', width: '100%', display: 'block'}}
                promptSymbol={'$ '}
                prompt='rgb(150, 170, 120)'
                plugins={[
                  FileSystemPlugin,
                  {
                    class: ViPlugin,
                    config: {
                      filesystem: FileSystemPlugin.displayName
                    }
                  }
                ]}
                descriptions={{ color: false, show: false, clear: false }}
                commandPassThrough={(cmd, print) => {
                  print(`Error: ${cmd} command not found. Try typing 'help'`)
                }}
                commands={{
                  'see-projects': () => location.href = '/projects',
                  'see-contact': () => 'Email: CodaBool@pm.me | Twitter: @Coda_Bool',
                  'see-blog': () => location.href = '/blog',
                }}
              />
            </>
          }
        </div>
        {!showNav &&
          <div className="text-center fixed-bottom" style={{cursor: 'pointer'}} onClick={() => {setShowNav(true); setShowTerminal(true)}}>
            <p>Click here to skip</p>
          </div>
        }
      </Container>
    </div>
  )
}