import { FULL_NAME, PROFILE } from '../data/profile';
import { Language } from './translations';

export interface LegalSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface LegalText {
  title: string;
  updated: string;
  sections: LegalSection[];
}

const p = PROFILE;
const address = [FULL_NAME, p.street, `${p.zip} ${p.city}`];

export const IMPRINT: Record<Language, LegalText> = {
  de: {
    title: 'Impressum',
    updated: 'Stand: September 2026',
    sections: [
      { heading: 'Angaben gemäß § 5 DDG', paragraphs: [...address, p.country.de] },
      { heading: 'Kontakt', paragraphs: [`E-Mail: ${p.email}`] },
      {
        heading: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV',
        paragraphs: [address.join(', ')],
      },
      {
        heading: 'Haftung für Inhalte',
        paragraphs: [
          'Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen. Als Diensteanbieter bin ich für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.',
        ],
      },
      {
        heading: 'Haftung für Links',
        paragraphs: [
          'Diese Website enthält Links zu externen Websites Dritter (z. B. GitHub und LinkedIn), auf deren Inhalte ich keinen Einfluss habe. Für diese fremden Inhalte ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.',
        ],
      },
      {
        heading: 'Urheberrecht',
        paragraphs: [
          'Die auf dieser Website erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen meiner schriftlichen Zustimmung.',
        ],
      },
    ],
  },
  en: {
    title: 'Legal notice',
    updated: 'Last updated: September 2026',
    sections: [
      { heading: 'Information according to § 5 DDG (German Digital Services Act)', paragraphs: [...address, p.country.en] },
      { heading: 'Contact', paragraphs: [`Email: ${p.email}`] },
      {
        heading: 'Responsible for the content according to § 18 (2) MStV',
        paragraphs: [address.join(', ')],
      },
      {
        heading: 'Liability for content',
        paragraphs: [
          'The content of this website has been created with the greatest care. However, I cannot guarantee that the content is correct, complete and up to date. As a service provider, I am responsible for my own content on these pages in accordance with general laws.',
        ],
      },
      {
        heading: 'Liability for links',
        paragraphs: [
          'This website contains links to external third-party websites (e.g. GitHub and LinkedIn) whose content I have no influence on. The respective provider or operator is always responsible for the content of linked pages. If I become aware of any legal violations, I will remove such links immediately.',
        ],
      },
      {
        heading: 'Copyright',
        paragraphs: [
          'The content and works created on this website are subject to German copyright law. Reproduction, editing, distribution and any kind of use beyond the limits of copyright law require my written consent.',
        ],
      },
    ],
  },
};

