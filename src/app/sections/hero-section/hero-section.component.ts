import { Component, inject } from '@angular/core';
import { TranslatePipe } from '../../i18n/translate.pipe';
import { TranslationService } from '../../i18n/translation.service';
import { ScrollToDirective } from '../../../shared/directives/scroll-to.directive';

@Component({
  selector: 'app-hero-section',
  imports: [TranslatePipe, ScrollToDirective],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  protected readonly i18n = inject(TranslationService);
}
