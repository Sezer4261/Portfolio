export interface Reference {
  /** Key inside `references.items.*` of the translations. */
  key: string;
  name: string;
}

export const REFERENCES: Reference[] = [
  { key: 'first', name: 'Andreas Schmidt' },
  { key: 'second', name: 'Wladimir Belger' },
  { key: 'third', name: 'Wolfgang Bundesmann' },
];
