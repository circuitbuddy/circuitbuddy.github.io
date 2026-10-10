import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { TranslatePipe } from '../../../../i18n/translate.pipe';

type Product = {
  pcbNo: string;
  level: 'Beginner' | 'Intermediate';
  /** Translation key for the product title (see i18n/translations.ts). */
  titleKey: string;
  /** Translation key for the product description. */
  descKey: string;
  price: number;
  route?: string;
  /** Show as greyed out with a "Coming soon.." label instead of the buy button. */
  isComingSoon?: boolean;
};

@Component({
  selector: 'app-products-section',
  imports: [ProductItemComponent, TranslatePipe],
  templateUrl: './products-section.component.html',
})
export class ProductsSectionComponent {
  products: Product[] = [
    {
      pcbNo: '01',
      level: 'Beginner',
      titleKey: 'product.multivibrator.title',
      descKey: 'product.multivibrator.desc',
      price: 9,
      route: '/circuit/multivibrator',
    },
    {
      pcbNo: '02',
      level: 'Beginner',
      titleKey: 'product.knightRider.title',
      descKey: 'product.knightRider.desc',
      price: 9,
      isComingSoon: true,
    },
    {
      pcbNo: '03',
      level: 'Beginner',
      titleKey: 'product.shortCircuitDetector.title',
      descKey: 'product.shortCircuitDetector.desc',
      price: 10,
      isComingSoon: true,
    },
  ];
}
