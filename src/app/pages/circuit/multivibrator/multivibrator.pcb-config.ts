import { PcbPreviewConfig } from '../../../../shared/components/pcb-preview/pcb-preview.types';
import { COMPONENT_IMAGES } from '../../../../shared/component-images/component-images';

/**
 * Clickable part markers for the multivibrator board.
 *
 * Coordinates are in the image's *natural* pixel space (3069 × 2691), so they
 * hold at any zoom level. Positions are approximate — tune them against the
 * artwork as needed.
 *
 * `detailId` picks which write-up `PartDetailsComponent` shows for the part;
 * parts that share a value share a block (see `part-details/`).
 */
export const MULTIVIBRATOR_PCB_CONFIG: PcbPreviewConfig = {
  parts: [
    {
      id: 'led1',
      name: 'LED 1',
      label: 'LED 1 (red)',
      imageUrl: COMPONENT_IMAGES.Leds.led5mm,
      detailId: 'led',
      shape: 'circle',
      x: 175,
      y: 220,
      radius: 45,
    },
    {
      id: 'led2',
      name: 'LED 2',
      label: 'LED 2 (blue)',
      imageUrl: COMPONENT_IMAGES.Leds.led5mm,
      detailId: 'led',
      shape: 'circle',
      x: 706,
      y: 220,
      radius: 45,
    },
    {
      id: 'r1',
      name: '20kΩ Resistor',
      imageUrl: COMPONENT_IMAGES.Resistors.r20k,
      detailId: 'r22k',
      shape: 'rect',
      x: 351,
      y: 215,
      width: 40,
      height: 110,
    },
    {
      id: 'r2',
      name: '20kΩ Resistor',
      imageUrl: COMPONENT_IMAGES.Resistors.r20k,
      detailId: 'r22k',
      shape: 'rect',
      x: 527,
      y: 215,
      width: 40,
      height: 110,
    },
    {
      id: 'r3',
      name: '200Ω Resistor',
      imageUrl: COMPONENT_IMAGES.Resistors.r20k,
      detailId: 'r330',
      shape: 'rect',
      x: 178,
      y: 371,
      width: 110,
      height: 40,
    },
    {
      id: 'r4',
      name: '200Ω Resistor',
      imageUrl: COMPONENT_IMAGES.Resistors.r20k,
      detailId: 'r330',
      shape: 'rect',
      x: 704,
      y: 371,
      width: 110,
      height: 40,
    },
    {
      id: 'c1',
      name: '22uf Capacitor',
      label: 'Capacitor C1',
      imageUrl: COMPONENT_IMAGES.Capacitors.c22uf,
      detailId: 'capacitor',
      shape: 'circle',
      x: 350,
      y: 457,
      radius: 48,
    },
    {
      id: 'c2',
      name: '22uf Capacitor',
      label: 'Capacitor C2',
      imageUrl: COMPONENT_IMAGES.Capacitors.c22uf,
      detailId: 'capacitor',
      shape: 'circle',
      x: 529,
      y: 457,
      radius: 48,
    },
    {
      id: 't1',
      name: 'BC547 Transistor',
      label: 'Transistor Q1',
      imageUrl: COMPONENT_IMAGES.Transistors.bc547,
      detailId: 'transistor',
      shape: 'circle',
      x: 212,
      y: 554,
      radius: 48,
    },
    {
      id: 't2',
      name: 'BC547 Transistor',
      label: 'Transistor Q2',
      imageUrl: COMPONENT_IMAGES.Transistors.bc547,
      detailId: 'transistor',
      shape: 'circle',
      x: 652,
      y: 554,
      radius: 48,
    },
    {
      id: 'type-c',
      name: 'USB-C Connector',
      label: 'USB-C power',
      imageUrl: COMPONENT_IMAGES.Connectors.usbC,
      detailId: 'usbC',
      shape: 'rect',
      x: 439,
      y: 702,
      width: 154,
      height: 120,
    },
  ],
};
