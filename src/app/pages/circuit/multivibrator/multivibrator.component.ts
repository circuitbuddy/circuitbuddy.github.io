import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../../i18n/translate.pipe';

@Component({
  selector: 'app-multivibrator',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './multivibrator.component.html',
})
export class MultivibratorComponent {}
