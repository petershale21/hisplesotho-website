/*
 * Structured site content
 * -----------------------
 * Long-form content that appears on more than one page (work areas,
 * module lists, implementation stages) lives here, not in JSX.
 *
 * PLACEHOLDER values are marked. Search this file for `xx` and
 * `PLACEHOLDER` before go-live.
 */

/* ───────────────────────────────────────────────────────────────
 * eRegister implementation stages
 * ───────────────────────────────────────────────────────────────
 * Aligned with the MOH Standard Operating Procedure (Feb 2020).
 * Rollout is assessed PER MODULE, not per facility.
 */
export const implementationStages = [
  {
    id: 'stage-1',
    name: 'Stage 1 — Parallel operation',
    summary:
      'eRegister is live at the point of care, with paper reporting tools running alongside it.',
    detail:
      'Facilities use eRegister while continuing all existing standardized paper tools—including patient cards, registers, and summary forms. Data is compiled on paper and entered manually into DHIS2. This stage builds confidence and data quality before paper tools are retired.',
  },
  {
    id: 'stage-2',
    name: 'Stage 2 — Hybrid reporting',
    summary:
      'Summary paper tools are retired; eRegister reports flow directly to DHIS2 at month-end.',
    detail:
      'Facilities stop using summary forms (registers, tally sheets, and aggregate reports), significantly reducing documentation burden. Primary patient-level tools (like the HIV Care/ART Card) remain in use as the source document for clinical care, but reporting is automated directly from eRegister to DHIS2.',
  },
  {
    id: 'stage-3',
    name: 'Stage 3 — Point of care',
    summary: 'Full transition to electronic documentation and reporting.',
    detail:
      'Paper forms are phased out entirely as primary documentation tools. In the unanticipated event of system downtime (power outage, network issue, or hardware failure), paper tools remain as a manual backup for clinical encounters, with data entered into eRegister once the system is restored.',
  },
]

/* ───────────────────────────────────────────────────────────────
 * HIV/TB modules
 * ───────────────────────────────────────────────────────────────
 * Add new modules here — the UI renders whatever is in this array.
 */
export const modules = [
  { id: 'art',       name: 'ART + Viral Load' },
  { id: 'hts',       name: 'HTS (HIV Testing Services)' },
  { id: 'tb',        name: 'TB' },
  { id: 'ahd',       name: 'AHD (Advanced HIV Disease)' },
  { id: 'anc',       name: 'ANC (Antenatal Care)' },
  { id: 'pnc',       name: 'PNC (Postnatal Care)' },
  { id: 'hei',       name: 'HIV Exposed Infants' },
  { id: 'under5',    name: 'Under 5' },
  { id: 'prep',      name: 'PrEP' },
  { id: 'cervical',  name: 'Cervical Cancer Screening' },
]

/* ───────────────────────────────────────────────────────────────
 * Current Stage 2 coverage — PLACEHOLDER
 * ───────────────────────────────────────────────────────────────
 * Confirm exact figures with the team before go-live.
 * Format on the page: sites/total = percent%.
 */
export const stage2Coverage = {
  art: { confirmed: true, sites: 'xx', total: 'xx', percent: 'xx' },
  hts: { confirmed: false, sites: 'xx', total: 'xx', percent: 'xx' },
  tb:  { confirmed: false, sites: 'xx', total: 'xx', percent: 'xx' },
  anc: { confirmed: false, sites: 'xx', total: 'xx', percent: 'xx' },
}

/* ───────────────────────────────────────────────────────────────
 * Work areas — used on Home (preview) and Work (full page)
 * ───────────────────────────────────────────────────────────────
 */
export const workAreas = [
  {
    id: 'eregister',
    title: 'eRegister (Bahmni on OpenMRS)',
    body: 'Our electronic medical record system, deployed at the point of care for HIV and TB services across Lesotho’s 10 districts. Built on Bahmni, running on OpenMRS.',
  },
  {
    id: 'stages',
    title: 'Staged rollout, module by module',
    body: 'Each HIV/TB module moves from parallel paper operation (Stage 1) to direct DHIS2 reporting (Stage 2), with fully paperless operation (Stage 3) as the long-term goal.',
  },
  {
    id: 'dhis2',
    title: 'DHIS2 Management & Data Sets',
    body: 'HISP Lesotho manages DHIS2 on behalf of the Ministry of Health, building and maintaining the national data sets and metadata that drive programme reporting and analytics.',
  },
  {
    id: 'disa',
    title: 'DISA laboratory integration',
    body: 'Viral load, smear, and culture lab orders originate in eRegister and receive an order number sent to DISA — the national laboratory system, running on DisaLab. When results are captured at the lab, eRegister pulls them back automatically.',
  },
  {
    id: 'interop',
    title: 'Interoperability',
    body: 'Data exchange between eRegister, DHIS2, DISA, and national patient identifiers — so a patient’s history follows them, and reported data reflects what actually happened at the point of care.',
  },
  {
    id: 'capacity',
    title: 'Capacity building',
    body: 'Training healthcare workers and Ministry of Health staff in data use and system management, so the systems we build stay useful long after go-live.',
  },
]

export const impactChart = {
  title: 'eRegister module reporting coverage (2024–present)',
  ariaLabel:
    'Bar chart showing percentage of facilities reporting each eRegister module directly to DHIS2 since 2024',
  labels: ['ART + Viral Load', 'HTS', 'TB', 'ANC'],
  values: [98, 45, 30, 25], // PLACEHOLDER — replace with confirmed figures
  unit: '%',
  source:
    'HISP Lesotho programme monitoring, 2024–present. Figures are indicative and will be updated with confirmed programme data.',
}