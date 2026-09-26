import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslationParams, TranslationService } from './translation.service';

/** Impure so that it re-evaluates when the language signal changes. */
@Pipe({ name: 't', pure: false })
export class TranslatePipe implements PipeTransform {
  private readonly i18n = inject(TranslationService);

  transform(key: string, params?: TranslationParams): string {
    return this.i18n.translate(key, params);
  }
}
