import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

// https://utteranc.es
// the script replaces itself with an iframe, so it gets re-added on every navigation
export default function Comments() {
  const ref = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const container = ref.current
    const script = document.createElement('script')
    script.src = 'https://utteranc.es/client.js'
    script.async = true
    script.crossOrigin = 'anonymous'
    script.setAttribute('repo', 'codabool/CodaBool.com')
    script.setAttribute('issue-term', 'pathname')
    script.setAttribute('theme', 'github-dark')
    container.appendChild(script)
    return () => container.replaceChildren()
  }, [pathname])

  return <div ref={ref} className="mt-10" />
}
