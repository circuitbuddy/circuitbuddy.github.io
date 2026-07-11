import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../i18n/translate.pipe';
import { ScrollToDirective } from '../../../shared/directives/scroll-to.directive';

@Component({
  selector: 'app-top-nav',
  imports: [TranslatePipe, RouterLink, ScrollToDirective],
  templateUrl: './top-nav.component.html',
})
export class TopNavComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
