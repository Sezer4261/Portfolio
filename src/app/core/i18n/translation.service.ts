import { DOCUMENT, Injectable, effect, inject, signal } from '@angular/core';
import { Dictionary, Language, TRANSLATIONS } from './translations';

export type TranslationParams = Record<string, string | number>;

const STORAGE_KEY = 'portfolio-language';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly document = inject(DOCUMENT);
  readonly language = signal<Language>(this.initialLanguage());

  constructor() {
    effect(() => {
      const lang = this.language();
      this.document.documentElement.lang = lang;
      localStorage.setItem(STORAGE_KEY, lang);
    });
  }

  toggle(): void {
    this.language.update((lang) => (lang === 'de' ? 'en' : 'de'));
  }

  translate(key: string, params?: TranslationParams): string {
    const value = key
      .split('.')
      .reduce<string | Dictionary | undefined>(
        (node, part) => (typeof node === 'object' ? node[part] : undefined),
        TRANSLATIONS[this.language()],
      );
    if (typeof value !== 'string') return key;
    return params ? value.replace(/\{(\w+)\}/g, (match, name) => String(params[name] ?? match)) : value;
  }

  private initialLanguage(): Language {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'de' || stored === 'en') return stored;
    return navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en';
  }
}
