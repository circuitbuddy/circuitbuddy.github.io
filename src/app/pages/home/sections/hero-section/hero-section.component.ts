import { Component } from '@angular/core';
import { TranslatePipe } from '../../../../i18n/translate.pipe';
import { ScrollToDirective } from '../../../../../shared/directives/scroll-to.directive';

@Component({
  selector: 'app-hero-section',
  imports: [TranslatePipe, ScrollToDirective],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {}
