import { CapacitorImages } from './capacitor-images/capacitor-images';
import { ConnectorImages } from './connector-images/connector-images';
import { LedImages } from './led-images/led-images';
import { ResistorImages } from './resistor-images/resistor-images';
import { TransistorImages } from './transistor-images/transistors-images';

export const COMPONENT_IMAGES = {
  Resistors: ResistorImages,
  Transistors: TransistorImages,
  Capacitors: CapacitorImages,
  Leds: LedImages,
  Connectors: ConnectorImages,
} as const;
