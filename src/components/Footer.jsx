import { useLocation } from 'react-router'

// lucide-react v1 removed brand icons, this matches its 24x24 stroke style
function Github({ size = 24 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export default function Footer() {
  const { pathname } = useLocation()
  return (
    <footer className="container px-4 mx-auto mb-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap mt-12">
        <div className="w-full mx-auto sm:w-1/2 md:w-1/3 lg:w-1/4">
          <hr />
          <p className="mt-2 text-sm text-center text-gray-400">
            DevOps Engineer and Full-stack Dev. I run this as a personal blog and hub for my projects.
          </p>
          {pathname !== '/contact' &&
            <a href="mailto:proxy.htrwd@passmail.com" className="text-blue-400 hover:underline">
              <p className="text-center">
                proxy.htrwd@passmail.com
              </p>
            </a>
          }
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center my-2">
        <a href="https://github.com/codabool" aria-label="GitHub">
          <Github size={60} />
        </a>
      </div>
    </footer>
  )
}
