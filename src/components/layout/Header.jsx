import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { siteConfig } from '../../data/siteConfig'

/*
 * Site header.
 * -----------
 * Sticky top bar with logo (left) and nav links (right).
 * On mobile (< md) the links collapse into a hamburger menu.
 *
 * Active route is highlighted via NavLink's isActive callback —
 * aria-current="page" is set automatically by NavLink, which
 * screen readers announce correctly (WCAG 2.1 AA).
 */
export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo + wordmark */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src={siteConfig.logo}
            alt={`${siteConfig.name} logo`}
            className="h-10 w-auto"
          />
          <span className="hidden text-lg font-semibold text-burgundy-700 sm:inline">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {siteConfig.nav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-burgundy-700'
                        : 'text-neutral-700 hover:text-burgundy-700'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden rounded p-2 text-neutral-700 hover:bg-neutral-100"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {/* Simple two-line hamburger drawn with spans — no icon dep */}
          <span className="block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
        </button>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-neutral-200 md:hidden"
        >
          <ul className="mx-auto max-w-7xl px-4 py-2">
            {siteConfig.nav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 text-sm font-medium ${
                      isActive
                        ? 'text-burgundy-700'
                        : 'text-neutral-700 hover:text-burgundy-700'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}