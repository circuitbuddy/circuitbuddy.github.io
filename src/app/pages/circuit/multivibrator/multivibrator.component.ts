import { Component, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslatePipe } from '../../../i18n/translate.pipe';
import { PcbPreviewComponent } from '../../../../shared/components/pcb-preview/pcb-preview.component';
import { PcbPart } from '../../../../shared/components/pcb-preview/pcb-preview.types';
import { ScrollToDirective } from '../../../../shared/directives/scroll-to.directive';
import { PartDetailsComponent } from './part-details/part-details.component';
import { MULTIVIBRATOR_PCB_CONFIG } from './multivibrator.pcb-config';

/** Height of the fixed header, subtracted so it doesn't overlap the scroll target. */
const HEADER_OFFSET_PX = 80;

@Component({
  selector: 'app-multivibrator',
  imports: [TranslatePipe, PcbPreviewComponent, ScrollToDirective, PartDetailsComponent],
  templateUrl: './multivibrator.component.html',
})
export class MultivibratorComponent {
  /** Name of the last part the user tapped on the PCB preview. */
  readonly selectedPart = signal<PcbPart | null>(null);

  readonly pcbConfig = MULTIVIBRATOR_PCB_CONFIG;

  private readonly doc = inject(DOCUMENT);

  onPartClick(part: PcbPart | null): void {
    this.selectedPart.set(part);
    if (part) {
      this.scrollToDetailsWhenReady();
    }
  }

  /**
   * Bring the write-up into view after a tap on the PCB. The card sits behind an
   * `@if`, so on the first selection it isn't in the DOM yet — retry across a few
   * frames while it renders, the same way `ScrollToDirective` does.
   */
  private scrollToDetailsWhenReady(attempts = 0): void {
    const el = this.doc.getElementById('part-details');
    const view = this.doc.defaultView;
    if (el && view) {
      // Stop short of the card's top so the fixed header doesn't cover it.
      const top = el.getBoundingClientRect().top + view.scrollY - HEADER_OFFSET_PX;
      view.scrollTo({ top, behavior: 'smooth' });
      return;
    }
    if (attempts > 20) return;
    requestAnimationFrame(() => this.scrollToDetailsWhenReady(attempts + 1));
  }
}
