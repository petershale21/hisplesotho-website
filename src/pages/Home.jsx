import Button from '../components/ui/Button'
import MetricCounter from '../components/ui/MetricCounter'
import { workAreas } from '../data/content'

/*
 * Home page.
 * ---------
 * Section order is deliberate: identity → proof → invitation.
 *
 *   1. Hero     — who we are and what we do (above the fold)
 *   2. Metrics  — credibility numbers, animated once on scroll
 *   3. Work     — what we actually do (preview; full page at /work)
 *   4. CTA      — invite the visitor to get in touch
 *
 * Work-area copy comes from src/data/content.js so Home and the
 * full Work page stay in sync. Only the first four are shown here;
 * the Work page renders all of them with more detail.
 */
export default function Home() {
  // Home shows the first four work areas as a preview.
  // Slice keeps this decoupled from the full list — add work areas
  // to content.js and the Work page picks them up automatically.
  const previewAreas = workAreas.slice(0, 4)

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="border-b border-neutral-200 bg-burgundy-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-wider text-burgundy-700">
            Health Information Systems Programme · Lesotho
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Strengthening Lesotho&apos;s health information systems
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-700">
            We work with the Ministry of Health to deliver reliable,
            interoperable digital health systems—from eRegister at the point
            of care to national DHIS2 reporting and analytics.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/work">Explore our work</Button>
            <Button to="/about" variant="secondary">
              About HISP Lesotho
            </Button>
          </div>
        </div>
      </section>

      {/* ─── METRICS ──────────────────────────────────────────── */}
      {/*
        Animated counters. These fire once when scrolled into view
        and respect prefers-reduced-motion. They are used exactly
        once on the site — restraint is the point.
      */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <MetricCounter value={10} label="Districts covered" />
            <MetricCounter value={45} label="Health facilities supported" suffix="+" />
            <MetricCounter value={250} label="Health workers trained" suffix="+" />
            <MetricCounter value={98} label="Data reporting accuracy" suffix="%" />
          </div>
        </div>
      </section>

      {/* ─── WORK PREVIEW ─────────────────────────────────────── */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-burgundy-700">
                What we do
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                Digital systems that support every level of care
              </h2>
              <p className="mt-4 text-lg text-neutral-700">
                From electronic medical records in clinics to national DHIS2
                reporting, our work connects the front line of care with the
                decisions that shape it.
              </p>
              <div className="mt-6">
                <Button to="/work" variant="ghost">
                  See all work areas →
                </Button>
              </div>
            </div>

            <ul className="space-y-4">
              {previewAreas.map((area) => (
                <li
                  key={area.id}
                  className="rounded-lg border border-neutral-200 bg-white p-5"
                >
                  <p className="font-semibold text-burgundy-700">{area.title}</p>
                  <p className="mt-1 text-sm text-neutral-700">{area.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="rounded-xl bg-burgundy-700 px-8 py-12 text-white sm:px-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Working with HISP Lesotho
            </h2>
            <p className="mt-3 max-w-2xl text-burgundy-50">
              Whether you are a partner, healthcare worker, or Ministry
              official, we welcome the chance to collaborate on strengthening
              Lesotho&apos;s health information systems.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                to="/contact"
                variant="secondary"
                className="!border-white !text-white hover:!bg-white/10"
              >
                Contact us
              </Button>
              <Button
                to="/support"
                variant="ghost"
                className="!text-white hover:!bg-white/10"
              >
                Get support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}