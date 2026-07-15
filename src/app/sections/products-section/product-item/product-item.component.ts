import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../../i18n/translate.pipe';

@Component({
  selector: 'app-product-item',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './product-item.component.html',
  host: { class: 'block h-full' },
})
export class ProductItemComponent {
  pcbNo = input.required<string>();
  level = input.required<'Beginner' | 'Intermediate'>();
  /** Translation key for the product title. */
  titleKey = input.required<string>();
  /** Translation key for the product description. */
  descKey = input.required<string>();
  price = input.required<number>();
  route = input<string>();
}
