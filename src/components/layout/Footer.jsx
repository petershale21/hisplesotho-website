import { Link } from 'react-router-dom'
import { siteConfig } from '../../data/siteConfig'

/*
 * Site footer.
 * -----------
 * Dark burgundy band with three columns: brand blurb, quick nav,
 * and contact details. Uses siteConfig for everything so contact
 * info and nav items stay in sync with the Header.
 *
 * On mobile, columns stack vertically. Links are keyboard-focusable
 * and have visible focus rings via Tailwind's default focus styles.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-burgundy-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand blurb */}
          <div>
            <p className="text-lg font-semibold">{siteConfig.name}</p>
            <p className="mt-2 text-sm text-burgundy-100">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick nav */}
          <nav aria-label="Footer">
            <p className="text-sm font-semibold uppercase tracking-wide text-burgundy-100">
              Explore
            </p>
            <ul className="mt-3 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/80 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-burgundy-100">
              Contact
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="hover:text-white"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>{siteConfig.contact.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-xs text-white/60">
          © {year} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}