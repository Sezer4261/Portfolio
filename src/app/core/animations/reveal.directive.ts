import { Directive, ElementRef, OnDestroy, OnInit, inject, input, signal } from '@angular/core';

export type RevealDirection = 'up' | 'left' | 'right' | 'zoom';

/** Fades the element in once it scrolls into view (styles: `.reveal` in styles.scss). */
@Directive({
  selector: '[appReveal]',
  host: {
    '[class]': '"reveal reveal--" + (appReveal() || "up")',
    '[class.revealed]': 'revealed()',
    '[style.--reveal-delay.ms]': 'revealDelay()',
  },
})
export class RevealDirective implements OnInit, OnDestroy {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private observer?: IntersectionObserver;

  readonly appReveal = input<RevealDirection | ''>('');
  readonly revealDelay = input(0);
  protected readonly revealed = signal(false);

  ngOnInit(): void {
    if (typeof IntersectionObserver === 'undefined') {
      this.revealed.set(true);
      return;
    }
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        this.revealed.set(true);
        this.observer?.disconnect();
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    this.observer.observe(this.element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
