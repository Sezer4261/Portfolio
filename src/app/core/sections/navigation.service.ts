import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

export const SECTION_LINKS = [
  { id: 'about', label: 'nav.about' },
  { id: 'skills', label: 'nav.skills' },
  { id: 'portfolio', label: 'nav.portfolio' },
  { id: 'references', label: 'nav.references' },
  { id: 'contact', label: 'nav.contact' },
];

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);

  /** Scrolls to a section of the home page, navigating there first if necessary. */
  goTo(id: string): void {
    const target = this.document.getElementById(id);
    if (target && this.router.url.split('#')[0] === '/') {
      target.scrollIntoView({ behavior: 'smooth' });
      history.replaceState(null, '', id === 'home' ? '/' : `/#${id}`);
      return;
    }
    this.router.navigate(['/'], { fragment: id === 'home' ? undefined : id });
  }
}
