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
      gap: 32px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    /* Subgrid rows keep names and quotes aligned across all cards. */
    .reference,
    .reference__card {
      display: grid;
      grid-row: span 2;
      grid-template-rows: subgrid;
      row-gap: 16px;
    }

    .reference__card {
      position: relative;
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

    @media (max-width: 1023px) {
      .references {
        grid-template-columns: 1fr;
        row-gap: 24px;
      }
    }

    @media (max-width: 767px) {
      h2 {
        margin-bottom: 40px;
      }

      .reference__card {
        padding: 32px 24px;
      }
    }
  `,
})
export class References {
  protected readonly references = REFERENCES;
}
