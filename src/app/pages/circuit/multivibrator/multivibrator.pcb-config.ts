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
      x: 176,
      y: 218,
      radius: 51,
    },
    {
      id: 'led2',
      name: 'LED 2',
      label: 'LED 2 (blue)',
      imageUrl: COMPONENT_IMAGES.Leds.led5mm,
      detailId: 'led',
      shape: 'circle',
      x: 706,
      y: 217,
      radius: 51,
    },
    {
      id: 'r1',
      name: '22k Resistor',
      imageUrl: COMPONENT_IMAGES.Resistors.r20k,
      detailId: 'r22k',
      shape: 'rect',
      x: 352,
      y: 213,
      width: 45,
      height: 123,
    },
    {
      id: 'r2',
      name: '22k Resistor',
      imageUrl: COMPONENT_IMAGES.Resistors.r20k,
      detailId: 'r22k',
      shape: 'rect',
      x: 528,
      y: 213,
      width: 45,
      height: 123,
    },
    {
      id: 'r3',
      name: '330 ohm Resistor',
      imageUrl: COMPONENT_IMAGES.Resistors.r20k,
      detailId: 'r330',
      shape: 'rect',
      x: 179,
      y: 370,
      width: 123,
      height: 45,
    },
    {
      id: 'r4',
      name: '330 ohm Resistor',
      imageUrl: COMPONENT_IMAGES.Resistors.r20k,
      detailId: 'r330',
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
      imageUrl: COMPONENT_IMAGES.Capacitors.c22uf,
      detailId: 'capacitor',
      shape: 'circle',
      x: 352,
      y: 457,
      radius: 48,
    },
    {
      id: 'c2',
      name: '47uf Capacitor',
      label: 'Capacitor C2',
      imageUrl: COMPONENT_IMAGES.Capacitors.c22uf,
      detailId: 'capacitor',
      shape: 'circle',
      x: 528,
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
      x: 227,
      y: 551,
      radius: 50,
    },
    {
      id: 't2',
      name: 'BC547 Transistor',
      label: 'Transistor Q2',
      imageUrl: COMPONENT_IMAGES.Transistors.bc547,
      detailId: 'transistor',
      shape: 'circle',
      x: 667,
      y: 551,
      radius: 50,
    },
    {
      id: 'type-c',
      name: 'USB-C Connector',
      label: 'USB-C power',
      imageUrl: COMPONENT_IMAGES.Connectors.usbC,
      detailId: 'usbC',
      shape: 'rect',
      x: 440,
      y: 701,
      width: 162,
      height: 125,
    },
  ],
};
