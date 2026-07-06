import { Component } from '@angular/core';
import { ProductItemComponent } from './product-item/product-item.component';

type Product = {
  pcbNo: string;
  level: 'Beginner' | 'Intermediate';
  title: string;
  description: string;
  price: number;
};

@Component({
  selector: 'app-products-section',
  imports: [ProductItemComponent],
  templateUrl: './products-section.component.html',
})
export class ProductsSectionComponent {
  products: Product[] = [
    {
      pcbNo: '01',
      level: 'Beginner',
      title: 'Multivibrator Circuit',
      description:
        'The classic two-transistor LED blinker. Learn how capacitors and transistors take turns switching — the "hello world" of electronics.',
      price: 9,
    },
    {
      pcbNo: '02',
      level: 'Beginner',
      title: 'Touch Switch',
      description:
        'Turn an LED on with a fingertip. A gentle introduction to transistor amplification and how tiny signals control bigger ones.',
      price: 9,
    },
    {
      pcbNo: '03',
      level: 'Beginner',
      title: 'Dark-Activated Night Light',
      description:
        'An LDR senses the dark and switches the LED on automatically. Your first sensor circuit.',
      price: 10,
    },
    {
      pcbNo: '04',
      level: 'Intermediate',
      title: '555 LED Chaser',
      description:
        'Ten LEDs racing in a loop, driven by the legendary 555 timer and a 4017 counter. Adjustable speed knob included.',
      price: 12,
    },
    {
      pcbNo: '05',
      level: 'Intermediate',
      title: 'Mini Siren',
      description:
        'A rising-and-falling police siren built from two oscillators and a small speaker. Loud enough to annoy a sibling.',
      price: 12,
    },
    {
      pcbNo: '06',
      level: 'Intermediate',
      title: 'FM Radio Receiver',
      description:
        'Tune into real broadcasts with a single-chip FM receiver, headphone jack, and a hand-wound antenna coil you make yourself.',
      price: 15,
    },
  ];
}
