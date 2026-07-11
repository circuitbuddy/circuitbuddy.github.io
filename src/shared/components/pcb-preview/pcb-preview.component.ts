import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { PcbPart, PcbPreviewConfig } from './pcb-preview.types';

const MIN_ZOOM = 1;
const MAX_ZOOM = 2;
const ZOOM_STEP = 0.5;
/** Movement (px) before a press is treated as a pan instead of a tap. */
const DRAG_THRESHOLD = 4;

@Component({
  selector: 'app-pcb-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pcb-preview.component.html',
  styleUrls: ['./pcb-preview.component.css'],
})
export class PcbPreviewComponent {
  /** Image file name inside `basePath`, e.g. `'multivibrator.png'`. */
  image = input.required<string>();
  /** Directory the image lives in. */
  basePath = input<string>('/assets/pcb-images/');
  /** Clickable part markers, positioned in the image's natural pixel space. */
  config = input<PcbPreviewConfig>({ parts: [] });

  /** Emits the `name` of the part that was clicked/tapped. */
  readonly partClick = output<PcbPart | null>();

  /** Name of the currently highlighted part, set on tap. */
  readonly selected = signal<string | null>(null);

  private readonly viewport = viewChild.required<ElementRef<HTMLElement>>('viewport');

  readonly imageSrc = computed(() => `${this.basePath()}${this.image()}`);

  /** Natural pixel size of the loaded image; `null` until it loads. */
  readonly naturalSize = signal<{ w: number; h: number } | null>(null);

  readonly zoom = signal(MIN_ZOOM);
  private readonly panX = signal(0);
  private readonly panY = signal(0);
  readonly isDragging = signal(false);

  readonly canZoomIn = computed(() => this.zoom() < MAX_ZOOM);
  readonly canZoomOut = computed(() => this.zoom() > MIN_ZOOM);
  readonly canPan = computed(() => this.zoom() > MIN_ZOOM);

  /**
   * Pan only — zoom is applied via the stage's layout size (see template) so the
   * browser re-rasterises the image from its full resolution instead of scaling
   * an already-rendered (blurry) bitmap.
   */
  readonly transform = computed(() => `translate(${this.panX()}px, ${this.panY()}px)`);

  /** SVG viewBox matches the natural image so part coords land exactly. */
  readonly viewBox = computed(() => {
    const s = this.naturalSize();
    return s ? `0 0 ${s.w} ${s.h}` : undefined;
  });

  readonly aspectRatio = computed(() => {
    const s = this.naturalSize();
    return s ? `${s.w} / ${s.h}` : '4 / 3';
  });

  /** Parts normalised to SVG primitives (rect x/y become top-left). */
  readonly markers = computed(() =>
    this.config().parts.map((p) =>
      p.shape === 'circle'
        ? {
            id: p.id,
            kind: 'circle' as const,
            name: p.name,
            label: p.label,
            cx: p.x,
            cy: p.y,
            r: p.radius,
            part: p,
          }
        : {
            id: p.id,
            kind: 'rect' as const,
            name: p.name,
            label: p.label,
            x: p.x - p.width / 2,
            y: p.y - p.height / 2,
            width: p.width,
            height: p.height,
            part: p,
          },
    ),
  );

  // --- gesture state ---
  private pointerDown = false;
  private moved = false;
  private startX = 0;
  private startY = 0;
  private startPanX = 0;
  private startPanY = 0;

  onImageLoad(img: HTMLImageElement): void {
    this.naturalSize.set({ w: img.naturalWidth, h: img.naturalHeight });
  }

  zoomIn(): void {
    this.setZoom(this.zoom() + ZOOM_STEP);
  }

  zoomOut(): void {
    this.setZoom(this.zoom() - ZOOM_STEP);
  }

  reset(): void {
    this.zoom.set(MIN_ZOOM);
    this.panX.set(0);
    this.panY.set(0);
    this.selected.set(null);
    this.partClick.emit(null);
  }

  onWheel(event: WheelEvent): void {
    // event.preventDefault();
    // this.setZoom(this.zoom() + (event.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP));
  }

  onPointerDown(event: PointerEvent): void {
    // Don't capture yet: a plain tap must still reach a part marker (which
    // matters when zoomed in). We only start panning once movement crosses the
    // threshold in onPointerMove.
    this.pointerDown = true;
    this.moved = false;
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.startPanX = this.panX();
    this.startPanY = this.panY();
  }

  onPointerMove(event: PointerEvent): void {
    if (!this.pointerDown) return;
    const dx = event.clientX - this.startX;
    const dy = event.clientY - this.startY;

    if (!this.isDragging()) {
      if (!this.canPan()) return;
      if (Math.abs(dx) <= DRAG_THRESHOLD && Math.abs(dy) <= DRAG_THRESHOLD) return;
      // Movement crossed the threshold — begin panning and capture the pointer
      // so it keeps tracking outside the element.
      this.moved = true;
      this.isDragging.set(true);
      this.viewport().nativeElement.setPointerCapture(event.pointerId);
    }
    this.setPan(this.startPanX + dx, this.startPanY + dy);
  }

  onPointerUp(event: PointerEvent): void {
    this.pointerDown = false;
    if (!this.isDragging()) return;
    this.isDragging.set(false);
    const vp = this.viewport().nativeElement;
    if (vp.hasPointerCapture(event.pointerId)) vp.releasePointerCapture(event.pointerId);
  }

  onPartClick(part: PcbPart): void {
    // Suppress the click that ends a drag gesture.
    if (this.moved) return;
    this.selected.set(part.id);
    this.partClick.emit(part);
  }

  /** Clamp to [MIN, MAX] and zoom toward the viewport centre. */
  private setZoom(next: number): void {
    const clamped = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Math.round(next * 100) / 100));
    const prev = this.zoom();
    if (clamped === prev) return;
    const rect = this.viewport().nativeElement.getBoundingClientRect();
    const ratio = clamped / prev;
    // Keep the content point under the viewport centre fixed.
    const nx = rect.width / 2 - (rect.width / 2 - this.panX()) * ratio;
    const ny = rect.height / 2 - (rect.height / 2 - this.panY()) * ratio;
    this.zoom.set(clamped);
    this.setPan(nx, ny);
  }

  /** Clamp panning so the scaled content always covers the viewport. */
  private setPan(x: number, y: number): void {
    const rect = this.viewport().nativeElement.getBoundingClientRect();
    const z = this.zoom();
    const minX = rect.width * (1 - z);
    const minY = rect.height * (1 - z);
    this.panX.set(Math.min(0, Math.max(minX, x)));
    this.panY.set(Math.min(0, Math.max(minY, y)));
  }
}
