export interface Reference {
  /** Key inside `references.items.*` of the translations (quote and role). */
  key: string;
  name: string;
  linkedin: string;
}

/** Replace with real feedback from your team members (and ask them for permission). */
export const REFERENCES: Reference[] = [
  { key: 'first', name: 'Name Teammitglied 1', linkedin: 'https://www.linkedin.com/in/teammitglied-1/' },
  { key: 'second', name: 'Name Teammitglied 2', linkedin: 'https://www.linkedin.com/in/teammitglied-2/' },
  { key: 'third', name: 'Name Teammitglied 3', linkedin: 'https://www.linkedin.com/in/teammitglied-3/' },
];
