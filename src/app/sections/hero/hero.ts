import { Component, inject } from '@angular/core';
import { FULL_NAME, PROFILE } from '../../core/data/profile';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { NavigationService } from '../../core/sections/navigation.service';
import { SectionDirective } from '../../core/sections/section.directive';
import { Star } from '../../shared/star/star';

@Component({
  selector: 'app-hero',
  imports: [TranslatePipe, SectionDirective, Star],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly navigation = inject(NavigationService);
  protected readonly profile = PROFILE;
  protected readonly fullName = FULL_NAME;
}
