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
        >
          <span class="label" aria-hidden="true">{{ link.label | t }}</span>
        </button>
      }
    </nav>
  `,
  styles: `
    :host {
      position: fixed;
      top: 50%;
      right: max(12px, (100vw - 1320px) / 2);
      z-index: 90;
      color: var(--c-cream);
      transform: translateY(-50%);
      transition: color var(--transition);

      @media (max-width: 1023px) {
        display: none;
      }
    }

    :host(.on-cream) {
      color: var(--c-dark);
    }

    nav {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    button {
      position: relative;
      display: grid;
      place-items: center;
      width: 32px;
      height: 32px;

      &::before {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: currentColor;
        transition:
          transform var(--transition),
          background-color var(--transition),
          border-radius var(--transition);
      }

      &:hover::before,
      &:focus-visible::before {
        transform: scale(1.4);
      }

      &.active::before {
        border-radius: 1px;
        background-color: var(--c-orange);
        transform: rotate(45deg) scale(1.3);
      }
    }

    .label {
      position: absolute;
      top: 50%;
      right: 100%;
      padding: 4px 10px;
      border-radius: 16px;
      background-color: var(--c-dark);
      color: var(--c-cream);
      font-size: 14px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transform: translate(8px, -50%);
      transition:
        opacity var(--transition),
        transform var(--transition);

      button:hover &,
      button:focus-visible & {
        opacity: 1;
        transform: translate(0, -50%);
      }
    }

    :host(.on-cream) .label {
      background-color: var(--c-blue);
    }
  `,
  host: { '[class.on-cream]': 'sections.activeTheme() === "cream"' },
})
export class SectionDots {
  protected readonly sections = inject(SectionService);
  protected readonly navigation = inject(NavigationService);
  protected readonly links = [{ id: 'home', label: 'nav.home' }, ...SECTION_LINKS];
}
