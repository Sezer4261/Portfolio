import { Component } from '@angular/core';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { SectionDirective } from '../../core/sections/section.directive';
import { Star } from '../../shared/star/star';
import { ContactForm } from './contact-form/contact-form';

@Component({
  selector: 'app-contact',
  imports: [TranslatePipe, SectionDirective, Star, ContactForm],
  template: `
    <section appSection="contact" theme="dark" class="section contact">
      <div class="container contact__inner">
        <div class="contact__intro">
          <h2>{{ 'contact.title' | t }}</h2>
          <p class="contact__subtitle">{{ 'contact.subtitle' | t }}</p>
          <p>{{ 'contact.text' | t }}</p>
          <p>
            <strong>{{ 'contact.cta' | t }}</strong>
            {{ ' ' }}
            <a class="text-link" href="#contact-form" (click)="focusForm($event)">{{ 'contact.ctaLink' | t }}</a>
          </p>
        </div>

        <app-contact-form id="contact-form" class="contact__form" />
      </div>

      <div class="contact__stars" aria-hidden="true">
        <app-star class="contact__star contact__star--blue" />
        <app-star class="contact__star contact__star--orange" />
      </div>
    </section>
  `,
  styles: `
    .contact {
      overflow: hidden;
      padding-bottom: 240px;
    }

    .contact__inner {
      display: grid;
      grid-template-columns: 5fr 7fr;
      gap: 64px;
    }

    .contact__intro {
      display: flex;
      flex-direction: column;
      gap: 24px;
      font-size: 16px;

      h2 {
        margin-bottom: 24px;
        color: var(--c-orange);
      }
    }

    .contact__subtitle {
      color: var(--c-yellow);
      font-size: 24px;
      font-weight: 700;
    }

    .contact__form {
      align-self: end;
      display: block;
    }

    .contact__stars {
      position: absolute;
      bottom: 24px;
      left: max(var(--gutter), (100vw - 1440px) / 2);
      width: 260px;
      height: 180px;
      pointer-events: none;
    }

    .contact__star {
      position: absolute;
      animation: spin 30s linear infinite;
    }

    .contact__star--blue {
      bottom: 30px;
      left: 110px;
      width: 150px;
      color: var(--c-blue);
      animation-direction: reverse;
    }

    .contact__star--orange {
      bottom: 0;
      left: 0;
      width: 180px;
      color: var(--c-orange);
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    @media (max-width: 1023px) {
      .contact__inner {
        grid-template-columns: 1fr;
        gap: 48px;
      }

      .contact {
        padding-bottom: 190px;
      }

      .contact__stars {
        transform: scale(0.7);
        transform-origin: bottom left;
      }
    }
  `,
})
export class Contact {
  protected focusForm(event: Event): void {
    event.preventDefault();
    document.querySelector<HTMLInputElement>('#contact-form input')?.focus();
  }
}
