import Card from '../components/ui/Card'
import { siteConfig } from '../data/siteConfig'

/*
 * Support page.
 * ------------
 * The one page where the Zammad workflow must be unmistakable.
 * Users arrive here because something is broken or they don't
 * know how to do something — the page must answer in under ten
 * seconds:
 *
 *   1. What email address to send to
 *   2. What to include in the email
 *   3. What happens next (a ticket number comes back)
 *   4. How to follow up (quote the ticket number)
 *
 * The email address comes from siteConfig.contact.supportEmail.
 * Change it there once and every reference updates.
 */
export default function Support() {
  const supportEmail = siteConfig.contact.supportEmail

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="border-b border-neutral-200 bg-burgundy-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-burgundy-700">
            Support
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Get help with eRegister
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-700">
            If something is not working, or you are unsure how to do
            something in eRegister, log a ticket by email. Every ticket
            receives a number so nothing gets lost.
          </p>
        </div>
      </section>

      {/* ─── THE ONE THING TO REMEMBER ────────────────────────── */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <Card className="border-burgundy-200 bg-burgundy-50">
            <p className="text-sm font-semibold uppercase tracking-wider text-burgundy-700">
              To log a ticket
            </p>
            <p className="mt-2 text-2xl font-bold text-neutral-900">
              Email{' '}
              <a
                href={`mailto:${supportEmail}`}
                className="text-burgundy-700 underline-offset-4 hover:underline"
              >
                {supportEmail}
              </a>
            </p>
            <p className="mt-3 text-neutral-700">
              You will receive an automated reply with a ticket number.{' '}
              {siteConfig.support.responseNote}
            </p>
          </Card>
        </div>
      </section>

      {/* ─── STEP-BY-STEP ─────────────────────────────────────── */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-burgundy-700">
              How it works
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Four steps
            </h2>
          </div>

          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: 'Write the email',
                body: `Send an email to ${supportEmail} describing the issue in your own words.`,
              },
              {
                step: 'Include the essentials',
                body: 'Mention your facility, the module (ART, HTS, TB, etc.), and what you were trying to do when the problem occurred.',
              },
              {
                step: 'Receive a ticket number',
                body: 'An automated reply confirms your ticket and gives you a number. Keep this number — it is how your issue is tracked.',
              },
              {
                step: 'Follow up with the number',
                body: 'Reply to the same email thread to add information. Your ticket number keeps everything in one conversation.',
              },
            ].map((item, index) => (
              <li key={item.step}>
                <Card className="h-full">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-burgundy-700 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-neutral-900">
                    {item.step}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-700">{item.body}</p>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── WHAT TO INCLUDE ──────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-burgundy-700">
                Writing a good ticket
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                A few details make a big difference
              </h2>
              <p className="mt-4 text-lg text-neutral-700">
                The more clearly the issue is described, the faster it can
                be resolved. Include the following in your email:
              </p>
            </div>
            <ul className="space-y-3">
              {[
                'Your name and facility',
                'The module you were working in (ART, HTS, TB, ANC, etc.)',
                'What you were trying to do',
                'What happened instead — exact wording of any error message',
                'When the issue started',
                'Whether other staff at your site are seeing the same problem',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-neutral-700"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy-700"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}