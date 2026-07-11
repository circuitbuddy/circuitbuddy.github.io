import { Component } from '@angular/core';
import { TranslatePipe } from '../../i18n/translate.pipe';

@Component({
  selector: 'app-contact-us-section',
  imports: [TranslatePipe],
  templateUrl: './contact-us-section.component.html',
})
export class ContactUsSectionComponent {}
