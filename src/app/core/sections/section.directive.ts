import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';
import { SectionService, SectionTheme } from './section.service';

@Directive({
  selector: '[appSection]',
  host: {
    '[id]': 'appSection()',
    '[class]': '"theme-" + theme()',
  },
})
export class SectionDirective implements OnInit, OnDestroy {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly sections = inject(SectionService);

  readonly appSection = input.required<string>();
  readonly theme = input.required<SectionTheme>();

  ngOnInit(): void {
    this.sections.register({ id: this.appSection(), theme: this.theme(), element: this.element });
  }

  ngOnDestroy(): void {
    this.sections.unregister(this.element);
  }
}
