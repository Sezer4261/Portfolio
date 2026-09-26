import { Component, inject } from '@angular/core';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { NavigationService, SECTION_LINKS } from '../../core/sections/navigation.service';
import { SectionService } from '../../core/sections/section.service';

@Component({
  selector: 'app-section-dots',
  imports: [TranslatePipe],
  template: `
    <nav [attr.aria-label]="'nav.sectionNav' | t">
      @for (link of links; track link.id) {
        <button
          type="button"
          [class.active]="sections.activeId() === link.id"
          [attr.aria-current]="sections.activeId() === link.id ? 'true' : null"
          [attr.aria-label]="'nav.goTo' | t: { section: (link.label | t) }"
          (click)="navigation.goTo(link.id)"
        ></button>
      }
    </nav>
  `,
  styles: `
    :host {
      position: fixed;
      top: 50%;
      right: max(20px, (100vw - 1320px) / 2);
      z-index: 90;
      color: var(--c-cream);
      transform: translateY(-50%);
      transition: color var(--transition);

      @media (max-width: 1279px) {
        display: none;
      }
    }

    :host(.on-cream) {
      color: var(--c-dark);
    }

    nav {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    button {
      display: grid;
      place-items: center;
      width: 24px;
      height: 24px;

      &::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: currentColor;
        transition:
          transform var(--transition),
          background-color var(--transition),
          border-radius var(--transition);
      }

      &:hover::before {
        transform: scale(1.5);
      }

      &.active::before {
        border-radius: 1px;
        background-color: var(--c-orange);
        transform: rotate(45deg) scale(1.2);
      }
    }
  `,
  host: { '[class.on-cream]': 'sections.activeTheme() === "cream"' },
})
export class SectionDots {
  protected readonly sections = inject(SectionService);
  protected readonly navigation = inject(NavigationService);
  protected readonly links = [{ id: 'home', label: 'nav.home' }, ...SECTION_LINKS];
}