export const PRIVACY_POLICY: Record<Language, LegalText> = {
  de: {
    title: 'Datenschutzerklärung',
    updated: 'Stand: September 2026',
    sections: [
      {
        heading: '1. Datenschutz auf einen Blick',
        paragraphs: [
          'Der Schutz deiner persönlichen Daten ist mir wichtig. Diese Datenschutzerklärung erklärt, welche personenbezogenen Daten beim Besuch dieser Website verarbeitet werden, zu welchem Zweck das geschieht und welche Rechte du hast. Personenbezogene Daten sind alle Daten, mit denen du persönlich identifiziert werden kannst.',
        ],
      },
      {
        heading: '2. Verantwortliche Stelle',
        paragraphs: [...address, `E-Mail: ${p.email}`],
      },
      {
        heading: '3. Hosting',
        paragraphs: [
          `Diese Website wird bei folgendem Anbieter gehostet: ${p.hosting.name}, ${p.hosting.address}. Der Hoster verarbeitet die Daten ausschließlich in meinem Auftrag und nach meinen Weisungen. Mit dem Hoster besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO.`,
        ],
      },
      {
        heading: '4. Server-Logfiles',
        paragraphs: [
          'Beim Aufruf dieser Website speichert der Server automatisch Informationen, die dein Browser übermittelt. Das sind:',
        ],
        list: [
          'IP-Adresse (gekürzt bzw. anonymisiert, soweit technisch möglich)',
          'Datum und Uhrzeit der Anfrage',
          'aufgerufene Seite bzw. Datei',
          'Browsertyp, Browserversion und Betriebssystem',
          'Referrer-URL (die zuvor besuchte Seite)',
        ],
      },
      {
        heading: '',
        paragraphs: [
          'Diese Daten sind für den sicheren und stabilen Betrieb der Website erforderlich. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer technisch fehlerfreien Darstellung und der Abwehr von Angriffen). Die Logfiles werden nach spätestens 14 Tagen gelöscht, sofern keine längere Aufbewahrung zu Beweiszwecken erforderlich ist.',
        ],
      },
      {
        heading: '5. Kontaktformular',
        paragraphs: [
          'Wenn du mir über das Kontaktformular schreibst, werden dein Name, deine E-Mail-Adresse und deine Nachricht an meinen Server übertragen und von dort per E-Mail an mich weitergeleitet. Ich nutze diese Daten ausschließlich, um deine Anfrage zu beantworten.',
          'Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern deine Anfrage mit einem Vertrag oder vorvertraglichen Maßnahmen zusammenhängt, und im Übrigen Art. 6 Abs. 1 lit. a DSGVO (deine Einwilligung über die Checkbox). Du kannst deine Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, z. B. per E-Mail.',
          'Deine Daten werden gelöscht, sobald deine Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Eine Weitergabe an Dritte findet nicht statt.',
        ],
      },
      {
        heading: '6. SSL-/TLS-Verschlüsselung',
        paragraphs: [
          'Diese Website nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennst du an „https://“ in der Adresszeile deines Browsers. Dadurch können Daten, die du an mich übermittelst, nicht von Dritten mitgelesen werden.',
        ],
      },
      {
        heading: '7. Lokale Speicherung der Spracheinstellung',
        paragraphs: [
          'Diese Website verwendet keine Cookies und keine Tracking- oder Analyse-Tools. Damit die gewählte Sprache (Deutsch oder Englisch) beim nächsten Besuch erhalten bleibt, wird sie im lokalen Speicher (Local Storage) deines Browsers abgelegt. Diese Information verlässt dein Gerät nicht und wird nicht an mich übertragen. Die Speicherung ist für den von dir gewünschten Dienst unbedingt erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG). Du kannst sie jederzeit über die Einstellungen deines Browsers löschen.',
        ],
      },
      {
        heading: '8. Schriftarten',
        paragraphs: [
          'Die auf dieser Website verwendeten Schriftarten (Quicksand und Fraunces) sind lokal auf meinem Server eingebunden. Beim Aufruf der Seite wird keine Verbindung zu Servern von Google oder anderen Drittanbietern hergestellt.',
        ],
      },
      {
        heading: '9. Links zu externen Websites',
        paragraphs: [
          'Diese Website enthält Links zu GitHub und LinkedIn sowie zu meinen Projekten. Erst wenn du einen dieser Links anklickst, wirst du auf die Seite des jeweiligen Anbieters weitergeleitet. Ab diesem Zeitpunkt gelten die Datenschutzbestimmungen des jeweiligen Anbieters.',
        ],
      },
      {
        heading: '10. Deine Rechte',
        paragraphs: ['Du hast im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:'],
        list: [
          'Auskunft über deine gespeicherten Daten (Art. 15 DSGVO)',
          'Berichtigung unrichtiger Daten (Art. 16 DSGVO)',
          'Löschung deiner Daten (Art. 17 DSGVO)',
          'Einschränkung der Verarbeitung (Art. 18 DSGVO)',
          'Datenübertragbarkeit (Art. 20 DSGVO)',
          'Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)',
          'Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)',
          'Beschwerde bei einer Datenschutz-Aufsichtsbehörde (Art. 77 DSGVO)',
        ],
      },
      {
        heading: '',
        paragraphs: [`Für alle Fragen zum Datenschutz kannst du dich jederzeit an ${p.email} wenden.`],
      },
    ],
  },
  en: {
    title: 'Privacy policy',
    updated: 'Last updated: September 2026',
    sections: [
      {
        heading: '1. Privacy at a glance',
        paragraphs: [
          'Protecting your personal data is important to me. This privacy policy explains which personal data is processed when you visit this website, for what purpose and which rights you have. Personal data is any data that can be used to identify you personally.',
        ],
      },
      {
        heading: '2. Controller',
        paragraphs: [...address, `Email: ${p.email}`],
      },
      {
        heading: '3. Hosting',
        paragraphs: [
          `This website is hosted by the following provider: ${p.hosting.name}, ${p.hosting.address}. The host processes data exclusively on my behalf and according to my instructions. A data processing agreement in accordance with Art. 28 GDPR has been concluded with the host.`,
        ],
      },
      {
        heading: '4. Server log files',
        paragraphs: ['When you visit this website, the server automatically stores information transmitted by your browser:'],
        list: [
          'IP address (shortened or anonymised where technically possible)',
          'date and time of the request',
          'requested page or file',
          'browser type, browser version and operating system',
          'referrer URL (the previously visited page)',
        ],
      },
      {
        heading: '',
        paragraphs: [
          'This data is required for the secure and stable operation of the website. The legal basis is Art. 6 (1) (f) GDPR (legitimate interest in a technically error-free website and in defending against attacks). The log files are deleted after 14 days at the latest unless longer storage is required for evidence purposes.',
        ],
      },
      {
        heading: '5. Contact form',
        paragraphs: [
          'If you contact me via the contact form, your name, email address and message are transmitted to my server and forwarded to me by email. I use this data exclusively to answer your request.',
          'The legal basis is Art. 6 (1) (b) GDPR if your request is related to a contract or pre-contractual measures, and otherwise Art. 6 (1) (a) GDPR (your consent given via the checkbox). You can withdraw your consent at any time with effect for the future, e.g. by email.',
          'Your data will be deleted as soon as your request has been fully processed, unless statutory retention obligations apply. Your data will not be passed on to third parties.',
        ],
      },
      {
        heading: '6. SSL/TLS encryption',
        paragraphs: [
          'For security reasons, this website uses SSL/TLS encryption. You can recognise an encrypted connection by “https://” in the address bar of your browser. This means that data you send to me cannot be read by third parties.',
        ],
      },
      {
        heading: '7. Local storage of the language setting',
        paragraphs: [
          'This website does not use cookies or any tracking or analytics tools. To remember your selected language (German or English) for your next visit, it is saved in the local storage of your browser. This information never leaves your device and is not transmitted to me. Storing it is strictly necessary for the service you requested (§ 25 (2) No. 2 TDDDG). You can delete it at any time in your browser settings.',
        ],
      },
      {
        heading: '8. Fonts',
        paragraphs: [
          'The fonts used on this website (Quicksand and Fraunces) are hosted locally on my server. No connection to servers of Google or other third parties is established when you visit the site.',
        ],
      },
      {
        heading: '9. Links to external websites',
        paragraphs: [
          'This website contains links to GitHub, LinkedIn and my projects. You are only redirected to the respective provider when you click on one of these links. From then on, the privacy policy of that provider applies.',
        ],
      },
      {
        heading: '10. Your rights',
        paragraphs: ['Within the scope of the applicable legal provisions, you have the right at any time to:'],
        list: [
          'access your stored data (Art. 15 GDPR)',
          'rectification of incorrect data (Art. 16 GDPR)',
          'erasure of your data (Art. 17 GDPR)',
          'restriction of processing (Art. 18 GDPR)',
          'data portability (Art. 20 GDPR)',
          'object to processing (Art. 21 GDPR)',
          'withdraw your consent (Art. 7 (3) GDPR)',
          'lodge a complaint with a data protection supervisory authority (Art. 77 GDPR)',
        ],
      },
      {
        heading: '',
        paragraphs: [`If you have any questions about data protection, please contact me at ${p.email}.`],
      },
    ],
  },
};
