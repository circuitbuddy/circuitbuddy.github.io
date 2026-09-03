import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslatePipe } from '../../../../i18n/translate.pipe';
import { PcbPart } from '../../../../../shared/components/pcb-preview/pcb-preview.types';
import { COMPONENT_IMAGES } from '../../../../../shared/component-images/component-images';

@Component({
  selector: 'app-multivibrator-part-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslatePipe],
  templateUrl: './part-details.component.html',
  host: {
    class:
      'block text-gray-700 [&_p]:text-base [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1 [&_li]:text-sm [&_li]:text-gray-600',
  },
})
export class PartDetailsComponent {
  readonly part = input.required<PcbPart>();

  /** Placement drawings, referenced from the `@case` blocks in the template. */
  protected readonly images = COMPONENT_IMAGES;
}
