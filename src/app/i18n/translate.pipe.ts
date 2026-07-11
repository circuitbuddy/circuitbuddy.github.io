import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslationService } from './translation.service';

/**
 * Usage: {{ 'nav.about' | t }}  or  [innerHTML]="'about.p1' | t"
 *
 * Marked impure so `transform` runs on every check: it reads the `lang` signal
 * inside `TranslationService.t()`, which registers the host view as a consumer
 * of that signal. Toggling the language then re-renders and re-translates.
 */
@Pipe({ name: 't', pure: false })
export class TranslatePipe implements PipeTransform {
  private readonly i18n = inject(TranslationService);

  transform(key: string): string {
    return this.i18n.t(key);
  }
}
