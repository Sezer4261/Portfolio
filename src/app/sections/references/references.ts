import { Component } from '@angular/core';
import { REFERENCES } from '../../core/data/references';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { SectionDirective } from '../../core/sections/section.directive';
import { Star } from '../../shared/star/star';

@Component({
  selector: 'app-references',
  imports: [TranslatePipe, SectionDirective, Star],
  template: `
    <section appSection="references" theme="blue" class="section">
      <div class="container">
        <h2>{{ 'references.title' | t }}</h2>

        <ul class="references">
          @for (reference of references; track reference.key) {
            <li class="reference">
              <figure class="reference__card">
                <app-star class="reference__star" />
                <figcaption class="reference__name">{{ reference.name }}</figcaption>
                <blockquote>{{ 'references.items.' + reference.key + '.quote' | t }}</blockquote>
              </figure>
              @if (reference.linkedin) {
                <a
                  class="reference__link"
                  [href]="reference.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  [attr.aria-label]="'references.linkedinLabel' | t: { name: reference.name }"
                >
                  {{ 'references.linkedin' | t }}
                </a>
              }
            </li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    h2 {
      margin-bottom: 64px;
    }

    .references {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: start;
      gap: 32px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .reference {
      display: flex;
      flex-direction: column;
      gap: 32px;

      &:nth-child(2) {
        margin-top: 48px;
      }

      &:nth-child(3) {
        margin-top: 120px;
      }
    }

    .reference__card {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin: 0;
      padding: 40px 36px;
      border: 1px solid var(--c-cream);
      border-radius: var(--radius);
      font-size: 16px;
    }

    .reference__star {
      position: absolute;
      top: 32px;
      right: 32px;
      width: 40px;
      color: var(--c-orange);
      opacity: 0;
      transform: scale(0.4) rotate(-90deg);
      transition:
        opacity var(--transition),
        transform 400ms ease-out;
    }

    .reference:hover .reference__star {
      opacity: 1;
      transform: none;
    }

    .reference__name {
      padding-right: 40px;
      font-size: 24px;
      font-weight: 700;
    }

    blockquote {
      margin: 0;
    }

    .reference__link {
      align-self: flex-end;
      font-size: 18px;
      font-weight: 700;
      transition: color var(--transition);

      &:hover {
        color: var(--c-orange);
      }
    }

    @media (max-width: 1023px) {
      .references {
        grid-template-columns: 1fr;
        max-width: 560px;
      }

      .reference:nth-child(n) {
        margin-top: 0;
      }

      .reference:nth-child(2) {
        margin-left: 10%;
      }
    }

    @media (max-width: 767px) {
      h2 {
        margin-bottom: 40px;
      }

      .reference__card {
        padding: 32px 24px;
      }

      .reference:nth-child(2) {
        margin-left: 0;
      }
    }
  `,
})
export class References {
  protected readonly references = REFERENCES;
}
