import {
  implementationStages,
  modules,
  stage2Coverage,
  workAreas,
} from '../data/content'
import Card from '../components/ui/Card'

/*
 * Our Work page.
 * -------------
 * Sections, in order:
 *   1. Hero
 *   2. Three-stage implementation model
 *   3. Work areas (from workAreas — same source as the Home preview)
 *   4. Modules table (from modules + stage2Coverage)
 *   5. DISA lab flow (written inline — it's a one-off narrative,
 *      not reused elsewhere, so it doesn't belong in content.js)
 *
 * Everything that's likely to change often (stage copy, module list,
 * Stage 2 coverage) lives in content.js. Narrative that only appears
 * here stays in this file.
 */
export default function Work() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="border-b border-neutral-200 bg-burgundy-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-burgundy-700">
            Our Work
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            eRegister at the point of care, DHIS2 at the national level
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-700">
            Our work centres on one system—eRegister, our implementation of
            Bahmni on OpenMRS—and the paths its data takes from the clinic to
            national reporting and back again.
          </p>
        </div>
      </section>

      {/* ─── THREE-STAGE MODEL ────────────────────────────────── */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-burgundy-700">
              Implementation model
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              A staged path to paperless care
            </h2>
            <p className="mt-4 text-lg text-neutral-700">
              eRegister is rolled out in three stages. Each module advances
              through the stages independently, as the site and the module
              are both judged ready—so a single facility can be at Stage 2
              for ART while still at Stage 1 for ANC.
            </p>
          </div>

          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {implementationStages.map((stage, index) => (
              <li key={stage.id}>
                <Card className="h-full">
                  <p className="text-sm font-semibold text-burgundy-700">
                    Stage {index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-neutral-900">
                    {stage.summary.replace(/^Stage \d+ — /, '')}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-700">
                    {stage.detail}
                  </p>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── WORK AREAS ───────────────────────────────────────── */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-burgundy-700">
              What we do
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Six areas of work
            </h2>
            <p className="mt-4 text-lg text-neutral-700">
              From the point-of-care record to the national data warehouse,
              each area of our work builds on the others.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workAreas.map((area) => (
              <Card key={area.id} className="h-full">
                <h3 className="text-lg font-bold text-burgundy-700">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-700">{area.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MODULES + STAGE 2 COVERAGE ───────────────────────── */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-burgundy-700">
              Modules
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Ten HIV/TB modules, each on its own path
            </h2>
            <p className="mt-4 text-lg text-neutral-700">
              eRegister covers the full HIV and TB care cascade. Each module
              is assessed independently for readiness to move to Stage 2
              (direct DHIS2 reporting), based on the site and the module’s
              own data quality and workflow criteria.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-lg border border-neutral-200">
            <table className="min-w-full divide-y divide-neutral-200">
              <thead className="bg-neutral-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-700"
                  >
                    Module
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-700"
                  >
                    Stage 2 coverage
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white">
                {modules.map((mod) => {
                  const coverage = stage2Coverage[mod.id]
                  const coverageText = coverage
                    ? `${coverage.sites}/${coverage.total} = ${coverage.percent}%`
                    : '—'
                  return (
                    <tr key={mod.id}>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-neutral-900">
                        {mod.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-neutral-700">
                        {coverage ? (
                          coverageText
                        ) : (
                          <span className="text-neutral-500">
                            Not yet at Stage 2
                          </span>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/*
            Note under the table: signals that "xx" values are
            deliberately placeholders. Remove this note once all
            `stage2Coverage` entries are confirmed.
          */}
          <p className="mt-4 text-xs text-neutral-500">
            Coverage figures are pending confirmation. Modules not listed as
            Stage 2 are still in Stage 1 at supported sites.
          </p>
        </div>
      </section>

      {/* ─── DISA LAB FLOW ────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-burgundy-700">
                Laboratory integration
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                Closing the loop with DISA
              </h2>
              <p className="mt-4 text-lg text-neutral-700">
                eRegister is integrated with DISA—the national laboratory
                system, running on DisaLab—so that results return to the
                clinician automatically instead of being chased by phone or
                paper.
              </p>
              <p className="mt-3 text-neutral-700">
                Currently live for <strong>viral load</strong>,{' '}
                <strong>smear</strong>, and <strong>culture</strong> samples.
              </p>
            </div>

            <ol className="space-y-4">
              {[
                {
                  step: 'Order created',
                  body: 'Clinician orders a viral load, smear, or culture test in eRegister.',
                },
                {
                  step: 'Order number sent to DISA',
                  body: 'eRegister generates a lab order number and sends it to DISA.',
                },
                {
                  step: 'Result captured at lab',
                  body: 'Laboratory staff record the result against the order number in DISA.',
                },
                {
                  step: 'Result pulled back',
                  body: 'eRegister automatically retrieves the result and attaches it to the patient record.',
                },
              ].map((item, index) => (
                <li
                  key={item.step}
                  className="flex gap-4 rounded-lg border border-neutral-200 bg-white p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-burgundy-700 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-neutral-900">
                      {item.step}
                    </p>
                    <p className="mt-1 text-sm text-neutral-700">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  )
}