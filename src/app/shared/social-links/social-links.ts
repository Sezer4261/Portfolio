import { Component, input } from '@angular/core';
import { PROFILE } from '../../core/data/profile';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

/** Figma "Contact icons": outlined icons, orange-filled on hover. */
@Component({
  selector: 'app-social-links',
  imports: [TranslatePipe],
  template: `
    @for (link of links; track link.icon) {
      <a
        [href]="link.href"
        [attr.target]="link.external ? '_blank' : null"
        [attr.rel]="link.external ? 'noopener noreferrer' : null"
        [attr.aria-label]="link.label | t"
      >
        <img class="default" [src]="'assets/icons/contact/' + link.icon + '.svg'" alt="" width="20" height="20" />
        <img class="hover" [src]="'assets/icons/contact/' + link.icon + '-hover.svg'" alt="" width="20" height="20" />
      </a>
    }
  `,
  styles: `
    :host {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    a {
      display: grid;
      place-items: center;
      width: 32px;
      height: 32px;
    }

    img {
      grid-area: 1 / 1;
      transition: opacity var(--transition);
    }

    :host(.dark) img.default {
      filter: brightness(0.12);
    }

    .hover,
    a:hover .default {
      opacity: 0;
    }

    a:hover .hover {
      opacity: 1;
    }
  `,
  host: { '[class.dark]': 'dark()' },
})
export class SocialLinks {
  readonly dark = input(false);

  protected readonly links = [
    { icon: 'github', href: PROFILE.github, label: 'footer.github', external: true },
    { icon: 'linkedin', href: PROFILE.linkedin, label: 'footer.linkedin', external: true },
    { icon: 'mail', href: `mailto:${PROFILE.email}`, label: 'footer.mail', external: false },
  ];
}
