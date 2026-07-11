import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MultivibratorComponent } from './pages/circuit/multivibrator/multivibrator.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'circuit/multivibrator', component: MultivibratorComponent },
  { path: '**', redirectTo: '' },
];
