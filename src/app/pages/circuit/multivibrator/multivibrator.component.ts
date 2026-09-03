import { Component, signal } from '@angular/core';
import { TranslatePipe } from '../../../i18n/translate.pipe';
import { PcbPreviewComponent } from '../../../../shared/components/pcb-preview/pcb-preview.component';
import { PcbPart } from '../../../../shared/components/pcb-preview/pcb-preview.types';
import { ScrollToDirective } from '../../../../shared/directives/scroll-to.directive';
import { PartDetailsComponent } from './part-details/part-details.component';
import { MULTIVIBRATOR_PCB_CONFIG } from './multivibrator.pcb-config';

@Component({
  selector: 'app-multivibrator',
  imports: [TranslatePipe, PcbPreviewComponent, ScrollToDirective, PartDetailsComponent],
  templateUrl: './multivibrator.component.html',
})
export class MultivibratorComponent {
  /** Name of the last part the user tapped on the PCB preview. */
  readonly selectedPart = signal<PcbPart | null>(null);

  readonly pcbConfig = MULTIVIBRATOR_PCB_CONFIG;

  onPartClick(part: PcbPart | null): void {
    this.selectedPart.set(part);
  }
}
