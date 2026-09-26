import { Component, computed, effect, inject, input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FULL_NAME } from '../../core/data/profile';
import { IMPRINT, LegalText, PRIVACY_POLICY } from '../../core/i18n/legal-texts';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { TranslationService } from '../../core/i18n/translation.service';
import { Language } from '../../core/i18n/translations';
import { SectionDirective } from '../../core/sections/section.directive';

const TEXTS: Record<string, Record<Language, LegalText>> = {
  imprint: IMPRINT,
  privacy: PRIVACY_POLICY,
};

@Component({
  selector: 'app-legal',
  imports: [RouterLink, TranslatePipe, SectionDirective],
  template: `
    <main appSection="legal" theme="cream" class="section legal">
      <article class="container legal__inner">
        <h1>{{ text().title }}</h1>

        @for (section of text().sections; track $index) {
          <section>
            @if (section.heading) {
              <h2>{{ section.heading }}</h2>
            }
            @for (paragraph of section.paragraphs; track $index) {
              <p>{{ paragraph }}</p>
            }
            @if (section.list) {
              <ul>
                @for (item of section.list; track $index) {
                  <li>{{ item }}</li>
                }
              </ul>
            }
          </section>
        }

        <p class="legal__updated">{{ text().updated }}</p>
        <a class="legal__back" routerLink="/">{{ 'legal.back' | t }}</a>
      </article>
    </main>
  `,
  styles: `
    .legal {
      min-height: 100vh;
    }

    .legal__inner {
      max-width: 820px;
      overflow-wrap: anywhere;
    }

    h1 {
      margin-bottom: 48px;
      font-size: clamp(2.5rem, 4.5vw, 4rem);
    }

    section {
      margin-bottom: 24px;
    }

    h2 {
      margin-bottom: 8px;
      font-family: var(--font-text);
      font-size: 22px;
    }

    p,
    li {
      font-size: 16px;
      line-height: 1.6;
    }

    ul {
      margin: 8px 0 0;
      padding-left: 20px;
    }

    .legal__updated {
      margin-top: 40px;
      font-style: italic;
    }

    .legal__back {
      display: inline-block;
      margin-top: 24px;
      color: var(--c-orange);
      font-weight: 700;

      &:hover {
        text-decoration: underline;
      }
    }
  `,
})
export class Legal {
  private readonly i18n = inject(TranslationService);
  private readonly title = inject(Title);

  /** Bound from the route data. */
  readonly page = input.required<'imprint' | 'privacy'>();
  protected readonly text = computed(() => TEXTS[this.page()][this.i18n.language()]);

  constructor() {
    effect(() => this.title.setTitle(`${this.text().title} | ${FULL_NAME}`));
  }
}
