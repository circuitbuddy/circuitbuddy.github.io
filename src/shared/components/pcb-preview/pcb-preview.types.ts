/**
 * Configuration for the clickable part markers drawn on top of a PCB image.
 *
 * All coordinates are in the image's *natural* pixel space (its intrinsic
 * resolution), so they stay accurate at any zoom level. `x`/`y` are the marker
 * centre for both shapes.
 */
export type PcbPartShape = 'circle' | 'rect';

interface PcbPartBase {
  id: string;
  /** Identifier emitted through `(partClick)` when the marker is tapped. */
  name: string;
  /** Optional tooltip text; falls back to `name`. */
  label?: string;
  /** Marker centre X, in natural image pixels. */
  x: number;
  /** Marker centre Y, in natural image pixels. */
  y: number;
}

export interface PcbCirclePart extends PcbPartBase {
  shape: 'circle';
  /** Radius in natural image pixels. */
  radius: number;
}

export interface PcbRectPart extends PcbPartBase {
  shape: 'rect';
  /** Width in natural image pixels (centred on `x`). */
  width: number;
  /** Height in natural image pixels (centred on `y`). */
  height: number;
}

export type PcbPart = PcbCirclePart | PcbRectPart;

export interface PcbPreviewConfig {
  parts: PcbPart[];
}
