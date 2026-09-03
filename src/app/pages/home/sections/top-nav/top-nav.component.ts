import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../../../i18n/translate.pipe';
import { TranslationService } from '../../../../i18n/translation.service';
import { ScrollToDirective } from '../../../../../shared/directives/scroll-to.directive';

@Component({
  selector: 'app-top-nav',
  imports: [TranslatePipe, RouterLink, ScrollToDirective],
  templateUrl: './top-nav.component.html',
})
export class TopNavComponent {
  protected readonly i18n = inject(TranslationService);

  isMobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
