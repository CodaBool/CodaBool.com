import { useEffect } from 'react'

// matches the default in index.html
const DESCRIPTION = 'Portfolio site for CodaBool, see all projects and blog posts'

export default function useTitle(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | CodaBool` : 'CodaBool'
    document.querySelector('meta[name="description"]')?.setAttribute('content', description || DESCRIPTION)
  }, [title, description])
}
