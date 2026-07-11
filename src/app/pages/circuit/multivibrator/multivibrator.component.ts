import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../../i18n/translate.pipe';
import { PcbPreviewComponent } from '../../../../shared/components/pcb-preview/pcb-preview.component';
import { PcbPreviewConfig } from '../../../../shared/components/pcb-preview/pcb-preview.types';

@Component({
  selector: 'app-multivibrator',
  imports: [RouterLink, TranslatePipe, PcbPreviewComponent],
  templateUrl: './multivibrator.component.html',
})
export class MultivibratorComponent {
  /** Name of the last part the user tapped on the PCB preview. */
  readonly selectedPart = signal<string | null>(null);

  /**
   * Part markers in the image's natural pixel space (3069 × 2691).
   * Positions are approximate — tune them against the artwork as needed.
   */
  readonly pcbConfig: PcbPreviewConfig = {
    parts: [
      { name: 'LED 1', label: 'LED 1 (red)', shape: 'circle', x: 615, y: 760, radius: 200 },
      { name: 'LED 2', label: 'LED 2 (blue)', shape: 'circle', x: 2456, y: 773, radius: 200 },
      { name: 'R1', shape: 'rect', x: 1224, y: 734, width: 200, height: 580 },
      { name: 'R2', shape: 'rect', x: 1836, y: 734, width: 200, height: 580 },
      { name: 'R3', shape: 'rect', x: 620, y: 1285, width: 610, height: 190 },
      { name: 'R4', shape: 'rect', x: 2448, y: 1285, width: 610, height: 190 },
      { name: 'C1', label: 'Capacitor C1', shape: 'circle', x: 1224, y: 1584, radius: 205 },
      { name: 'C2', label: 'Capacitor C2', shape: 'circle', x: 1760, y: 1584, radius: 205 },
      {
        name: 'Q1',
        label: 'Transistor Q1',
        shape: 'rect',
        x: 719,
        y: 1905,
        width: 280,
        height: 340,
      },
      {
        name: 'Q2',
        label: 'Transistor Q2',
        shape: 'rect',
        x: 2379,
        y: 1905,
        width: 280,
        height: 340,
      },
      {
        name: 'USB-C',
        label: 'USB-C power',
        shape: 'rect',
        x: 1492,
        y: 2479,
        width: 500,
        height: 300,
      },
    ],
  };

  onPartClick(name: string): void {
    this.selectedPart.set(name);
  }
}
