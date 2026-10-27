import Card from '../components/ui/Card'

/*
 * About Us page.
 * -------------
 * Narrative page — no data-driven lists, so content lives inline
 * here rather than in content.js.
 *
 * IMPORTANT: framing.
 * HISP Lesotho did not originally implement eRegister or DHIS2.
 * We took over stewardship of systems that were already running.
 * Copy must NOT say "we built / we deployed" — it should say
 * "we operate / we manage / we maintain / we strengthen".
 */
export default function About() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="border-b border-neutral-200 bg-burgundy-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-burgundy-700">
            About Us
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            The team behind Lesotho&apos;s digital health systems
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-700">
            HISP Lesotho works at the heart of Lesotho&apos;s digital health
            transformation, partnering with the Ministry of Health to operate
            and strengthen the systems that support HIV and TB care across the
            country.
          </p>
        </div>
      </section>

      {/* ─── OUR ROLE ─────────────────────────────────────────── */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-burgundy-700">
                Our role
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                Stewards of the systems that care depends on
              </h2>
            </div>
            <div className="space-y-4 text-lg text-neutral-700">
              <p>
                Lesotho&apos;s HIV response depends on reliable, timely data.
                For years, the flow from clinic to national reporting ran
                through paper registers, manual tallying, and hand entry into
                DHIS2 — a process that was slow, error-prone, and
                resource-intensive.
              </p>
              <p>
                HISP Lesotho was brought in to take over stewardship of key
                national systems — <strong>eRegister</strong>, built on Bahmni
                and OpenMRS, and <strong>DHIS2</strong> — and to strengthen
                how they are operated, supported, and extended.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION / VISION ─────────────────────────────────── */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="h-full">
              <p className="text-sm font-semibold uppercase tracking-wider text-burgundy-700">
                Mission
              </p>
              <h3 className="mt-2 text-2xl font-bold text-neutral-900">
                Reliable systems for every level of care
              </h3>
              <p className="mt-3 text-neutral-700">
                To strengthen Lesotho&apos;s health information systems by
                operating, integrating, and maintaining the digital tools that
                healthcare workers trust and decision-makers rely on.
              </p>
            </Card>
            <Card className="h-full">
              <p className="text-sm font-semibold uppercase tracking-wider text-burgundy-700">
                Vision
              </p>
              <h3 className="mt-2 text-2xl font-bold text-neutral-900">
                A paperless health system
              </h3>
              <p className="mt-3 text-neutral-700">
                A Lesotho where every patient encounter is captured
                electronically, every report flows automatically to national
                systems, and no decision is made without the data to support
                it.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ─── HOW WE WORK ──────────────────────────────────────── */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-burgundy-700">
                How we work
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                Embedded with the Ministry
              </h2>
              <p className="mt-4 text-lg text-neutral-700">
                HISP Lesotho operates as an implementing partner to the
                Ministry of Health. We run and maintain the national systems
                and train the people who use them.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                {
                  title: 'eRegister',
                  body: 'We operate eRegister, the electronic medical record system used at the point of care for HIV and TB services.',
                },
                {
                  title: 'DHIS2',
                  body: 'We manage DHIS2 on behalf of the Ministry, maintaining the data sets and metadata that drive national reporting.',
                },
                {
                  title: 'DISA integration',
                  body: 'We maintain the link between eRegister and the national laboratory system so results flow back to clinicians automatically.',
                },
                {
                  title: 'Capacity building',
                  body: 'We train healthcare workers and Ministry staff to use the systems confidently and to trust the data they produce.',
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="rounded-lg border border-neutral-200 bg-white p-4"
                >
                  <p className="font-semibold text-burgundy-700">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-neutral-700">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── PARTNERS ─────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-burgundy-700">
            Partners
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Working together
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-neutral-700">
            Our work is delivered in partnership with the Ministry of Health
            and supported by a network of global and local organisations.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {[
              'Ministry of Health',
              'HISP Network',
              'PEPFAR',
              'CDC',
            ].map((partner) => (
              <div
                key={partner}
                className="flex h-24 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 px-4 text-center text-sm font-medium text-neutral-600"
              >
                {partner}
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-neutral-500">
            Partner logos will be displayed once permissions are confirmed.
          </p>
        </div>
      </section>
    </>
  )
}