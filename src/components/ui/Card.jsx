/*
 * Card — the base surface for feature boxes, work-area tiles,
 * story previews, etc. Neutral border + soft shadow.
 * `hover` adds a subtle lift for clickable cards.
 */
export default function Card({ children, hover = false, className = '' }) {
  return (
    <div
      className={`rounded-lg border border-neutral-200 bg-white p-6 shadow-sm ${
        hover ? 'transition-shadow hover:shadow-md' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}