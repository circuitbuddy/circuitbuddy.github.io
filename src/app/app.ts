import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { TopNavComponent } from './sections/top-nav/top-nav.component';
import { ProductsSectionComponent } from './sections/products-section/products-section.component';
import { ContactUsSectionComponent } from './sections/contact-us-section/contact-us-section.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TopNavComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ProductsSectionComponent,
    ContactUsSectionComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('circuit-buddy');
}
