export type Language = 'de' | 'en';

export interface Dictionary {
  [key: string]: string | Dictionary;
}

const en = {
  nav: {
    about: 'About me',
    skills: 'Skills',
    portfolio: 'Portfolio',
    references: 'References',
    contact: 'Contact me',
    home: 'Home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchLanguage: 'Deutsch',
    sectionNav: 'Section navigation',
    goTo: 'Go to section {section}',
  },
  hero: {
    greeting: "Hello there! I'm",
    role: 'Frontend Developer',
    cta: "Let's talk",
    scrollDown: 'Scroll down',
    photoAlt: 'Portrait of {name}',
  },
  about: {
    title: 'About me',
    intro:
      "Hi, I'm Sezer. With more than 10 years of experience in retail, inside sales, logistics management and IT system management, I bring a rare combination to software development: a deep understanding of business processes, customer needs and team leadership, paired with modern tech skills.",
    learning:
      "I'm currently completing my intensive frontend training at the Developer Akademie. On the home stretch to my certificate, I'm eager to merge my business mindset with clean code and build digital products that don't just work, but deliver real business value.",
    remote:
      "I'm looking for my start as a Junior Frontend Developer in a dynamic, agile team. Having led a shop and a warehouse logistics team, I know how to structure projects and take responsibility. I'm 100% remote-proven, disciplined and globally flexible, so I'm aiming for a location-independent remote position.",
    cta: "Let's talk",
    photoAlt: 'Portrait of {name}',
  },
  skills: {
    title: 'Core Competencies',
    text:
      'These are the technologies I use to build responsive web applications, from vanilla JavaScript to TypeScript, Angular and React. My training as a retail salesman and my years in IT system management help me look at every application from the perspective of the business and its users.',
    growth: 'Growth mindset',
    growthTitle: 'Looking for another skill?',
    growthText: 'Feel free to contact me. I have a special interest in learning:',
  },
  portfolio: {
    title: 'My work',
    intro: 'Explore a selection of my work here. Interact with the projects to see my skills in action.',
    previous: '<< Previous project',
    next: 'Next project >>',
    github: 'GitHub',
    live: 'Live Test',
    participation: 'Show my part in {project}',
    previewAlt: 'Preview of the project {project}',
    counter: 'Project {current} of {total}',
  },
  projects: {
    'el-pollo-loco': {
      description:
        'A 2D jump-and-run browser game based on object-oriented JavaScript. Help Pepe run through the desert, collect coins and salsa bottles and defeat the final boss.',
      participation:
        'I built the game with ES6 classes on HTML5 Canvas: parallax scrolling, collision detection, enemies and final boss, status bars, sound and fullscreen, plus keyboard and touch controls for desktop and mobile.',
    },
    'poll-app': {
      description:
        'A survey app built with Angular. Create surveys, vote and follow the results live, sorted into active, ending-soon and past surveys.',
      participation:
        'I implemented the app with Angular Signals, routing, custom pipes and overlays. The data layer is Supabase-ready with real-time results and falls back to localStorage.',
    },
    join: {
      description:
        'Task manager inspired by the Kanban system. Create and organize tasks using drag and drop, assign contacts and keep an eye on deadlines in the summary.',
      participation:
        'Developed as a team. The app includes registration and login, a Kanban board with drag and drop, contact management and a summary dashboard, backed by Firebase.',
    },
  },
  references: {
    title: 'What my colleagues say about me',
    items: {
      first: {
        quote:
          '“Star for outstanding commitment” – Thank you for your support. You are a big part of our team and we can always count on you.',
      },
      second: {
        quote:
          'Mr. Ünaldi has extremely comprehensive and well-founded expertise and puts it into practice excellently. Efficient, determined and meticulous.',
      },
      third: {
        quote:
          'Despite a completely new industry and new challenges, Mr. Ünaldi grew quickly and mastered everything in a short time. He carried out all tasks confidently, competently, independently and to our complete satisfaction.',
      },
    },
  },
  contact: {
    title: "Let's build something cool together!",
    subtitle: 'Got a problem to solve?',
    text: 'Contact me through this form. I am looking forward to hearing from you, getting to know your ideas and contributing to your projects with my work.',
    cta: 'Need a frontend developer?',
    ctaLink: "Let's talk!",
    name: {
      label: "What's your name?",
      placeholder: 'Your name goes here',
      required: 'Oops! It seems your name is missing',
      minlength: 'Please enter at least 2 characters',
    },
    email: {
      label: "What's your email?",
      placeholder: 'youremail@email.com',
      required: 'Hoppla! Your email is required',
      invalid: 'Please enter a valid email address',
    },
    message: {
      label: 'How can I help you?',
      placeholder: 'Hello {firstName}, I am interested in…',
      required: 'What do you need to develop?',
      minlength: 'Please write at least 10 characters',
    },
    privacy: {
      before: "I've read the",
      link: 'privacy policy',
      after: 'and agree to the processing of my data.',
      required: 'Please accept the privacy policy.',
    },
    submit: 'Drop a Line',
    sending: 'Sending…',
    success: 'Thank you! Your message has been sent. I will get back to you soon.',
    error: 'Something went wrong. Please try again later or send me an email to {email}.',
    close: 'Close notification',
  },
  footer: {
    copyright: '© {name} {year}',
    imprint: 'Legal notice',
    privacy: 'Privacy policy',
    top: 'Back to top',
    github: 'GitHub profile',
    linkedin: 'LinkedIn profile',
    mail: 'Send email',
  },
  legal: {
    back: 'Back to home page',
  },
};

