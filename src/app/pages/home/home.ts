import { Component, effect, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FULL_NAME } from '../../core/data/profile';
import { TranslationService } from '../../core/i18n/translation.service';
import { SectionDots } from '../../layout/section-dots/section-dots';
import { About } from '../../sections/about/about';
import { Contact } from '../../sections/contact/contact';
import { Hero } from '../../sections/hero/hero';
import { Portfolio } from '../../sections/portfolio/portfolio';
import { References } from '../../sections/references/references';
import { Skills } from '../../sections/skills/skills';

@Component({
  selector: 'app-home',
  imports: [Hero, About, Skills, Portfolio, References, Contact, SectionDots],
  template: `
    <main>
      <app-hero />
      <app-about />
      <app-skills />
      <app-portfolio />
      <app-references />
      <app-contact />
    </main>
    <app-section-dots />
  `,
})
export class Home {
  constructor() {
    const title = inject(Title);
    const i18n = inject(TranslationService);
    effect(() => title.setTitle(`${FULL_NAME} | ${i18n.translate('hero.role')}`));
  }
}
