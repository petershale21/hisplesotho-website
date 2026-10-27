/*
 * Central site configuration
 * --------------------------
 * Every value that appears in multiple places — or that someone
 * will want to change without hunting through components — lives
 * here. Change once, propagate everywhere.
 */

export const siteConfig = {
  // Organization identity
  name: 'HISP Lesotho',
  fullName: 'Health Information Systems Programme Lesotho',
  tagline: 'Strengthening health information systems in Lesotho',
  description:
    'HISP Lesotho works with the Ministry of Health to strengthen health information systems through Bahmni, OpenMRS, and DHIS2.',

  // Brand assets
  // PLACEHOLDER: currently the HISP South Africa logo (JPEG, white bg).
  // Replace with the official HISP Lesotho logo (transparent PNG/SVG)
  // when available. Everything that references the logo imports this path.
  logo: new URL('../assets/hisp-sa-logo.jpeg', import.meta.url).href,

  // Contact points
  contact: {
    email: 'info@hisplesotho.org',        // general enquiries
    supportEmail: 'support@bokang.org', // PLACEHOLDER — Zammad inbound
    phone: '+266 22XX XXXX',          // PLACEHOLDER — update with real number
    location: 'Maseru, Lesotho',
  },

  // Support workflow copy — referenced by the Support page.
  // Zammad is email-based in Phase 1: users email in, get a ticket
  // number back automatically. No API integration.
  support: {
    responseNote:
      'You will receive an automated reply with a ticket number. Keep it for follow-up.',
  },

  // Navigation — single source of truth for Header and Footer.
  // Order here is the order rendered everywhere.
  nav: [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Work', path: '/work' },
    { label: 'Impact', path: '/impact' },
    { label: 'Resources', path: '/resources' },
    { label: 'Support', path: '/support' },
    { label: 'Contact', path: '/contact' },
  ],
}