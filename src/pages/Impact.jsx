import Card from '../components/ui/Card'
import MetricCounter from '../components/ui/MetricCounter'

/*
 * Impact page.
 * -----------
 * Focus: what HISP Lesotho has done since taking over stewardship
 * in 2024. Three concrete achievements, each verifiable:
 *
 *   1. Stage II transition assessments and recommendations to MOH
 *   2. National Bahmni 0.92 → v1 upgrade across implementing sites
 *   3. (Placeholder) Success stories from the field
 *
 * We deliberately do NOT show a coverage chart here. The
 * attributable impact is the work we do — assessments, migrations,
 * recommendations — not a derived percentage.
 */
export default function Impact() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="border-b border-neutral-200 bg-burgundy-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-burgundy-700">
            Impact
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            What our stewardship has achieved
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-700">
            Since taking over stewardship of Lesotho&apos;s eRegister and
            DHIS2 systems in 2024, we have focused on the operational work
            that keeps the systems reliable: assessing sites for transition,
            upgrading the underlying platform, and supporting the people who
            use the system every day.
          </p>
        </div>
      </section>

      {/* ─── HEADLINE METRICS ─────────────────────────────────── */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <MetricCounter value={10} label="Districts supported" />
            <MetricCounter value={45} label="Facilities supported" suffix="+" />
            <MetricCounter value={250} label="Health workers trained" suffix="+" />
            <MetricCounter value={100} label="Sites on Bahmni v1" suffix="%" />
          </div>
          <p className="mt-6 text-xs text-neutral-500">
            Figures reflect the 2024–present period.
          </p>
        </div>
      </section>

      {/* ─── TWO ACHIEVEMENTS ─────────────────────────────────── */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-burgundy-700">
              Our work since 2024
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Two operational milestones
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Achievement 1 — Stage II assessments */}
            <Card className="h-full">
              <p className="text-sm font-semibold text-burgundy-700">
                Stage II transition assessments
              </p>
              <h3 className="mt-2 text-xl font-bold text-neutral-900">
                Recommending sites for direct DHIS2 reporting
              </h3>
              <p className="mt-3 text-sm text-neutral-700">
                We assess facilities against Ministry of Health criteria for
                transition from Stage 1 to Stage 2. Sites that meet the
                data-quality and workflow requirements are recommended to the
                Ministry for transition to direct DHIS2 reporting. Each
                assessment is a measured, documented decision—not an
                automatic rollout.
              </p>
            </Card>

            {/* Achievement 2 — Bahmni v1 upgrade */}
            <Card className="h-full">
              <p className="text-sm font-semibold text-burgundy-700">
                National platform upgrade
              </p>
              <h3 className="mt-2 text-xl font-bold text-neutral-900">
                Bahmni 0.92 → Bahmni v1 across all implementing sites
              </h3>
              <p className="mt-3 text-sm text-neutral-700">
                We migrated every implementing site in Lesotho from Bahmni
                0.92 to Bahmni v1. The upgrade brought improved clinical
                forms, stronger security on the backend, and a platform
                foundation that positions the system for future capabilities—
                including compatibility with mobile outreach tools.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ─── SUCCESS STORIES ──────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-burgundy-700">
              Success stories
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              In the words of the people who use the system
            </h2>
            <p className="mt-4 text-lg text-neutral-700">
              Stories from healthcare workers, data officers, and Ministry
              staff will be published here as they are gathered.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="flex h-full flex-col">
                <p className="flex-1 text-sm italic text-neutral-500">
                  A story from a healthcare worker will appear here once the
                  interview has been completed and approved for publication.
                </p>
                <div className="mt-6 border-t border-neutral-200 pt-4">
                  <p className="text-sm font-semibold text-neutral-400">
                    Story {i} — coming soon
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}