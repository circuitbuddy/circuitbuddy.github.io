import { TestBed } from '@angular/core/testing';
import { PcbPreviewComponent } from './pcb-preview.component';
import { PcbPreviewConfig } from './pcb-preview.types';

function createComponent() {
  const fixture = TestBed.createComponent(PcbPreviewComponent);
  fixture.componentRef.setInput('image', 'multivibrator.png');
  fixture.detectChanges();
  return fixture;
}

describe('PcbPreviewComponent', () => {
  it('builds the image src from basePath + file name', () => {
    const fixture = createComponent();
    const c = fixture.componentInstance;
    expect(c.imageSrc()).toBe('/assets/pcb-images/multivibrator.png');

    fixture.componentRef.setInput('basePath', '/custom/');
    expect(c.imageSrc()).toBe('/custom/multivibrator.png');
  });

  it('derives viewBox and aspect-ratio from the loaded image size', () => {
    const fixture = createComponent();
    const c = fixture.componentInstance;
    expect(c.viewBox()).toBeUndefined();
    expect(c.aspectRatio()).toBe('4 / 3');

    c.onImageLoad({ naturalWidth: 3069, naturalHeight: 2691 } as HTMLImageElement);
    expect(c.viewBox()).toBe('0 0 3069 2691');
    expect(c.aspectRatio()).toBe('3069 / 2691');
  });

  it('normalises parts to SVG primitives (rect x/y become top-left)', () => {
    const fixture = createComponent();
    const c = fixture.componentInstance;
    const config: PcbPreviewConfig = {
      parts: [
        { name: 'C1', shape: 'circle', x: 100, y: 200, radius: 20 },
        { name: 'R1', shape: 'rect', x: 100, y: 200, width: 40, height: 10 },
      ],
    };
    fixture.componentRef.setInput('config', config);

    expect(c.markers()).toEqual([
      { kind: 'circle', name: 'C1', label: undefined, cx: 100, cy: 200, r: 20 },
      { kind: 'rect', name: 'R1', label: undefined, x: 80, y: 195, width: 40, height: 10 },
    ]);
  });

  it('steps and clamps zoom, tracking the zoom-in/out affordances', () => {
    const fixture = createComponent();
    const c = fixture.componentInstance;
    expect(c.zoom()).toBe(1);
    expect(c.canZoomOut()).toBe(false);
    expect(c.canPan()).toBe(false);

    c.zoomIn();
    expect(c.zoom()).toBe(1.5);
    expect(c.canZoomOut()).toBe(true);
    expect(c.canPan()).toBe(true);

    // Zoom in past the cap: it clamps and can't go further.
    for (let i = 0; i < 20; i++) c.zoomIn();
    expect(c.canZoomIn()).toBe(false);
    const capped = c.zoom();
    expect(capped).toBeGreaterThan(1);
    c.zoomIn();
    expect(c.zoom()).toBe(capped);

    c.reset();
    expect(c.zoom()).toBe(1);
    expect(c.canZoomOut()).toBe(false);
  });

  it('emits the part name and highlights it on a tap', () => {
    const fixture = createComponent();
    const c = fixture.componentInstance;
    const emitted: string[] = [];
    c.partClick.subscribe((name) => emitted.push(name));

    expect(c.selected()).toBeNull();
    c.onPartClick('R1');
    expect(emitted).toEqual(['R1']);
    expect(c.selected()).toBe('R1');

    c.onPartClick('C1');
    expect(c.selected()).toBe('C1');
  });
});
