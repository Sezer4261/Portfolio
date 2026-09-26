import { DOCUMENT, Injectable, inject, signal } from '@angular/core';

export type SectionTheme = 'blue' | 'cream' | 'dark';

interface RegisteredSection {
  id: string;
  theme: SectionTheme;
  element: HTMLElement;
}

/** Tracks which section is currently behind the fixed header. */
@Injectable({ providedIn: 'root' })
export class SectionService {
  private readonly document = inject(DOCUMENT).documentElement;
  private readonly window = inject(DOCUMENT).defaultView!;
  private readonly sections: RegisteredSection[] = [];
  private frame = 0;

  readonly activeId = signal('');
  readonly activeTheme = signal<SectionTheme>('blue');

  constructor() {
    this.window.addEventListener('scroll', () => this.schedule(), { passive: true });
    this.window.addEventListener('resize', () => this.schedule(), { passive: true });
  }

  register(section: RegisteredSection): void {
    this.sections.push(section);
    this.schedule();
  }

  unregister(element: HTMLElement): void {
    const index = this.sections.findIndex((section) => section.element === element);
    if (index > -1) this.sections.splice(index, 1);
  }

  private schedule(): void {
    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => this.update());
  }

  private update(): void {
    const behindHeader = this.sectionAt(40);
    const atBottom = this.window.scrollY + this.window.innerHeight >= this.document.scrollHeight - 2;
    const inFocus = atBottom ? this.sections.at(-1) : this.sectionAt(this.window.innerHeight / 2);
    if (behindHeader) this.activeTheme.set(behindHeader.theme);
    if (inFocus) this.activeId.set(inFocus.id);
  }

  private sectionAt(y: number): RegisteredSection | undefined {
    return this.sections.find(({ element }) => {
      const rect = element.getBoundingClientRect();
      return rect.top <= y && rect.bottom > y;
    });
  }
}
