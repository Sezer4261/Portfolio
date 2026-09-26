import { Component, computed, signal } from '@angular/core';
import { PROJECTS } from '../../core/data/projects';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { SectionDirective } from '../../core/sections/section.directive';
import { ArrowIcon } from '../../shared/arrow-icon/arrow-icon';
import { Star } from '../../shared/star/star';

@Component({
  selector: 'app-portfolio',
  imports: [TranslatePipe, SectionDirective, ArrowIcon, Star],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  protected readonly projects = PROJECTS;
  protected readonly index = signal(0);
  protected readonly current = computed(() => this.projects[this.index()]);
  protected readonly capsuleOpen = signal(false);

  protected previous(): void {
    this.show(this.index() - 1);
  }

  protected next(): void {
    this.show(this.index() + 1);
  }

  private show(index: number): void {
    const total = this.projects.length;
    this.capsuleOpen.set(false);
    this.index.set((index + total) % total);
  }
}
