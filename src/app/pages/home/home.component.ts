import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../sections/hero-section/hero-section.component';
import { AboutSectionComponent } from '../../sections/about-section/about-section.component';
import { ProductsSectionComponent } from '../../sections/products-section/products-section.component';
import { ContactUsSectionComponent } from '../../sections/contact-us-section/contact-us-section.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroSectionComponent,
    AboutSectionComponent,
    ProductsSectionComponent,
    ContactUsSectionComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
