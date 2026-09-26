/**
 * Personal data used across the whole site (hero, logo, footer, legal notice, privacy policy).
 * Replace every placeholder before deploying.
 */
export const PROFILE = {
  firstName: 'Sezer',
  lastName: 'Ünaldi',
  city: 'Musterstadt',
  street: 'Musterstraße 1',
  zip: '12345',
  country: { de: 'Deutschland', en: 'Germany' },
  email: 'konya_sezer@hotmail.de',
  domain: 'https://vorname-nachname.de',

  github: 'https://github.com/Sezer4261',
  linkedin: 'https://www.linkedin.com/in/sezer-uenaldi/',

  heroImage: 'assets/img/hero-photo.webp',
  aboutImage: 'assets/img/about-photo.webp',

  /** Relative to the deployed site; the PHP script lives in /public. */
  mailEndpoint: 'sendMail.php',

  hosting: {
    name: 'Name des Hosters',
    address: 'Straße, PLZ Ort, Land',
  },
} as const;

export const FULL_NAME = `${PROFILE.firstName} ${PROFILE.lastName}`;
