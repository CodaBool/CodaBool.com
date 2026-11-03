import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/blog', label: 'Blog' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function linkClass({ isActive }) {
  return `block rounded-md px-3 py-2 text-lg font-medium transition-colors sm:py-1 ${
    isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
  }`
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // collapse the mobile menu after navigating
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="w-full border-b bg-slate-950">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-4 py-3" aria-label="Global">
        <Link to='/' className="text-2xl font-semibold text-white">CodaBool</Link>
        <button
          type="button"
          className="rounded-md p-2 text-gray-400 hover:bg-slate-800 hover:text-white sm:hidden"
          aria-controls="navbar-links"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(o => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          id="navbar-links"
          className={`${open ? 'block' : 'hidden'} w-full pt-2 sm:flex sm:w-auto sm:pt-0 sm:items-center sm:gap-2`}
        >
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClass}>{label}</NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
