import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'

/*
 * MetricCounter
 * -------------
 * A big number that counts up from 0 to `value` the first time
 * it scrolls into view. Uses framer-motion's animate() so we
 * don't hand-roll requestAnimationFrame.
 *
 * Behaviour that matters:
 *   - Counts ONCE (useInView with once: true). Re-counting on
 *     every scroll would be distracting on a long page.
 *   - Respects prefers-reduced-motion: if the user has opted
 *     out of motion, we skip the animation and show the final
 *     number immediately. This is a WCAG 2.1 AA expectation.
 *   - `suffix` lets us render "10+", "X%", "Y districts" without
 *     each caller building the same string logic.
 */
export default function MetricCounter({ value, label, suffix = '', duration = 1.5 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReduced) {
      setDisplay(value)
      return
    }

    const controls = animate(0, value, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, duration])

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold text-burgundy-700 sm:text-5xl">
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-neutral-700">{label}</p>
    </div>
  )
}