import { Component, signal } from '@angular/core';
import { TranslatePipe } from '../../../i18n/translate.pipe';
import { PcbPreviewComponent } from '../../../../shared/components/pcb-preview/pcb-preview.component';
import {
  PcbPart,
  PcbPreviewConfig,
} from '../../../../shared/components/pcb-preview/pcb-preview.types';
import { ScrollToDirective } from '../../../../shared/directives/scroll-to.directive';

@Component({
  selector: 'app-multivibrator',
  imports: [TranslatePipe, PcbPreviewComponent, ScrollToDirective],
  templateUrl: './multivibrator.component.html',
})
export class MultivibratorComponent {
  /** Name of the last part the user tapped on the PCB preview. */
  readonly selectedPart = signal<PcbPart | null>(null);

  /**
   * Part markers in the image's natural pixel space (3069 × 2691).
   * Positions are approximate — tune them against the artwork as needed.
   */
  readonly pcbConfig: PcbPreviewConfig = {
    parts: [
      {
        id: 'led1',
        name: 'LED 1',
        label: 'LED 1 (red)',
        shape: 'circle',
        x: 680,
        y: 815,
        radius: 200,
      },
      {
        id: 'led2',
        name: 'LED 2',
        label: 'LED 2 (blue)',
        shape: 'circle',
        x: 2525,
        y: 815,
        radius: 200,
      },
      { id: 'r1', name: '22k Resistor', shape: 'rect', x: 1290, y: 795, width: 200, height: 650 },
      { id: 'r2', name: '22k Resistor', shape: 'rect', x: 1906, y: 795, width: 200, height: 650 },
      {
        id: 'r3',
        name: '330 ohm Resistor',
        shape: 'rect',
        x: 685,
        y: 1340,
        width: 650,
        height: 190,
      },
      {
        id: 'r4',
        name: '330 ohm Resistor',
        shape: 'rect',
        x: 2520,
        y: 1340,
        width: 650,
        height: 190,
      },
      {
        id: 'c1',
        name: '47uf Capacitor',
        label: 'Capacitor C1',
        shape: 'circle',
        x: 1296,
        y: 1657,
        radius: 220,
      },
      {
        id: 'c2',
        name: '47uf Capacitor',
        label: 'Capacitor C2',
        shape: 'circle',
        x: 1901,
        y: 1657,
        radius: 220,
      },
      {
        id: 't1',
        name: 'BC547 Transistor',
        label: 'Transistor Q1',
        shape: 'rect',
        x: 804,
        y: 1982,
        width: 330,
        height: 440,
      },
      {
        id: 't2',
        name: 'BC547 Transistor',
        label: 'Transistor Q2',
        shape: 'rect',
        x: 2353,
        y: 1982,
        width: 330,
        height: 440,
      },
      {
        id: 'type-c',
        name: 'USB-C Connector',
        label: 'USB-C power',
        shape: 'rect',
        x: 1593,
        y: 2500,
        width: 580,
        height: 450,
      },
    ],
  };

  onPartClick(part: PcbPart): void {
    this.selectedPart.set(part);
  }
}
