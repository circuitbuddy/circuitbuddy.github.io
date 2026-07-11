import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-item',
  imports: [RouterLink],
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent {
  pcbNo = input.required<string>();
  level = input.required<'Beginner' | 'Intermediate'>();
  title = input.required<string>();
  description = input.required<string>();
  price = input.required<number>();
  route = input<string>();
}
