import { Component, signal } from '@angular/core';
import { LEARNING_SKILLS, SKILLS } from '../../core/data/skills';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { SectionDirective } from '../../core/sections/section.directive';
import { Star } from '../../shared/star/star';

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe, SectionDirective, Star],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly skills = SKILLS;
  protected readonly learning = LEARNING_SKILLS;
  protected readonly growthOpen = signal(false);
}