const de: typeof en = {
  nav: {
    about: 'Über mich',
    skills: 'Skills',
    portfolio: 'Portfolio',
    references: 'Referenzen',
    contact: 'Kontakt',
    home: 'Startseite',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    switchLanguage: 'English',
    sectionNav: 'Abschnittsnavigation',
    goTo: 'Zum Abschnitt {section}',
  },
  hero: {
    greeting: 'Hallo! Ich bin',
    role: 'Frontend Developer',
    cta: 'Lass uns reden',
    scrollDown: 'Nach unten',
    photoAlt: 'Porträt von {name}',
  },
  about: {
    title: 'Über mich',
    intro:
      'Hi, ich bin Sezer. Mit über 10 Jahren Erfahrung in Einzelhandel, Vertriebsinnendienst, Logistikmanagement und IT-Systemmanagement bringe ich eine seltene Kombination in die Softwareentwicklung: ein tiefes Verständnis für Geschäftsprozesse, Kundenbedürfnisse und Teamführung, gepaart mit moderner Tech-Expertise.',
    learning:
      'Aktuell finalisiere ich meine intensive Weiterbildung im Frontend-Bereich bei der Developer Akademie. Im Endspurt zum Zertifikat brenne ich darauf, mein kaufmännisches Denken mit sauberem Code zu verschmelzen – für digitale Produkte, die nicht nur funktionieren, sondern echten Business-Wert liefern.',
    remote:
      'Ich suche den Einstieg als Junior Frontend Developer in einem dynamischen, agilen Team. Als Shop Lead und Führungskraft in der Lagerlogistik habe ich gelernt, Projekte zu strukturieren und Verantwortung zu übernehmen. Da ich zu 100 % remote-erprobt, diszipliniert und global flexibel bin, strebe ich eine ortsunabhängige Remote-Position an.',
    cta: 'Lass uns reden',
    photoAlt: 'Porträt von {name}',
  },
  skills: {
    title: 'Meine Kompetenzen',
    text:
      'Mit diesen Technologien baue ich responsive Webanwendungen – von Vanilla JavaScript über TypeScript bis zu Angular und React. Meine Ausbildung zum Einzelhandelskaufmann und die Jahre im IT-Systemmanagement helfen mir, jede Anwendung aus Sicht des Unternehmens und seiner Nutzer zu betrachten.',
    growth: 'Growth Mindset',
    growthTitle: 'Du suchst einen anderen Skill?',
    growthText: 'Sprich mich gerne an. Besonders interessiert mich gerade:',
  },
  portfolio: {
    title: 'Meine Arbeiten',
    intro: 'Hier findest du eine Auswahl meiner Projekte. Probiere sie aus und erlebe meine Fähigkeiten in Aktion.',
    previous: '<< Vorheriges Projekt',
    next: 'Nächstes Projekt >>',
    github: 'GitHub',
    live: 'Live-Test',
    participation: 'Meinen Anteil an {project} anzeigen',
    previewAlt: 'Vorschau des Projekts {project}',
    counter: 'Projekt {current} von {total}',
  },
  projects: {
    'el-pollo-loco': {
      description:
        'Ein 2D-Jump-and-Run-Browserspiel auf Basis objektorientierter Programmierung. Hilf Pepe, durch die Wüste zu laufen, Münzen und Salsa-Flaschen zu sammeln und den Endboss zu besiegen.',
      participation:
        'Ich habe das Spiel mit ES6-Klassen auf HTML5-Canvas umgesetzt: Parallax-Scrolling, Kollisionserkennung, Gegner und Endboss, Statusleisten, Sound und Vollbild sowie Tastatur- und Touch-Steuerung für Desktop und Handy.',
    },
    'poll-app': {
      description:
        'Eine Umfrage-App mit Angular. Erstelle Umfragen, stimme ab und verfolge die Ergebnisse live – sortiert nach aktiven, bald endenden und vergangenen Umfragen.',
      participation:
        'Ich habe die App mit Angular Signals, Routing, eigenen Pipes und Overlays umgesetzt. Die Datenschicht ist für Supabase mit Echtzeit-Ergebnissen vorbereitet und nutzt sonst localStorage.',
    },
    join: {
      description:
        'Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstelle und organisiere Aufgaben per Drag-and-drop, weise Kontakte zu und behalte Deadlines in der Übersicht im Blick.',
      participation:
        'Im Team entwickelt. Die App umfasst Registrierung und Login, ein Kanban-Board mit Drag-and-drop, eine Kontaktverwaltung und ein Summary-Dashboard – mit Firebase als Backend.',
    },
  },
  references: {
    title: 'Was meine Kollegen über mich sagen',
    items: {
      first: {
        quote:
          '„Star für außergewöhnlichen Einsatz“ – Vielen Dank für deine Unterstützung. Du bist ein großer Teil unseres Teams und wir können immer auf dich zählen.',
      },
      second: {
        quote:
          'Herr Ünaldi verfügt über ein äußerst umfassendes und sehr fundiertes Fachwissen und setzt es hervorragend in die Praxis um. Effizient, zielstrebig und sorgfältig.',
      },
      third: {
        quote:
          'Trotz komplett neuer Branche und Herausforderungen ist Herr Ünaldi rasch gewachsen und beherrschte alles in kurzer Zeit. Er hat alles sicher, kompetent, eigenverantwortlich und mit voller Zufriedenheit ausgeführt.',
      },
    },
  },
  contact: {
    title: 'Lass uns gemeinsam etwas Cooles bauen!',
    subtitle: 'Hast du ein Problem zu lösen?',
    text: 'Schreib mir über dieses Formular. Ich freue mich darauf, von dir zu hören, deine Ideen kennenzulernen und deine Projekte mit meiner Arbeit zu unterstützen.',
    cta: 'Du suchst Verstärkung im Frontend?',
    ctaLink: 'Melde dich!',
    name: {
      label: 'Wie heißt du?',
      placeholder: 'Dein Name',
      required: 'Hoppla! Dein Name fehlt noch',
      minlength: 'Bitte gib mindestens 2 Zeichen ein',
    },
    email: {
      label: 'Wie lautet deine E-Mail?',
      placeholder: 'deine@email.de',
      required: 'Hoppla! Deine E-Mail-Adresse fehlt noch',
      invalid: 'Bitte gib eine gültige E-Mail-Adresse ein',
    },
    message: {
      label: 'Wie kann ich dir helfen?',
      placeholder: 'Hallo {firstName}, ich interessiere mich für …',
      required: 'Was möchtest du entwickeln?',
      minlength: 'Bitte schreib mindestens 10 Zeichen',
    },
    privacy: {
      before: 'Ich habe die',
      link: 'Datenschutzerklärung',
      after: 'gelesen und stimme der Verarbeitung meiner Daten zu.',
      required: 'Bitte akzeptiere die Datenschutzerklärung.',
    },
    submit: 'Nachricht senden',
    sending: 'Wird gesendet …',
    success: 'Vielen Dank! Deine Nachricht wurde verschickt. Ich melde mich so schnell wie möglich bei dir.',
    error: 'Da ist leider etwas schiefgelaufen. Bitte versuche es später erneut oder schreib mir eine E-Mail an {email}.',
    close: 'Hinweis schließen',
  },
  footer: {
    copyright: '© {name} {year}',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    top: 'Nach oben',
    github: 'GitHub-Profil',
    linkedin: 'LinkedIn-Profil',
    mail: 'E-Mail schreiben',
  },
  legal: {
    back: 'Zurück zur Startseite',
  },
};

export const TRANSLATIONS: Record<Language, Dictionary> = { de, en };
