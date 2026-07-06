import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent {
  pcbNo = input.required<string>();
  level = input.required<'Beginner' | 'Intermediate'>();
  title = input.required<string>();
  description = input.required<string>();
  price = input.required<number>();
}
