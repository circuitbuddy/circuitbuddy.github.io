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
        x: 176,
        y: 218,
        radius: 51,
      },
      {
        id: 'led2',
        name: 'LED 2',
        label: 'LED 2 (blue)',
        shape: 'circle',
        x: 706,
        y: 217,
        radius: 51,
      },
      { id: 'r1', name: '22k Resistor', shape: 'rect', x: 352, y: 213, width: 45, height: 123 },
      { id: 'r2', name: '22k Resistor', shape: 'rect', x: 528, y: 213, width: 45, height: 123 },
      {
        id: 'r3',
        name: '330 ohm Resistor',
        shape: 'rect',
        x: 179,
        y: 370,
        width: 123,
        height: 45,
      },
      {
        id: 'r4',
        name: '330 ohm Resistor',
        shape: 'rect',
        x: 703,
        y: 370,
        width: 123,
        height: 45,
      },
      {
        id: 'c1',
        name: '47uf Capacitor',
        label: 'Capacitor C1',
        shape: 'circle',
        x: 352,
        y: 457,
        radius: 48,
      },
      {
        id: 'c2',
        name: '47uf Capacitor',
        label: 'Capacitor C2',
        shape: 'circle',
        x: 528,
        y: 457,
        radius: 48,
      },
      {
        id: 't1',
        name: 'BC547 Transistor',
        label: 'Transistor Q1',
        shape: 'circle',
        x: 217,
        y: 551,
        radius: 50,
      },
      {
        id: 't2',
        name: 'BC547 Transistor',
        label: 'Transistor Q2',
        shape: 'circle',
        x: 657,
        y: 551,
        radius: 50,
      },
      {
        id: 'type-c',
        name: 'USB-C Connector',
        label: 'USB-C power',
        shape: 'rect',
        x: 440,
        y: 701,
        width: 162,
        height: 125,
      },
    ],
  };

  onPartClick(part: PcbPart | null): void {
    this.selectedPart.set(part);
  }
}
