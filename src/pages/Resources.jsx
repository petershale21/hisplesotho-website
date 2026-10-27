import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

/*
 * Resources page.
 * --------------
 * A landing page for training materials, technical documentation,
 * and FAQs. Phase 1 has no CMS, so this page links out to
 * external resources (Google Drive, GitHub, MOH portals) rather
 * than hosting files directly.
 *
 * Each resource group is an object in the inline `resourceGroups`
 * array below. To add a new group or link, edit that array—no
 * other change needed.
 *
 * IMPORTANT: every link must be public and shareable. Internal
 * SharePoint/Notion links break for outside visitors and make the
 * page look broken to Ministry staff who are not on the internal
 * network.
 */
export default function Resources() {
  const resourceGroups = [
    {
      title: 'Training materials',
      body: 'Guides and reference materials for eRegister users, covering registration, consultations, and module-specific workflows.',
      links: [
        { label: 'eRegister user guide (coming soon)', href: null },
        { label: 'Data quality assessment guide (coming soon)', href: null },
      ],
    },
    {
      title: 'Technical documentation',
      body: 'Documentation for implementers, system administrators, and integration partners.',
      links: [
        { label: 'eRegister–DHIS2 integration overview (coming soon)', href: null },
        { label: 'DISA lab integration specification (coming soon)', href: null },
      ],
    },
    {
      title: 'FAQs',
      body: 'Common questions from healthcare workers, partners, and Ministry staff.',
      links: [
        { label: 'Frequently asked questions (coming soon)', href: null },
      ],
    },
  ]

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="border-b border-neutral-200 bg-burgundy-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-burgundy-700">
            Resources
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Documentation, training, and guidance
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-700">
            Materials for healthcare workers, system administrators, and
            partners working with eRegister and DHIS2.
          </p>
        </div>
      </section>

      {/* ─── RESOURCE GROUPS ──────────────────────────────────── */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {resourceGroups.map((group) => (
              <Card key={group.title} className="flex h-full flex-col">
                <h2 className="text-xl font-bold text-burgundy-700">
                  {group.title}
                </h2>
                <p className="mt-2 text-sm text-neutral-700">{group.body}</p>
                <ul className="mt-6 space-y-2">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {link.href ? (
                        <a
                          href={link.href}
                          className="text-sm text-burgundy-700 underline-offset-4 hover:underline"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <span className="text-sm text-neutral-400">
                          {link.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SUPPORT CTA ──────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="rounded-xl bg-neutral-50 px-8 py-12 sm:px-12">
            <h2 className="text-2xl font-bold text-neutral-900">
              Can&apos;t find what you need?
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-700">
              If you are a system user and need help with a specific issue,
              the Support page explains how to log a ticket. For general
              enquiries, use the Contact page.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/support" variant="primary">
                Get support
              </Button>
              <Button to="/contact" variant="secondary">
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}