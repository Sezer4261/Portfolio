import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FULL_NAME } from '../../core/data/profile';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { NavigationService } from '../../core/sections/navigation.service';
import { ArrowIcon } from '../../shared/arrow-icon/arrow-icon';
import { Logo } from '../../shared/logo/logo';
import { SocialLinks } from '../../shared/social-links/social-links';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive, TranslatePipe, Logo, SocialLinks, ArrowIcon],
  template: `
    <footer class="container footer">
      <a class="footer__logo" href="/" (click)="$event.preventDefault(); navigation.goTo('home')" [attr.aria-label]="'nav.home' | t">
        <app-logo />
      </a>
      <p class="footer__copyright">{{ 'footer.copyright' | t: { name: fullName, year: year } }}</p>
      <app-social-links class="footer__social" />
      <nav class="footer__legal">
        <a routerLink="/imprint" routerLinkActive="active">{{ 'footer.imprint' | t }}</a>
        <a routerLink="/privacy-policy" routerLinkActive="active">{{ 'footer.privacy' | t }}</a>
      </nav>
      <button type="button" class="btn footer__top" (click)="scrollTop()">
        {{ 'footer.top' | t }} <app-arrow-icon />
      </button>
    </footer>
  `,
  styles: `
    :host {
      display: block;
      background-color: var(--c-dark);
      color: var(--c-cream);
    }

    .footer {
      display: grid;
      grid-template-columns: auto 1fr auto auto auto;
      align-items: center;
      gap: 32px;
      padding-block: 32px;
      border-top: 1px solid color-mix(in srgb, var(--c-cream) 20%, transparent);
      font-size: 16px;
    }

    .footer__logo app-logo {
      font-size: 22px;
    }

    .footer__legal {
      display: flex;
      gap: 24px;

      a {
        transition: color var(--transition);

        &:hover,
        &.active {
          color: var(--c-orange);
        }
      }
    }

    .footer__top app-arrow-icon {
      display: contents;
    }

    .footer__top ::ng-deep svg {
      transform: rotate(-90deg);
    }

    .footer__top:hover ::ng-deep svg {
      transform: rotate(-90deg) translateX(2px);
    }

    @media (max-width: 1023px) {
      .footer {
        grid-template-columns: 1fr 1fr;
        gap: 24px;
      }

      .footer__social,
      .footer__legal,
      .footer__top {
        justify-self: end;
      }
    }

    @media (max-width: 767px) {
      .footer {
        grid-template-columns: 1fr;
        justify-items: center;
        text-align: center;
      }

      .footer__social,
      .footer__legal,
      .footer__top {
        justify-self: center;
      }
    }
  `,
})
export class Footer {
  protected readonly navigation = inject(NavigationService);
  protected readonly fullName = FULL_NAME;
  protected readonly year = new Date().getFullYear();

  protected scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
