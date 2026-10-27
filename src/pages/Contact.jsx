import { useState } from 'react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { siteConfig } from '../data/siteConfig'

/*
 * Contact page.
 * ------------
 * Two-column layout: contact details on the left, a mailto-based
 * form on the right.
 *
 * Why mailto instead of a backend form: Phase 1 has no server, so a
 * traditional POST would go nowhere. The form builds a pre-filled
 * mailto: link from the user's inputs and hands off to their mail
 * client — no third-party form service, no fake "message sent!"
 * confirmation that quietly drops the message.
 *
 * When a backend is available (Phase 2), only handleSubmit changes;
 * the fields and layout stay the same.
 */
export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      '',
      form.message,
    ].join('\n')

    const mailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      form.subject || `Website enquiry from ${form.name}`
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
  }

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="border-b border-neutral-200 bg-burgundy-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-burgundy-700">
            Contact
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-700">
            For partnerships, general enquiries, or questions about our work,
            reach out to the team.
          </p>
        </div>
      </section>

      {/* ─── CONTACT DETAILS + FORM ───────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Details column */}
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-wider text-burgundy-700">
                Direct
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900">
                Contact details
              </h2>
              <ul className="mt-6 space-y-4 text-neutral-700">
                <li>
                  <p className="text-xs uppercase tracking-wider text-neutral-500">
                    General enquiries
                  </p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-lg font-medium text-burgundy-700 underline-offset-4 hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-wider text-neutral-500">
                    System support
                  </p>
                  <a
                    href={`mailto:${siteConfig.contact.supportEmail}`}
                    className="text-lg font-medium text-burgundy-700 underline-offset-4 hover:underline"
                  >
                    {siteConfig.contact.supportEmail}
                  </a>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-wider text-neutral-500">
                    Phone
                  </p>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                    className="text-lg font-medium text-burgundy-700 underline-offset-4 hover:underline"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-wider text-neutral-500">
                    Location
                  </p>
                  <p className="text-lg font-medium text-neutral-900">
                    {siteConfig.contact.location}
                  </p>
                </li>
              </ul>

              <p className="mt-8 text-sm text-neutral-500">
                If you are a system user reporting a problem, the{' '}
                <a
                  href="/support"
                  className="text-burgundy-700 underline-offset-4 hover:underline"
                >
                  Support page
                </a>{' '}
                explains how to log a ticket.
              </p>
            </div>

            {/* Form column */}
            <div className="lg:col-span-3">
              <Card>
                <h2 className="text-2xl font-bold text-neutral-900">
                  Send a message
                </h2>
                <p className="mt-2 text-sm text-neutral-600">
                  This form opens your email client with the message
                  pre-filled. Nothing is sent until you press send in your
                  mail app.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-900"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={update('name')}
                      className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-burgundy-700 focus:outline-none focus:ring-1 focus:ring-burgundy-700"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-900"
                    >
                      Your email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update('email')}
                      className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-burgundy-700 focus:outline-none focus:ring-1 focus:ring-burgundy-700"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-neutral-900"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={form.subject}
                      onChange={update('subject')}
                      className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-burgundy-700 focus:outline-none focus:ring-1 focus:ring-burgundy-700"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-neutral-900"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={update('message')}
                      className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-burgundy-700 focus:outline-none focus:ring-1 focus:ring-burgundy-700"
                    />
                  </div>

                  <Button type="submit">Open in email client</Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}