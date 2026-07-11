import { Component } from '@angular/core';
import { ProductItemComponent } from './product-item/product-item.component';
import { TranslatePipe } from '../../i18n/translate.pipe';

type Product = {
  pcbNo: string;
  level: 'Beginner' | 'Intermediate';
  /** Translation key for the product title (see i18n/translations.ts). */
  titleKey: string;
  /** Translation key for the product description. */
  descKey: string;
  price: number;
  route?: string;
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
      titleKey: 'product.touch.title',
      descKey: 'product.touch.desc',
      price: 9,
    },
    {
      pcbNo: '03',
      level: 'Beginner',
      titleKey: 'product.nightlight.title',
      descKey: 'product.nightlight.desc',
      price: 10,
    },
    {
      pcbNo: '04',
      level: 'Intermediate',
      titleKey: 'product.chaser.title',
      descKey: 'product.chaser.desc',
      price: 12,
    },
    {
      pcbNo: '05',
      level: 'Intermediate',
      titleKey: 'product.siren.title',
      descKey: 'product.siren.desc',
      price: 12,
    },
    {
      pcbNo: '06',
      level: 'Intermediate',
      titleKey: 'product.fmradio.title',
      descKey: 'product.fmradio.desc',
      price: 15,
    },
  ];
}
