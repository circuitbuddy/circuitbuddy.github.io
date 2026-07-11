import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavComponent } from './sections/top-nav/top-nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopNavComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('circuit-buddy');
}
