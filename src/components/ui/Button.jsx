import { Link } from 'react-router-dom'

/*
 * Button — one component, three variants, two modes.
 * ------------------------------------------------
 * variant: 'primary' (burgundy filled), 'secondary' (outlined), 'ghost' (text only)
 * If `to` is provided, renders a react-router <Link>; otherwise <button>.
 * Keeping these in one place means every CTA on the site has
 * identical hover, focus, and disabled styling — and it's a
 * single edit to restyle every button on the site.
 */
const base =
  'inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

const styles = {
  primary:
    'bg-burgundy-700 text-white hover:bg-burgundy-600 focus-visible:outline-burgundy-700',
  secondary:
    'border border-burgundy-700 text-burgundy-700 hover:bg-burgundy-50 focus-visible:outline-burgundy-700',
  ghost:
    'text-burgundy-700 hover:bg-burgundy-50 focus-visible:outline-burgundy-700',
}

export default function Button({
  variant = 'primary',
  to,
  href,
  children,
  ...rest
}) {
  const cls = `${base} ${styles[variant]}`

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  )
}