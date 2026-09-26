import { Component, DOCUMENT, computed, effect, inject, signal } from '@angular/core';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { TranslationService } from '../../core/i18n/translation.service';
import { NavigationService, SECTION_LINKS } from '../../core/sections/navigation.service';
import { SectionService } from '../../core/sections/section.service';
import { Logo } from '../../shared/logo/logo';
import { SocialLinks } from '../../shared/social-links/social-links';
import { Star } from '../../shared/star/star';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe, Logo, SocialLinks, Star],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  host: {
    '[class]': '"theme-" + theme()',
    '[class.menu-open]': 'menuOpen()',
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class Header {
  private readonly sections = inject(SectionService);
  private readonly navigation = inject(NavigationService);
  private readonly document = inject(DOCUMENT);
  protected readonly i18n = inject(TranslationService);

  protected readonly links = SECTION_LINKS;
  protected readonly theme = this.sections.activeTheme;
  protected readonly menuOpen = signal(false);
  protected readonly languageCode = computed(() => this.i18n.language().toUpperCase());

  constructor() {
    effect(() => this.document.body.classList.toggle('no-scroll', this.menuOpen()));
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected goTo(id: string, event?: Event): void {
    event?.preventDefault();
    this.closeMenu();
    this.navigation.goTo(id);
  }
}
