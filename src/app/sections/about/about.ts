import { Component, inject } from '@angular/core';
import { FULL_NAME, PROFILE } from '../../core/data/profile';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { NavigationService } from '../../core/sections/navigation.service';
import { RevealDirective } from '../../core/animations/reveal.directive';
import { SectionDirective } from '../../core/sections/section.directive';
import { Star } from '../../shared/star/star';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe, SectionDirective, RevealDirective, Star],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly navigation = inject(NavigationService);
  protected readonly profile = PROFILE;
  protected readonly fullName = FULL_NAME;
}
