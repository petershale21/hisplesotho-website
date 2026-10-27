/*
 * SectionHeading
 * --------------
 * Consistent eyebrow + title + optional lead paragraph.
 * Used at the top of each major section so vertical rhythm
 * and typography scale stay uniform across pages.
 */
export default function SectionHeading({ eyebrow, title, lead, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-burgundy-700">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
        {title}
      </h2>
      {lead && (
        <p className="mt-4 max-w-2xl text-lg text-neutral-700">
          {lead}
        </p>
      )}
    </div>
  )
}