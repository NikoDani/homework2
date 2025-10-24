import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()

  // Hide header on hobby detail pages (paths like /hobby/1, /hobby/chess)
  if (location.pathname.startsWith('/hobby/') && location.pathname !== '/hobby') {
    return null
  }

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Hobby', href: '/hobby' },
  ]

  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          {links.map(el => (
            <li key={el.href} className="nav-item">
              <Link to={el.href} className="nav-link">{el.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
