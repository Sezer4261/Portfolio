import { Component, DOCUMENT, ElementRef, OnDestroy, inject, signal, viewChild } from '@angular/core';

/** Figma "Cursor Pro tip": the dot is the cursor, the outline circle follows it. */
@Component({
  selector: 'app-cursor',
  template: `
    @if (enabled) {
      <div #ring class="ring" [class.active]="hovering()" [class.hidden]="hidden()"></div>
      <div #dot class="dot" [class.hidden]="hidden()"></div>
    }
  `,
  styles: `
    .dot,
    .ring {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
      border-radius: 50%;
      pointer-events: none;
      mix-blend-mode: difference;
      transition:
        opacity var(--transition),
        width var(--transition),
        height var(--transition),
        margin var(--transition);
    }

    .dot {
      width: 8px;
      height: 8px;
      margin: -4px 0 0 -4px;
      background-color: var(--c-cream);
    }

    .ring {
      width: 36px;
      height: 36px;
      margin: -18px 0 0 -18px;
      border: 1px solid var(--c-cream);
    }

    .ring.active {
      width: 56px;
      height: 56px;
      margin: -28px 0 0 -28px;
    }

    .hidden {
      opacity: 0;
    }
  `,
})
export class Cursor implements OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly window = this.document.defaultView!;
  private readonly dot = viewChild<ElementRef<HTMLElement>>('dot');
  private readonly ring = viewChild<ElementRef<HTMLElement>>('ring');

  protected readonly enabled =
    this.window.matchMedia('(pointer: fine)').matches &&
    !this.window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  protected readonly hovering = signal(false);
  protected readonly hidden = signal(true);

  private target = { x: 0, y: 0 };
  private ringPosition = { x: 0, y: 0 };
  private frame = 0;

  private readonly onMove = (event: MouseEvent) => {
    this.target = { x: event.clientX, y: event.clientY };
    this.hidden.set(false);
    const element = event.target as Element | null;
    this.hovering.set(!!element?.closest('a, button, label, input, textarea'));
    this.dot()?.nativeElement.style.setProperty('transform', `translate(${event.clientX}px, ${event.clientY}px)`);
  };
  private readonly onLeave = () => this.hidden.set(true);

  constructor() {
    if (!this.enabled) return;
    this.document.documentElement.classList.add('custom-cursor');
    this.window.addEventListener('mousemove', this.onMove, { passive: true });
    this.document.addEventListener('mouseleave', this.onLeave);
    this.animate();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.frame);
    this.window.removeEventListener('mousemove', this.onMove);
    this.document.removeEventListener('mouseleave', this.onLeave);
  }

  private animate(): void {
    this.ringPosition.x += (this.target.x - this.ringPosition.x) * 0.18;
    this.ringPosition.y += (this.target.y - this.ringPosition.y) * 0.18;
    this.ring()?.nativeElement.style.setProperty(
      'transform',
      `translate(${this.ringPosition.x}px, ${this.ringPosition.y}px)`,
    );
    this.frame = requestAnimationFrame(() => this.animate());
  }
}
